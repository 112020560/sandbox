import { Router } from 'express';
import ScheduleController from '../controllers/achedule.controller';
import { Routes } from '@interfaces/routes.interface';

class ScheduleRoute implements Routes {
  public path = '/api/v1/Services';
  public router = Router();
  private controller = new ScheduleController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/:tenant/configuracion/:services`, this.controller.findSchedule);
    this.router.get(`/api/v1/schedule/:services`, this.controller.findScheduleByName);
    this.router.get(`/api/v1/schedule/:tenant/:services`, this.controller.findScheduleByName);
    this.router.post(`${this.path}`, this.controller.createSchedule);
  }
}

export default ScheduleRoute;
