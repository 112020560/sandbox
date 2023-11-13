import { ConfigurationSetting } from '@/entity/configuration.entity';
import ConfigurationServices from '@/services/configuration.service';
import { NextFunction, Request, Response } from 'express';
import { ConfigurationDto } from '../dtos/configuration.dto';

class ConfigurationController {
  private configurationService = new ConfigurationServices();

  public createConfiguration = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const appDto: ConfigurationDto = req.body;
      await this.configurationService.createConfiguration(appDto);
      res.status(201).json({ success: true, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getConfiguration = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const appkey: string = req.params.appkey;
      const tenantid: string = req.params.tenantid;
      const data: ConfigurationSetting = await this.configurationService.getConfiguration(appkey, tenantid);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getConfigurationByAppKey = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const appkey: string = req.params.appkey;
      const data: ConfigurationSetting = await this.configurationService.getConfigurationByAppkey(appkey);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default ConfigurationController;
