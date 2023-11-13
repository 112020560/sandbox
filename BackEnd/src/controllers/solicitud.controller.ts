import { RequestDto } from '@/dtos/solicitud.dto';
import { logger } from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';
import RequestService from '../services/request.service';
import { Solicitud } from '../entity/solicitud.entity';

class RequestController {
  private requestService: RequestService;

  public createRequestAsync = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const appDto: RequestDto = req.body;
      logger.info(`payload: ${JSON.stringify(appDto)}`);
      await this.requestService.createRequestAsync(appDto);
      res.status(201).json({ success: true, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getPendingRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const requetsList: Solicitud[] = await this.requestService.getPendingRequest();
      res.status(200).json(requetsList);
    } catch (error) {
      next(error);
    }
  };

  public getRequestById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id.toString();
      const singleRequet: Solicitud = await this.requestService.getRequestById(id);
      res.status(200).json(singleRequet);
    } catch (error) {
      next(error);
    }
  };

  public updateRequestAsync = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id.toString();
      const appDto: RequestDto = req.body;
      logger.info(`payload: ${JSON.stringify(appDto)}`);
      await this.requestService.updateRequestAsync(id, appDto);
      res.status(201).json({ success: true, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
}

export default RequestController;
