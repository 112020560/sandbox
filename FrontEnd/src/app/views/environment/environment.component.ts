import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { SandBoxEnviroment } from '../../configuration/interfaces/environmet.interface';
import { ConfiguratorService } from '../../services/configurator.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {
  public displayDialog: boolean = false;
  public newEnvironment: boolean = false;
  public environments: SandBoxEnviroment[] = []
  public environment: SandBoxEnviroment;
  public selectedEnvironment: SandBoxEnviroment;
  public cols: any[];
  public displayConfig: boolean = false;
  public data: any;
  public editorOptions: JsonEditorOptions;
  public retriveDataInstance: any;
  public retriveDataEndpoints: any;
  isJsonModified: boolean = false;
  openInstance: boolean = false;
  openEndpoints: boolean = false;

  constructor(private configService: ConfiguratorService) {
    this.cols = [
      { field: "EnvironmetId", header: "Ambiente" },
      { field: "Name", header: "Nombre" },
      { field: "Description", header: "Descripcion" },
      { field: "Instances", header: "Instancias" },
      { field: "EndPoints", header: "EndPoints" },
      { field: "IsEnable", header: "Estado" },
    ];

    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.mode = 'code';
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];

    this.editorOptions.onChange = () => this.fetchdata()
   }

   fetchdata() {
    try {
        this.isJsonModified = true;
        console.log('se edito');
        if(this.openInstance) {
          this.retriveDataInstance = this.editor.get();
        }
        if(this.openEndpoints) {
          this.retriveDataEndpoints = this.editor.get();
        }

    } catch(e) {
      console.log(e);
      this.isJsonModified = false;
    }
 }

   @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent;

  ngOnInit(): void {
    this.onLoadEnvironments();
  }

  onLoadEnvironments() {
    this.configService.getAllEnvironments().subscribe(
      (data: SandBoxEnviroment[]) => {
        this.environments = data;
        console.log(this.environments);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  showDialogToAdd() {
    this.newEnvironment = true;
    this.environment = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    console.log('Entre');
    this.newEnvironment = false;
    this.environment = this.cloneProcedure(event.data);
    this.displayDialog = true;
  }

  cloneProcedure(c: SandBoxEnviroment): SandBoxEnviroment {
    let prop = { ...c };
    return prop;
  }

  onUpdate() {
    console.log('aplicacion a guardar  Antes');
      console.log('Antes', this.environment)
    if (this.newEnvironment) {

      const env = {...this.environment}

      env.Instances = this.retriveDataInstance;
      env.EndPoints = this.retriveDataEndpoints;
      //Empty Properties
      console.log('aplicacion a guardar despues');
      console.log(env)
      this.configService.createEnvironments(env).subscribe(
        (res) => {
          console.log(res);
          this.onLoadEnvironments();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      if(this.openInstance)
        this.environment.Instances = this.retriveDataInstance;
      if(this.openEndpoints)
        this.environment.EndPoints = this.retriveDataEndpoints;

      this.configService
        .updateEnvironments(this.environment.id, this.environment)
        .subscribe(
          (res) => {
            console.log(res);
            this.onLoadEnvironments();
          },
          (error) => {
            console.error(error);
          }
        );
    }
    this.environment = null;
    this.displayDialog = false;
  }

  showInstanceConfig(data: any) {
    this.openEndpoints = false;
    this.openInstance = true;
    this.data = data;
    this.displayConfig = true;
  }

  showEndpointsConfig(data: any) {
    this.openInstance = false;
    this.openEndpoints = true;
    this.data = data;
    this.displayConfig = true;
  }

  onDelete()
  {};

}
