import { Component, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  ExtentedProperty,
  IApplication,
  Procedure,
} from "../../../configuration/interfaces/application.interface";
import { ConfiguratorService } from "../../../services/configurator.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-listproperty",
  templateUrl: "./listproperty.component.html",
  styleUrls: ["./listproperty.component.scss"],
})
export class ListpropertyComponent implements OnInit {
  public applicationId: string = "";
  public application: IApplication;
  public properties: ExtentedProperty[] = [];
  public selectedproperty: ExtentedProperty;
  public property: ExtentedProperty;
  public newProperty: boolean;
  public cols: any[];
  public displayDialog: boolean;

  constructor(
    private configService: ConfiguratorService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private service: ConfiguratorService
  ) {}

  ngOnInit(): void {
    this.cols = [
      { field: "Key00", header: "Llave00" },
      { field: "Key01", header: "Llave01" },
      { field: "Key02", header: "Llave02" },
      { field: "Value00", header: "Valor00" },
      { field: "Value01", header: "Valor01" },
      { field: "Value02", header: "Value03" },
      { field: "NumericValue", header: "ValorNumerico" },
      { field: "Description", header: "Description" },
    ];

    this.route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }
      this.applicationId = params.applicationId;
      console.log(this.applicationId); // price
      this.onLoadApplicationInfo();
    });
  }

  onLoadApplicationInfo() {
    this.properties = [];
    this.configService
      .getApplicationbyid(this.applicationId)
      .subscribe((app) => {
        if (app) {
          this.application = app;
          console.log(this.application);
          if (this.application.ExtendedProperties) {
            this.properties = this.application.ExtendedProperties;
            console.log(this.properties);
          }
        }
      });
  }

  showDialogToAdd() {
    this.newProperty = true;
    this.property = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newProperty = false;
    this.property = this.cloneProcedure(event.data);
    this.displayDialog = true;
  }

  cloneProcedure(c: ExtentedProperty): ExtentedProperty {
    let prop = { ...c };
    return prop;
  }

  onUpdate() {
    const properties = [...this.application.ExtendedProperties];
    if (this.newProperty) {
      properties.push(this.property);
    } else {
      console.log( this.property);
      properties[this.properties.indexOf(this.selectedproperty)] = this.property;
    }

    console.log(properties);

    this.application.ExtendedProperties = properties;
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

    this.application.ExtendedProperties = properties;
    this.property = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.properties.indexOf(this.selectedproperty);
    this.properties = this.properties.filter((val, i) => i != index);
    this.property = null;
    this.displayDialog = false;

    console.log(this.properties);

    this.application.ExtendedProperties = this.properties;
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
}
