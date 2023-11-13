import { NextFunction, Request, Response } from 'express';
import EnvironmentService from '@services/environment.service';
import { EnvironmentDto } from '../dtos/environment.dto';

class EnvironmentController {
  private environmentService = new EnvironmentService();

  public createEnvironment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto: EnvironmentDto = req.body;
      await this.environmentService.createEnvironment(dto);
      res.status(201).json({ success: true, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateEnvironment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id.toString();
      const dto: EnvironmentDto = req.body;
      await this.environmentService.updateEnvironment(id, dto);
      res.status(201).json({ success: true, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEnvironment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id.toString();
      await this.environmentService.deleteEnvironment(id);
      res.status(200).json({ success: true, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  public getEnvironment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.environmentService.getEnvironments();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public updateEnvironmentInstance = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { target, value } = req.body;
      const id = req.params.id.toString();

      await this.environmentService.updateEnvironmentsInstance(id, target, value);
      res.status(200).json({ success: true, data: {}, message: 'Updated' });
    } catch (error) {
      next(error);
    }
  };

  public updateEnvironmentEndpoits = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { key, value } = req.body;
      const id = req.params.id.toString();

      await this.environmentService.updateEnvironmentsEndpoint(id, key, value);
      res.status(200).json({ success: true, data: {}, message: 'Updated' });
    } catch (error) {
      next(error);
    }
  };

  public insertEnvironmentEndpoits = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, key, value } = req.body;

      await this.environmentService.updateEnvironmentsEndpoint(id, key, value);
      res.status(200).json({ success: true, data: {}, message: 'Environment Endpoit Saved' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEnvironmentEndpoits = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { key } = req.body;
      const id = req.params.id.toString();
      await this.environmentService.deleteEnvironmentsEndpoint(id, key);
      res.status(200).json({ success: true, data: {}, message: 'Environment Endpoit Saved' });
    } catch (error) {
      next(error);
    }
  };
}

export default EnvironmentController;
