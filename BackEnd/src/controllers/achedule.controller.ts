import { NextFunction, Request, Response } from 'express';
import { ScheduleDto } from '../dtos/schedule.dto';
import SchedulerServices from '../services/schedule.service';

class ScheduleController {
  private services = new SchedulerServices();

  public createSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto: ScheduleDto = req.body;
      await this.services.createSchedule(dto);
      res.status(201).json({ success: true, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public findSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenant = req.params.tenant.toString();
      const servicesname = req.params.services.toString();
      const data = await this.services.findSchedule(tenant, servicesname);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public findScheduleByName = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const servicesname = req.params.services.toString();
      const data = await this.services.findScheduleByName(servicesname);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default ScheduleController;
