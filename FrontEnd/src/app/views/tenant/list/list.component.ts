import { Component, OnInit, ViewChild } from "@angular/core";
import { IApplication } from "../../../configuration/interfaces/application.interface";
import { ConfiguratorService } from "../../../services/configurator.service";
import { Router } from "@angular/router";
import { ITenant } from "../../../configuration/interfaces/tenant.interface";
import { SelectItem } from "primeng/api";

import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";
import { StorageService } from "../../../services/common/storage.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public rol: string = "ADMIN";
  public env: string = "";
  public tenants: ITenant[] = [];
  public tenant: ITenant;
  public selectedTenant: ITenant;
  public newtenant: boolean;
  public cols: any[];
  public displayDialog: boolean;
  public displayConfig: boolean;

  public environments: any[];
  public applications: any[];

  public editorOptions: JsonEditorOptions;
  public data: any;
  public retriveData: any;
  isJsonModified: boolean = false;
  @ViewChild(JsonEditorComponent, { static: false })
  editor: JsonEditorComponent;

  constructor(
    private configService: ConfiguratorService,
    private session: StorageService,
    private router: Router
  ) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = "code";
    this.editorOptions.modes = ["code", "text", "tree", "view"];
    //this.editorOptions.statusBar = false;
    this.editorOptions.onChange = () => this.fetchdata();
    this.env = session.getCurrentEnvironment();

    console.log(this.env);
  }

  fetchdata() {
    try {
      this.isJsonModified = true;
      console.log("se edito");
      this.retriveData = this.editor.get();
    } catch (e) {
      console.log(e);
      this.isJsonModified = false;
    }
  }

  ngOnInit(): void {
    this.displayConfig = false;
    this.cols = [
      { field: "id", header: "Id" },
      { field: "TenantId", header: "TenantId" },
      { field: "Name", header: "Nombre" },
      { field: "Description", header: "Descripcion" },
      { field: "EnvironmentId", header: "Ambiente" },
      { field: "ApplicationId", header: "Aplicaciones" },
      { field: "Configuration", header: "AppSettings" },
      { field: "CreateAt", header: "Creado" },
      { field: "ExpiredAt", header: "Expira" },
      { field: "AprovedBy", header: "Aprobado por" },
    ];

    this.onLoadTenants();
    this.onLoadEnvironment();
    this.onLoadApplications();
  }

  onLoadTenants() {
    this.configService.getTenantList().subscribe(
      (data) => {
        if (data) {
          console.log("respuesta");
          this.tenants = [];
          this.tenants = data.sort((a, b) => (a.id > b.id) ? -1 : 1);
          console.log(this.tenants);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onLoadEnvironment() {
    this.configService.getAllEnvironments().subscribe((data) => {
      this.environments = data.map((x) => {
        var obj = {};
        obj["label"] = x.EnvironmetId;
        obj["value"] = x.EnvironmetId;
        return obj;
      });
      console.log(this.environments);
    });
  }

  onLoadApplications() {
    this.configService.getApplicationList().subscribe((data) => {
      this.applications = data.map((x) => {
        var obj = {};
        obj["label"] = x.ApplicationId;
        obj["value"] = x.ApplicationId;
        return obj;
      });
      console.log("Aplicaciones");
      console.log(this.applications);
    });
  }

  showDialogToAdd() {
    this.newtenant = true;
    this.tenant = {};
    this.tenant.CreateAt = new Date();
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newtenant = false;
    this.tenant = this.cloneProcedure(event.data);
    this.displayDialog = true;
    this.data = this.tenant.Configuration;
  }

  cloneProcedure(c: ITenant): ITenant {
    let prop = { ...c };
    return prop;
  }

  onUpdate() {
    //const applications = [...this.applications];
    if (this.newtenant) {
      //Empty Properties
      //AQUI LE PASAMOS EL CONFIG MODIFICADO
      if (this.isJsonModified) {
        this.data = this.retriveData;
      }
      this.tenant.Configuration = this.data;
      console.log("aplicacion a guardar");
      console.log(this.tenant);
      this.configService.createTenant(this.tenant).subscribe(
        (res) => {
          console.log(res);
          this.onLoadTenants();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      //AQUI LE PASAMOS EL CONFIG MODIFICADO
      if (this.isJsonModified) {
        this.data = this.retriveData;
      }
      this.tenant.Configuration = this.data;
      this.configService.updateTenant(this.tenant.id, this.tenant).subscribe(
        (res) => {
          console.log(res);
          this.onLoadTenants();
        },
        (error) => {
          console.error(error);
        }
      );
    }
    //this.applications = applications;
    this.tenant = null;
    this.displayDialog = false;
  }

  onDelete() {
    const tenant = this.selectedTenant;
    this.configService.deleteTenant(tenant.id).subscribe(
      (res) => {
        console.log(res);
        this.onLoadTenants();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showEditor(data: any) {
    //this.data = data;
    this.displayConfig = true;
    //console.log(JSON.stringify(data));
    // console.log(this.data);
    // console.log(this.editor.data);
    // //this.tenant.Configuration = this.editor.data
    // this.editor.onChange((data) => {
    //   console.log(JSON.stringify(data));
    // })
  }

  onChange(data) {
    //console.log('onChange',data);
    //console.log(this.editor.data);
  }

  onMigrate(tenantid: string) {
    this.configService.getMigrationInformation("Dev", tenantid)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.error(error)
      })
  }
}
