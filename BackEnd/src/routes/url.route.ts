import { Router } from 'express';
import TenantController from '../controllers/application.controller';
import { Routes } from '@interfaces/routes.interface';

class UrlRoute implements Routes {
  public path = '/api/:tenant/v1/Url';
  public pathV2 = '/api/:tenant/v2/Url';
  public router = Router();
  private controller = new TenantController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    //Version 1
    this.router.get(`${this.path}/get/:key/:country/:app`, this.controller.getAppExtendedPropertiesUrl);
    this.router.get(`${this.path}/get/:applicationId/APP`, this.controller.getAppExtendedPropertiesUrlByApplicationId);
    // Version 2
    this.router.get(`${this.pathV2}/:applicationId/APP`, this.controller.getAppExtendedPropertiesUrlByApplicationId);
  }
}

export default UrlRoute;
