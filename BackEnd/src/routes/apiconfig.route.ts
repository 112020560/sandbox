import { Router } from 'express';
import TenantController from '../controllers/tenant.controller';
import { Routes } from '@interfaces/routes.interface';

class ApiConfigRoute implements Routes {
  public path = '/api/v1/ApiConfiguration';
  public router = Router();
  private controller = new TenantController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getApiConfig);
  }
}

export default ApiConfigRoute;
