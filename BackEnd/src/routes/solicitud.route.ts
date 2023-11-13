import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';
import RequestController from '../controllers/solicitud.controller';

class RequestRoute implements Routes {
  public path = '/api/v1/request';
  public router = Router();
  private requestController = new RequestController();

  private initializeRoutes() {
    this.router.get(`${this.path}/pending`, this.requestController.getPendingRequest);
    this.router.get(`${this.path}/:id`, this.requestController.getPendingRequest);

    this.router.post(`${this.path}`, this.requestController.createRequestAsync);
    this.router.put(`${this.path}/:id`, this.requestController.createRequestAsync);
  }
}

export default RequestRoute;
