import { Router } from 'express';
import TenantController from '../controllers/configuration.controller';
import { Routes } from '@interfaces/routes.interface';

class ConfigurationV2Route implements Routes {
  public path = '/api/v2/configuracion';
  public router = Router();
  private controller = new TenantController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/:appkey/:tenantid`, this.controller.getConfiguration);
    this.router.get(`${this.path}/:appkey`, this.controller.getConfigurationByAppKey);
    this.router.post(`${this.path}`, this.controller.createConfiguration);
  }
}

export default ConfigurationV2Route;
