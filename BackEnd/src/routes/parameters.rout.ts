import { Router } from 'express';
import ParametersController from '../controllers/parameters.controller';
import { Routes } from '@interfaces/routes.interface';

class ParametersRoute implements Routes {
  public path = '/api/v1/:tenant/parameters';
  public router = Router();
  private controller = new ParametersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getParameters);
  }
}
export default ParametersRoute;
