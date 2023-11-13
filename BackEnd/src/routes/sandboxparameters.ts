import { Router } from 'express';
import ParametersController from '../controllers/parameters.controller';
import { Routes } from '@interfaces/routes.interface';

class SandBoxParametersRoute implements Routes {
  public path = '/api/v1/SandboxParameters';
  public path2 = '/api/v2/SandboxParameters';
  public router = Router();
  private controller = new ParametersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //Version 1
    this.router.get(`${this.path}/:tenant/get/:key`, this.controller.getSandBoxParameters);

    //Version 2
    this.router.get(`${this.path2}/:tenant/get/:key`, this.controller.getSandBoxParametersV2);
  }
}
export default SandBoxParametersRoute;
