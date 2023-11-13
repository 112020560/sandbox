import { NextFunction, Request, Response } from 'express';
import { TenetDto } from '@dtos/tenant.dto';
import TenantService from '@services/tenant.service';
import { ITenant } from '@/interfaces/tenant.interface';
import { logger } from '@utils/logger';

class TenantController {
  private _tenantService = new TenantService();

  public createTenant = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto: TenetDto = req.body;
      const responseData: ITenant = await this._tenantService.creatTenant(dto);
      res.status(201).json({ success: true, data: responseData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this._tenantService.getAll();
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };

  public updateTenantConfig = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toString();
      const { config } = req.body;
      await this._tenantService.updateConfig(id, config);
      res.status(201).json({ success: true, data: {}, message: 'Updated' });
    } catch (error) {
      next(error);
    }
  };

  public updateTenant = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toString();
      const dto: TenetDto = req.body;
      await this._tenantService.updateTenant(id, dto);
      res.status(201).json({ success: true, data: {}, message: 'Updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTenant = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toString();
      await this._tenantService.deleteTenant(id);
      res.status(201).json({ success: true, data: {}, message: 'Deleted' });
    } catch (error) {
      next(error);
    }
  };

  public getConfig = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenantid = req.params.tenantid.toString();
      const config = await this._tenantService.getConfiguration(tenantid);
      res.status(200).json({ configuration: config, environment: tenantid });
    } catch (error) {
      next(error);
    }
  };

  public getApiConfig = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const env = req.query.env.toString();
      const config = await this._tenantService.getConfiguration(env);
      res.status(200).json({ configuration: config, environment: env });
    } catch (error) {
      next(error);
    }
  };

  public getBackEndUrls = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const enviroment = req.params.enviroment.toString();
      const applicationId = req.params.applicationId.toString();
      const config = await this._tenantService.getBackEndUrls(enviroment, applicationId);
      res.status(200).json(config);
    } catch (error) {
      next(error);
    }
  };

  public getMigrationInformationAsync = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenantid = req.params.tenantid.toString();
      const config = await this._tenantService.getMigrationInformationAsync(tenantid);
      logger.info(config);
      res.status(200).json(config);
    } catch (error) {
      next(error);
    }
  };
}
export default TenantController;
