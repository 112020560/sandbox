import { IParameters, SandboxParametersV2 } from '@/interfaces/parameter.interface';
import { NextFunction, Request, Response } from 'express';
import ParametersService from '../services/parameter.service';

class ParametersController {
  private services = new ParametersService();

  public getParameters = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenant = req.params.tenant.toString();
      const connstrings: IParameters[] = await this.services.getParameters(tenant);
      res.status(200).json(connstrings);
    } catch (error) {
      next(error);
    }
  };

  public getSandBoxParameters = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenant = req.params.tenant.toString();
      const key = req.params.key.toString();
      const connstrings: IParameters[] = await this.services.getSandBoxParameters(tenant, key);
      res.status(200).json(connstrings);
    } catch (error) {
      next(error);
    }
  };

  public getSandBoxParametersV2 = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenant = req.params.tenant.toString();
      const key = req.params.key.toString();
      const sandboxparams: SandboxParametersV2 = await this.services.getSandBoxParametersV2Async(tenant, key);
      res.status(200).json(sandboxparams);
    } catch (error) {
      next(error);
    }
  };
}

export default ParametersController;
