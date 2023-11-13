import { Router } from 'express';
import EnvironmentController from '../controllers/environment.controller';
import { Routes } from '@interfaces/routes.interface';

class EnvironmentRoute implements Routes {
  public path = '/api/v1/environment';
  public router = Router();
  private environmentController = new EnvironmentController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.environmentController.getEnvironment);
    this.router.post(`${this.path}`, this.environmentController.createEnvironment);

    this.router.put(`${this.path}/:id`, this.environmentController.updateEnvironment);
    this.router.put(`${this.path}/intance/:id`, this.environmentController.updateEnvironmentInstance);

    this.router.post(`${this.path}/endpoint`, this.environmentController.insertEnvironmentEndpoits);
    this.router.put(`${this.path}/endpoint/:id`, this.environmentController.updateEnvironmentEndpoits);

    this.router.delete(`${this.path}/:id`, this.environmentController.deleteEnvironment);
    this.router.delete(`${this.path}/endpoint/:id/:key`, this.environmentController.deleteEnvironmentEndpoits);
  }
}
export default EnvironmentRoute;
