import { Injectable } from '@angular/core';

export const CURRENT_ENV = 'Env'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setEnvironment(env: string)
  {
    sessionStorage.setItem(CURRENT_ENV, env);
  }

  public getCurrentEnvironment()
  {
    return sessionStorage.getItem(CURRENT_ENV);
  }

  public removeCurrentEnvironmet() {
    sessionStorage.removeItem(CURRENT_ENV);
  }
}
