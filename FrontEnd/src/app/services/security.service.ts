import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './common/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient, private session: StorageService, private router: Router) { }

  public logout() {
    this.session.removeCurrentEnvironmet();
    this.router.navigate(['login'])
  }
}
