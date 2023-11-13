import { Router } from 'express';
import ApplicationController from '../controllers/application.controller';
import { Routes } from '@interfaces/routes.interface';

class SandboxApplicationRoute implements Routes {
  public path = '/api/v1/SandboxApplication';
  public router = Router();
  private applicationController = new ApplicationController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/:tenant/getappkey/:app/:country`, this.applicationController.getApplicationKey);
  }
}
export default SandboxApplicationRoute;
