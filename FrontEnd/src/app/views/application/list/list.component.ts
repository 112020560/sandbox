import { Component, OnInit } from "@angular/core";
import { IApplication } from "../../../configuration/interfaces/application.interface";
import { ConfiguratorService } from "../../../services/configurator.service";
import { Router } from "@angular/router";
import { CloneAppDto } from "../../../configuration/dtos/cloneapp.dot";
import { CoreService } from "../../../services/core.service";
import { Country } from "../../../configuration/interfaces/country.interface";
import { NotificationService } from "../../../services/common/notification.service";
//import { MessageService } from "primeng";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  public applications: IApplication[] = [];
  public application: IApplication;
  public cloneApplication: IApplication;
  public selectedApplication: IApplication;
  public newApplication: boolean;
  public cols: any[];
  public displayDialog: boolean;
  public displayCloneDialog: boolean;
  public id_old_core: number = 0;
  public displayImportDialog: boolean = false;
  public countries: any[] = []
  constructor(
    private configService: ConfiguratorService,
    private router: Router,
    private core: CoreService,
    private notifyService : NotificationService
  ) {}

  ngOnInit(): void {
    this.cols = [
      { field: "ApplicationCode", header: "Codigo" },
      { field: "ApplicationId", header: "Identificador" },
      { field: "ApplicationName", header: "Nombre" },
      { field: "Description", header: "Descripcion" },
      { field: "Country", header: "Países" },
      { field: "IsEnable", header: "Activo" },
      { field: "Connections", header: "Conexiones" },
      { field: "Procedimientos", header: "Procedures" },
      { field: "Propiedades", header: "ExtendedProperties" },
    ];
    this.onLoadApplication();
  }

  onLoadApplication() {
    this.configService.getApplicationList().subscribe(
      (data) => {
        if (data) {
          this.applications = [];
          this.applications = data.sort((a, b) => (a.id > b.id) ? -1 : 1);
        }
      },
      (error) => {
        console.error(error);
        this.notifyService.showError(error.error.message, "Error al cargar los aplicativos")
      }
    );

    this.configService.getCountries()
          .subscribe((data) => {
            this.countries = data.map(x => {
              var obj = {};
              obj['label'] = x.abbreviation;
              obj['value'] = x.code;
              return obj;
            })
            console.log(this.countries);
          }, (error) => {
            console.error(error);
          });
  }

  showDialogToAdd() {
    this.newApplication = true;
    this.application = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newApplication = false;
    this.application = this.cloneProcedure(event.data);
    this.displayDialog = true;
  }

  cloneProcedure(c: IApplication): IApplication {
    let prop = { ...c };
    return prop;
  }

  onUpdate() {
    console.log('aplicacion a guardar  Antes');
      console.log('Antes', this.application)
    //const applications = [...this.applications];
    if (this.newApplication) {
      if(this.application.Connections === null || this.application.Connections === undefined){
        this.application.Connections = [];
      }

      if(this.application.Procedures === null || this.application.Procedures === undefined){
        this.application.Procedures = [];
      }

      if(this.application.ExtendedProperties === null || this.application.ExtendedProperties === undefined){
        this.application.ExtendedProperties = [];
      }
      const app = {...this.application}
      //Empty Properties
      console.log('aplicacion a guardar despues');
      console.log(app)
      this.configService.createApplication(app).subscribe(
        (res) => {
          console.log(res);
          this.notifyService.showSuccess("Aplicativo creado con éxito!", "Creación Satisfactoria")
          this.onLoadApplication();
        },
        (error) => {
          console.error(error);
          this.notifyService.showError(error.error.message, "Error al Actualizar")
        }
      );
    } else {
      this.configService
        .updateApplication(this.application.id, this.application)
        .subscribe(
          (res) => {
            console.log(res);
            //this.messageService.add({severity:'success', summary: 'Exito', detail:'Aplicativo creado con éxito!'});
            this.notifyService.showSuccess("Aplicativo actualizado con éxito!", "Actualización Satisfactoria")
            this.onLoadApplication();
          },
          (error) => {
            this.notifyService.showError(error.error.message, "Error al Actualizar")
          }
        );
    }
    //this.applications = applications;
    this.application = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.applications.indexOf(this.selectedApplication);
    this.applications = this.applications.filter((val, i) => i != index);
    this.application = null;
    this.displayDialog = false;

    console.log(this.applications);

    this.application = this.application;
    this.configService
      .updateApplication(this.application.id, this.application)
      .subscribe(
        (res) => {
          console.log(res);
          this.onLoadApplication();
        },
        (error) => {
          console.error(error);
          this.notifyService.showError(error.error.message, "Error al Eliminar")
        }
      );
  }

  onShowClone() {
    this.displayDialog = false;
    this.cloneApplication = {};
    this.displayCloneDialog = true;
  }

  onClone() {
    const currentApp = this.cloneApplication;
    const body: CloneAppDto = {
      sourceAppId: this.selectedApplication.ApplicationId,
      applicationCode: currentApp.ApplicationCode,
      applicationCountry: currentApp.Country[0],
      description: currentApp.Description,
      targetAppId: currentApp.ApplicationId,
    };
    this.configService
      .cloneApplication(this.selectedApplication.ApplicationId, body)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.notifyService.showError(error.error.message, "Error al Clonar")
        }
      );
  }

  onfindConnections(applicationid: string) {
    this.router.navigate(["aplicaciones/listadetalle"], {
      queryParams: { applicationId: applicationid },
    });
  }

  onfindProcedure(applicationid: string) {
    this.router.navigate(["aplicaciones/prodeduredetalle"], {
      queryParams: { applicationId: applicationid },
    });
  }

  onfindProperties(applicationid: string) {
    this.router.navigate(["aplicaciones/propertiesdetalle"], {
      queryParams: { applicationId: applicationid },
    });
  }

  showDialogToImport() {
    this.displayImportDialog = true;
  }

  onImport() {
    this.core.importConfiguration(this.id_old_core).subscribe((res) => {
      if (res) {
        if (res.data) {
          this.displayImportDialog = false;
          this.application = res.data[0];
          console.log('Aplicacion importada');
          console.log(this.application);
          this.displayDialog = true;
          this.newApplication = true;
        }
      }
    }, (error) => {
      console.error(error);
      this.notifyService.showError(error.error.message, "Error al Importar")
    });
  }
}
