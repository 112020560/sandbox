import { Component, OnInit } from "@angular/core";
import { Country } from "../../configuration/interfaces/country.interface";
import { ConfiguratorService } from "../../services/configurator.service";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
})
export class CountryComponent implements OnInit {
  public displayDialog: boolean = false;
  public newCountry: boolean = false;
  public paises: Country[] = [];
  public pais: Country;
  public cols: any[];
  public paisSeleccionado: Country;

  constructor(private configService: ConfiguratorService) {
    this.cols = [
      { field: "code", header: "Código" },
      { field: "cod_area", header: "Cod.Area" },
      { field: "name", header: "Nombre" },
      { field: "abbreviation", header: "Abreviación" },
      { field: "domain", header: "Dominio" },
      { field: "source_core", header: "Fuente" },
      { field: "ldap", header: "Ldap" },
      { field: "enable", header: "Estado" },
    ];

    this.onLoadCountries();
  }

  ngOnInit(): void {}

  onLoadCountries() {
    this.configService.getCountries().subscribe(
      (data: Country[]) => {
        this.paises = data;
        console.log(this.paises);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  showDialogToAdd() {
    this.newCountry = true;
    this.pais = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newCountry = false;
    this.pais = this.cloneProcedure(event.data);
    this.displayDialog = true;
  }

  cloneProcedure(c: Country): Country {
    let prop = { ...c };
    return prop;
  }

  onUpdate() {
    console.log('aplicacion a guardar  Antes');
      console.log('Antes', this.pais)
    if (this.newCountry) {

      const app = {...this.pais}
      //Empty Properties
      console.log('aplicacion a guardar despues');
      console.log(app)
      this.configService.createCountry(app).subscribe(
        (res) => {
          console.log(res);
          this.onLoadCountries();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.configService
        .updateCountry(this.pais.id, this.pais)
        .subscribe(
          (res) => {
            console.log(res);
            this.onLoadCountries();
          },
          (error) => {
            console.error(error);
          }
        );
    }
    this.pais = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.paises.indexOf(this.paisSeleccionado);
    this.paises = this.paises.filter((val, i) => i != index);
    this.pais = null;
    this.displayDialog = false;

    console.log(this.paises);

    //this.application = this.application;
    this.configService
      .deleteCountry(this.pais.id)
      .subscribe(
        (res) => {
          console.log(res);
          this.onLoadCountries();
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
