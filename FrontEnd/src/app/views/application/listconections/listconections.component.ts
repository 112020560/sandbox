import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  ConnectionString,
  IApplication,
  Procedure,
} from "../../../configuration/interfaces/application.interface";
import { ConfiguratorService } from "../../../services/configurator.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { FormGroup, FormControl } from "@angular/forms";
import {SelectItem} from 'primeng/api';

interface Select {
  name: string;
  code: string;
}

@Component({
  selector: "app-listconections",
  templateUrl: "./listconections.component.html",
  styleUrls: ["./listconections.component.scss"],
})
export class ListconectionsComponent implements OnInit {
  connectionFomrm = new FormGroup({
    tipo: new FormControl(""),
    llave00: new FormControl(""),
    llave01: new FormControl(""),
    llave02: new FormControl(""),
    llave03: new FormControl(""),
    usuario: new FormControl(""),
    password: new FormControl(""),
    base_datos: new FormControl(""),
  });

  public applicationId: string = "";
  public application: IApplication;
  public connections: ConnectionString[] = [];
  public selectedConnection: ConnectionString;
  public connection: ConnectionString;
  public newConnection: boolean;
  public cols: any[];
  public displayDialog: boolean;
  public dataTypes: SelectItem[];
  public sslmodeTypes: SelectItem[];

  constructor(
    private configService: ConfiguratorService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private service: ConfiguratorService
  ) {
    this.dataTypes = [
      {label: 'Selecione un origen de datos', value: ''},
      {label: 'SQL Server', value: 'MSSQL'},
      {label: 'MySQL', value: 'MYSQL'},
      {label: 'ORACLE', value: 'ORACLE'}
  ];

  this.sslmodeTypes = [
    {label: 'No Aplica', value: null},
    {label: 'None ', value: 'None'},
    {label: 'Preferred', value: 'Preferred'},
    {label: 'Required', value: 'Required'},
    {label: 'VerifyCA', value: 'VerifyCA'},
    {label: 'VerifyFull', value: 'VerifyFull'}
];
  }

  ngOnInit(): void {
    this.cols = [
      { field: "Type", header: "Tipo" },
      { field: "ConnectionKey00", header: "Llave00" },
      { field: "ConnectionKey01", header: "Llave01" },
      { field: "ConnectionKey02", header: "Llave02" },
      { field: "UserName", header: "Usuario" },
      { field: "Password", header: "Password" },
      { field: "Port", header: "Puerto" },
      { field: "DataBase", header: "Base Datos" },
      { field: "SSLMode", header: "SSLMode" },
    ];

    this.route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }
      this.applicationId = params.applicationId;
      console.log(this.applicationId); // price
      this.onLoadApplicationInfo();
    });
  }

  onLoadApplicationInfo() {
    this.configService
      .getApplicationbyid(this.applicationId)
      .subscribe((app) => {
        if (app) {
          this.application = app;
          if (this.application.Connections) {
            this.connections = this.application.Connections;
          }
        }
      });
  }

  showDialogToAdd() {
    this.newConnection = true;
    this.connection = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newConnection = false;
    this.connection = this.cloneProcedure(event.data);
    this.displayDialog = true;
  }

  cloneProcedure(c: ConnectionString): ConnectionString {
    let proc = { ...c };
    return proc;
  }

  onUpdate() {
    const connectios = [...this.application.Connections];
    if (this.newConnection) {
      connectios.push(this.connection);
    } else {
      console.log( this.connection);
      connectios[this.connections.indexOf(this.selectedConnection)] = this.connection;
    }

    console.log(connectios);

    this.application.Connections = connectios;
    console.log(this.application);
    //return;
    this.service
      .updateApplication(this.application.id, this.application)
      .subscribe(
        (res) => {
          console.log(res);
          this.onLoadApplicationInfo();
        },
        (error) => {
          console.error(error);
        }
      );

    this.application.Connections = connectios;
    this.connection = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.connections.indexOf(this.selectedConnection);
    this.connections = this.connections.filter((val, i) => i != index);
    this.connection = null;
    this.displayDialog = false;

    console.log(this.connections);

    this.application.Connections = this.connections;
    this.service
      .updateApplication(this.application.id, this.application)
      .subscribe(
        (res) => {
          console.log(res);
          this.onLoadApplicationInfo();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  onchenge(data)
  {
    this.connection.ConnectionKey01 = this.connection.ConnectionKey00 + "_1";
    this.connection.ConnectionKey02 = this.connection.ConnectionKey00 + "_2";
    console.log("por aqui me ando", data);
  }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);

  //   // this.modalRef.onHide.subscribe((a) => {
  //   //   console.log(a);
  //   // })
  // }

  // onSaveConnection() {
  //   console.log(this.connectionFomrm.value);
  //   this.modalRef.hide();
  //   const connections = [...this.application.Connections];

  //   if (this.isUpdate) {
  //     console.log(this.application.Connections);
  //     const index = connections.indexOf(
  //       connections.find(
  //         (x) => x.ConnectionKey00 === this.connectionFomrm.value.llave01
  //       )
  //     );
  //     console.log(index);
  //     connections.splice(index, 1);
  //     this.isUpdate = false;
  //   }

  //   connections.push({
  //     Type: this.connectionFomrm.value.tipo,
  //     ConnectionKey00: this.connectionFomrm.value.llave00,
  //     ConnectionKey01: this.connectionFomrm.value.llave01,
  //     ConnectionKey02: this.connectionFomrm.value.llave02,
  //     UserName: this.connectionFomrm.value.usuario,
  //     Password: this.connectionFomrm.value.password,
  //     DataBase: this.connectionFomrm.value.base_datos,
  //   });

  //   this.application.Connections = connections;

  //   console.log(connections);
  //   this.service
  //     .updateApplication(this.application.id, this.application)
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //         this.onLoadApplicationInfo();
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }

  // onUpdate(template: TemplateRef<any>, llave: string) {

  //   console.log('llave', llave);
  //   this.isUpdate = true;
  //   this.modalRef = this.modalService.show(template);
  //   const connection = this.application.Connections.find(
  //     (c) => c.ConnectionKey00 === llave
  //   );
  //   this.connectionFomrm.patchValue({
  //     tipo: connection.Type,
  //     llave00: connection.ConnectionKey00,
  //     llave01: connection.ConnectionKey01,
  //     llave02: connection.ConnectionKey02,
  //     usuario: connection.UserName,
  //     password: connection.Password,
  //     base_datos: connection.DataBase,
  //   });
  // }

  // onDelete(template: TemplateRef<any>, key00: string) {
  //   this.modalRef = this.modalService.show(template);
  //   this.keySelected == key00;
  //   console.log('key00', this.keySelected);
  // }

  // onDeleteAction() {
  //   this.modalRef.hide();
  //   // this.modalRef.onHide.subscribe((a) => {
  //   //   console.log(a);
  //   // })

  //   const connections = [...this.application.Connections];
  //   console.log(this.application.Connections);
  //   const index = connections.indexOf(
  //     connections.find((x) => x.ConnectionKey00 === this.keySelected)
  //   );
  //   console.log(index);
  //   connections.splice(index, 1);
  //   this.application.Connections = connections;

  //   this.service
  //     .updateApplication(this.application.id, this.application)
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //         this.onLoadApplicationInfo();
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }
}
