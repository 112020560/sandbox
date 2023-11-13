import { Router } from 'express';
import TenantController from '../controllers/tenant.controller';
import { Routes } from '@interfaces/routes.interface';

class TenantRoute implements Routes {
  public path = '/api/v1/tenant';
  public router = Router();
  private controller = new TenantController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getAll);
    this.router.get(`${this.path}/appsetting/:tenantid`, this.controller.getConfig);
    this.router.get(`${this.path}/backendsetting/:enviroment/:applicationId`, this.controller.getBackEndUrls);
    this.router.get(`${this.path}/migration/:tenantid`, this.controller.getMigrationInformationAsync);

    this.router.post(`${this.path}`, this.controller.createTenant);
    this.router.put(`${this.path}/:id`, this.controller.updateTenant);
    this.router.put(`${this.path}/appconfig/:id`, this.controller.updateTenantConfig);

    this.router.delete(`${this.path}/:id`, this.controller.deleteTenant);
  }
}

export default TenantRoute;
