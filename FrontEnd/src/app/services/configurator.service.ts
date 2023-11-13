import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IApplication } from "../configuration/interfaces/application.interface";
import { Observable } from "rxjs";
import { ITenant } from "../configuration/interfaces/tenant.interface";
import { GenericResponse } from "../configuration/dtos/genericresponse.dto";
import { CloneAppDto } from "../configuration/dtos/cloneapp.dot";
import { IEnvironment } from "../configuration/interfaces/dbenvironment.interface";
import { Country } from "../configuration/interfaces/country.interface";
import { Generic } from "../configuration/interfaces/generic.interface";
import { SandBoxEnviroment } from "../configuration/interfaces/environmet.interface";
import { StorageService } from "./common/storage.service";

@Injectable({
  providedIn: "root",
})
export class ConfiguratorService {
  currentEnv: string;
  url: string;
  constructor(private http: HttpClient, private session: StorageService) {
    this.setUrl();
  }

  //  public setUrl() {
  //   this.currentEnv = this.session.getCurrentEnvironment();
  //   this.url = environment[`configurationUrl${this.currentEnv}`]
  //   console.log('base_url', this.url);
  //  }

  /**
   *Metodo encargado de crear o setear la urlbase segun el ambiente con el que se logeo
   *
   * @memberof ConfiguratorService
   */
  public setUrl() {
    this.currentEnv = this.session.getCurrentEnvironment();
    if (this.currentEnv === null || this.currentEnv === undefined) this.currentEnv = "Dev"
    console.log("Current Env: ", this.currentEnv);
    const urlObject = environment.configurationUrls.find(
      (x) => x.KEY.toUpperCase() === this.currentEnv.toUpperCase()
    );
    this.url = urlObject.VALUE;
    //environment[`configurationUrl${this.currentEnv}`]
    console.log("base_url", this.url);
  }

  /**
   *Metodo encargado de obtener la url segun el ambiente que se necesite
   *
   * @param {string} [env='']
   * @memberof ConfiguratorService
   */
  public getUrl(env: string = ""): string {
    const urlObject = environment.configurationUrls.find(
      (x) => x.KEY.toUpperCase() === env.toUpperCase()
    );
    console.log(urlObject);
    return urlObject.VALUE;
  }

  /**
   * Get all applications
   *
   * @return {*}  {Observable<IApplication[]>}
   * @memberof ConfiguratorService
   */
  getApplicationList(): Observable<IApplication[]> {
    return this.http.get<IApplication[]>(`${this.url}/api/v1/application`);
  }

  /**
   * Get application by applicationId
   *
   * @param {string} applicationId
   * @return {*}  {Observable<IApplication>}
   * @memberof ConfiguratorService
   */
  getApplicationbyid(applicationId: string): Observable<IApplication> {
    return this.http.get<IApplication>(
      `${this.url}/api/v1/application/${applicationId}`
    );
  }

  /**
   *update a application row
   *
   * @param {string} id
   * @param {IApplication} application
   * @return {*}  {Observable<GenericResponse<any>>}
   * @memberof ConfiguratorService
   */
  updateApplication(id: string, application: IApplication): Observable<GenericResponse<any>> {
    return this.http.put<GenericResponse<any>>(`${this.url}/api/v1/application/${id}`, application, environment.httjsonpostheader);
  }

  /**
   *create a new Application in sandbox
   *
   * @param {IApplication} application
   * @return {*}  {Observable<GenericResponse<any>>}
   * @memberof ConfiguratorService
   */
  createApplication(
    application: IApplication
  ): Observable<GenericResponse<any>> {
    return this.http.post<GenericResponse<any>>(
      `${this.url}/api/v1/application`,
      application,
      environment.httjsonpostheader
    );
  }

  /**
   * delete a application row
   *
   * @param {string} applicationId
   * @return {*}  {Observable<GenericResponse<any>>}
   * @memberof ConfiguratorService
   */
  deleteApplication(applicationId: string): Observable<GenericResponse<any>> {
    return this.http.delete<GenericResponse<any>>(
      `${this.url}/api/v1/application/${applicationId}`,
      environment.httjsonpostheader
    );
  }

  /**
   * Clone application based in another
   *
   * @param {string} applicationId
   * @param {CloneAppDto} cloneDto
   * @return {*}  {Observable<GenericResponse<any>>}
   * @memberof ConfiguratorService
   */
  cloneApplication(
    applicationId: string,
    cloneDto: CloneAppDto
  ): Observable<GenericResponse<any>> {
    return this.http.put<GenericResponse<any>>(
      `${this.url}/api/v1/application/${applicationId}`,
      cloneDto,
      environment.httjsonpostheader
    );
  }

