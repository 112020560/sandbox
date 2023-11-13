import { Router } from 'express';
import TenantController from '../controllers/application.controller';
import { Routes } from '@interfaces/routes.interface';

class ConfigurationRoute implements Routes {
  public path = '/api/:tenant/v1/configuracion';
  public router = Router();
  private controller = new TenantController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/get/:applicationid`, this.controller.getAppExtendedProperties);
  }
}

export default ConfigurationRoute;
