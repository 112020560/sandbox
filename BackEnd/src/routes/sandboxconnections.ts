import { Router } from 'express';
import ConnectionStirngController from '../controllers/connections.Controller';
import { Routes } from '@interfaces/routes.interface';

class SandBoxConnectionStringRoute implements Routes {
  public path = 'SandboxConnections';
  public router = Router();
  private connectionStirngController = new ConnectionStirngController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/api/v1/${this.path}/all/:tenant`, this.connectionStirngController.getConnectionSting);
    this.router.get(`/api/v1/${this.path}/all/:tenant/:key`, this.connectionStirngController.getSandboxConnectionSting);
  }
}

export default SandBoxConnectionStringRoute;