  //====================================================================================================================
  /**
   * Get All Tenants
   *
   * @return {*}  {Observable<ITenant[]>}
   * @memberof ConfiguratorService
   */
  getTenantList(): Observable<ITenant[]> {
    return this.http.get<ITenant[]>(`${this.url}/api/v1/tenant`);
  }

  /**
   * Create a new Tenant
   *
   * @param {ITenant} tenant
   * @return {*}  {Observable<GenericResponse<any>>}
   * @memberof ConfiguratorService
   */
  createTenant(tenant: ITenant): Observable<GenericResponse<any>> {
    return this.http.post<GenericResponse<any>>(
      `${this.url}/api/v1/tenant`,
      tenant,
      environment.httjsonpostheader
    );
  }

  /**
   * Update a Tenant
   *
   * @param {string} id
   * @param {ITenant} tenant
   * @return {*}  {Observable<GenericResponse<any>>}
   * @memberof ConfiguratorService
   */
  updateTenant(id: string, tenant: ITenant): Observable<GenericResponse<any>> {
    return this.http.put<GenericResponse<any>>(
      `${this.url}/api/v1/tenant/${id}`,
      tenant,
      environment.httjsonpostheader
    );
  }

  /**
   * Delete a tenant by id
   *
   * @param {string} id
   * @return {*}  {Observable<GenericResponse<any>>}
   * @memberof ConfiguratorService
   */
  deleteTenant(id: string): Observable<GenericResponse<any>> {
    return this.http.delete<GenericResponse<any>>(
      `${this.url}/api/v1/tenant/${id}`
    );
  }
  //==================================[ENVIRONMENT]===================================================================

  /**
   * Return all enviroment configured
   *
   * @return {*}  {Observable<IEnvironment[]>}
   * @memberof ConfiguratorService
   */
  getAllEnvironments(): Observable<IEnvironment[]> {
    return this.http.get<IEnvironment[]>(`${this.url}/api/v1/environment`);
  }

  /**
   * Create a new Environment
   *
   * @param {SandBoxEnviroment} payload
   * @return {*}  {Observable<Generic>}
   * @memberof ConfiguratorService
   */
  createEnvironments(payload: SandBoxEnviroment): Observable<Generic> {
    return this.http.post<Generic>(
      `${this.url}/api/v1/environment`,
      payload,
      environment.httjsonpostheader
    );
  }

  /**
   * Update a Environment
   *
   * @param {string} id
   * @param {SandBoxEnviroment} payload
   * @return {*}  {Observable<Generic>}
   * @memberof ConfiguratorService
   */
  updateEnvironments(
    id: string,
    payload: SandBoxEnviroment
  ): Observable<Generic> {
    return this.http.put<Generic>(
      `${this.url}/api/v1/environment/${id}`,
      payload,
      environment.httjsonpostheader
    );
  }

  /**
   * Delete a environment
   *
   * @param {string} id
   * @return {*}  {Observable<Generic>}
   * @memberof ConfiguratorService
   */
  deleteEnvironments(id: string): Observable<Generic> {
    return this.http.delete<Generic>(`${this.url}/api/v1/environment/${id}`);
  }

  //===================================[COUNTRIES]====================================================================

  /**
   * Return all countries configured
   *
   * @return {*}  {Observable<Country[]>}
   * @memberof ConfiguratorService
   */
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/api/v1/country`);
  }

  /**
   * Create a new Country
   *
   * @param {Country} country
   * @return {*}  {Observable<Generic>}
   * @memberof ConfiguratorService
   */
  createCountry(country: Country): Observable<Generic> {
    return this.http.post<Generic>(
      `${this.url}/api/v1/country`,
      country,
      environment.httjsonpostheader
    );
  }

  /**
   * Update a Country
   *
   * @param {string} id
   * @param {Country} country
   * @return {*}  {Observable<Generic>}
   * @memberof ConfiguratorService
   */
  updateCountry(id: string, country: Country): Observable<Generic> {
    return this.http.put<Generic>(
      `${this.url}/api/v1/country/${id}`,
      country,
      environment.httjsonpostheader
    );
  }

  /**
   *
   * @param id
   * @returns {*}  {Observable<Generic>}
   */
  deleteCountry(id: string): Observable<Generic> {
    return this.http.delete<Generic>(`${this.url}/api/v1/country/${id}`);
  }

  /*========================================[MIGRACION ENTRE AMBIENTES]=====================================*/
  getMigrationInformation(env: string, tenantId: string) {
    const baseurl = this.getUrl(env);
    return this.http.get(`${baseurl}/api/v1/tenant/migration/${tenantId}`)
  }
}
