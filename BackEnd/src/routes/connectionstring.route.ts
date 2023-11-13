import { Router } from 'express';
import ConnectionStirngController from '../controllers/connections.Controller';
import { Routes } from '@interfaces/routes.interface';

class ConnectionStringRoute implements Routes {
  public path = 'connections';
  public router = Router();
  private connectionStirngController = new ConnectionStirngController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/api/v1/:tenant/${this.path}`, this.connectionStirngController.getConnectionSting);
    this.router.get(`/api/v2/:tenant/${this.path}`, this.connectionStirngController.getConnectionStingSplit);
  }
}

export default ConnectionStringRoute;
