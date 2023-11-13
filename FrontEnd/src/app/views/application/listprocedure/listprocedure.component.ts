import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  IApplication,
  Procedure,
} from "../../../configuration/interfaces/application.interface";
import { ConfiguratorService } from "../../../services/configurator.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { FormGroup, FormControl } from "@angular/forms";
import { NotificationService } from "../../../services/common/notification.service";
import { Location } from '@angular/common'

@Component({
  selector: "app-listprocedure",
  templateUrl: "./listprocedure.component.html",
  styleUrls: ["./listprocedure.component.scss"],
})
export class ListprocedureComponent implements OnInit {
  public applicationId: string = "";
  public application: IApplication;
  public procedures: Procedure[] = [];
  public procedureSelected: Procedure;
  public procedure: Procedure;
  public newProcedure: boolean;
  public cols: any[];
  public displayDialog: boolean;
  public textarea: any;

  constructor(
    private configService: ConfiguratorService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private service: ConfiguratorService,
    private notifyService : NotificationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.cols = [
      { field: "Procedure", header: "Procedimiento" },
      { field: "ProcedureKey", header: "Llave" },
      { field: "Active", header: "Estado" },
      { field: "Trace", header: "Trace" },
      { field: "Parameters", header: "Parametros" },
    ];

    this.route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }
      this.applicationId = params.applicationId;
      console.log(this.applicationId); // price
      this.onLoadApplicationInfo();
    }, (error) => {
      this.notifyService.showError(JSON.stringify(error), "Cargar parametros");
    });
  }

  showDialogToAdd() {
    this.newProcedure = true;
    this.procedure = {};
    this.displayDialog = true;
}

  onLoadApplicationInfo() {
    this.procedures = [];
    this.configService
      .getApplicationbyid(this.applicationId)
      .subscribe((app) => {
        if (app) {
          this.application = app;
          console.log(this.application);
          if (this.application.Procedures) {
            this.procedures = this.application.Procedures;
            console.log(this.procedures);
          }
        }
      }, (error) => {
        this.notifyService.showError(error.error.message, "Error al cargar parametros");
      });
  }

  onRowSelect(event) {
    this.newProcedure = false;
    this.procedure = this.cloneProcedure(event.data);
    this.displayDialog = true;
  }

  cloneProcedure(c: Procedure): Procedure {
    let proc = { ...c };
    this.textarea = proc.Parameters;
    return proc;
  }

  parseTextArea() {
    console.log('textarea => ', this.textarea);
    this.procedure.Parameters = this.textarea.split(",").filter(e => String(e).trim());
    //this.procedure.Parameters = this.procedure.Parameters.filter(e => String(e).trim());
 }

  onUpdate() {
    const procedures = [...this.application.Procedures];
    if (this.newProcedure) {
      //CON ESTE CAMBIO NOS ASEGURAMOS QUE LA COLECCION DE PARAMETROS NO QUEDE NULA
      if(this.procedure.Parameters === undefined) {
        this.procedure.Parameters = [];
      }
      console.log('to insert', this.procedure.Parameters);
      procedures.push(this.procedure);
    } else {
      console.log('to update', this.procedure.Parameters)
      procedures[this.procedures.indexOf(this.procedureSelected)] = this.procedure;
    }

    console.log(procedures);

    this.application.Procedures = procedures;
    this.service
      .updateApplication(this.application.id, this.application)
      .subscribe(
        (res) => {
          console.log(res);
          this.onLoadApplicationInfo();
          this.notifyService.showSuccess("Actualizacion de parametros", "Proceso Exitoso");
        },
        (error) => {
          console.error(error);
          this.notifyService.showError(error.error.message, "Error al actualizar parametros");
        }
      );

    this.application.Procedures = procedures;
    this.procedure = null;
    this.displayDialog = false;
    this.textarea = '';
  }

  onDelete() {
    let index = this.procedures.indexOf(this.procedureSelected);
    this.procedures = this.procedures.filter((val, i) => i != index);
    this.procedure = null;
    this.displayDialog = false;

    console.log(this.procedures);

    this.application.Procedures = this.procedures;
    this.service
      .updateApplication(this.application.id, this.application)
      .subscribe(
        (res) => {
          console.log(res);
          this.notifyService.showSuccess("Procedimiento eliminado con éxito", "Proceso Exitoso");
          this.onLoadApplicationInfo();
        },
        (error) => {
          console.error(error);
          this.notifyService.showError(error.error.message, "Error al actualizar parametros");
        }
      );
  }

  back(): void {
    this.location.back()
  }
}
