import { Router } from 'express';
import ApplicationController from '../controllers/application.controller';
import { Routes } from '@interfaces/routes.interface';

class ApplicationRoute implements Routes {
  public path = '/api/v1/application';
  public router = Router();
  private applicationController = new ApplicationController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    /**
     * @swagger
     * /application:
     *  post:
     *    description: Create Applications
     */
    this.router.get(`${this.path}`, this.applicationController.getallApplications);
    this.router.get(`${this.path}/:appid`, this.applicationController.getApplicationByIdName);
    this.router.get(`${this.path}/environment/:envid`, this.applicationController.getApplicationByEnvironment);
    this.router.get(`${this.path}/configurationendpoint/:appid`, this.applicationController.getConfigurationUrlByEnvApp);

    this.router.post(`${this.path}`, this.applicationController.createApplication);
    this.router.put(`${this.path}/:appid`, this.applicationController.updateApplication);
    this.router.put(`${this.path}/clone/:appid`, this.applicationController.cloneApplication);

    this.router.delete(`${this.path}/:appid`, this.applicationController.deleteApplicationByIdName);
  }
}
export default ApplicationRoute;
