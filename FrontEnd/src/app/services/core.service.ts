import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericResponse } from '../configuration/dtos/genericresponse.dto';
import { IApplication } from '../configuration/interfaces/application.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  /**
   * Import configuration from old Core manager
   *
   * @param {number} coreid
   * @return {*}  {Observable<GenericResponse<IApplication>>}
   * @memberof CoreService
   */
  importConfiguration(coreid: number): Observable<GenericResponse<IApplication>> {
    return this.http.get<GenericResponse<IApplication>>(`${environment.coreimporterUrl}/api/v1/application/${coreid}`);
  }
}
