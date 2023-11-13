import { CloneAppDto } from '@/dtos/cloneapp.dto';
import { logger } from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';
import { ApplicationDto } from '../dtos/application.dto';
import ApplicationServices from '../services/application.service';

class ApplicationController {
  private applicationService = new ApplicationServices();

  public createApplication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const appDto: ApplicationDto = req.body;
      logger.info(`payload: ${JSON.stringify(appDto)}`);
      await this.applicationService.creatApplication(appDto);
      res.status(201).json({ success: true, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getApplicationKey = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenant = req.params.tenant.toString();
      const appcode = Number(req.params.app);
      const countrycode = Number(req.params.country);
      const appkey: string = await this.applicationService.getApplicationKey(tenant, appcode, countrycode);
      res.status(200).json({ ApplicationKey: appkey });
    } catch (error) {
      next(error);
    }
  };

  public getAppExtendedProperties = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenant = req.params.tenant.toString();
      const applicationid = req.params.applicationid.toString();
      const data = await this.applicationService.getExtendedProperty(tenant, applicationid.toLocaleLowerCase());
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getAppExtendedPropertiesUrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenant = req.params.tenant.toString();
      const key = req.params.key.toString();
      const appcode = Number(req.params.app);
      const countrycode = Number(req.params.country);
      const data = await this.applicationService.getExtendedPropertyUrl(tenant, key, appcode, countrycode);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getAppExtendedPropertiesUrlByApplicationId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tenant = req.params.tenant.toString();
      const applicationId = req.params.applicationId.toString();
      const data = await this.applicationService.getExtendedPropertyUrlByApplicationId(tenant, applicationId);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getApplicationByIdName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationId = req.params.appid.toString();
      const data = await this.applicationService.getApplicationByName(applicationId);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getApplicationByEnvironment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const environmentId = req.params.envid.toString();
      const data = await this.applicationService.getApplicationByEnvironment(environmentId);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Clone application based in another
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof ApplicationController
   */
  public cloneApplication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const appid = req.params.appid.toString();
      const appDto: CloneAppDto = req.body;
      appDto.sourceAppId = appid;

      await this.applicationService.cloneApp(appDto);
      res.status(201).json({ success: true, message: `application ${appid} cloned to ${appDto.targetAppId}` });
    } catch (error) {
      next(error);
    }
  };

  public updateApplication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const appDto: ApplicationDto = req.body;
      const appid: string = req.params.appid.toString();
      await this.applicationService.updateApplication(appid, appDto);
      res.status(201).json({ success: true, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public getConfigurationUrlByEnvApp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationId = req.params.appid.toString();
      const data = await this.applicationService.getConfigurationUrlByEnvApp(applicationId);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public getallApplications = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.applicationService.getAllAplication();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Delete application by id
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @memberof ApplicationController
   */
  public deleteApplicationByIdName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const applicationId = req.params.appid.toString();
      await this.applicationService.deleteApplication(applicationId);
      res.status(201).json({ success: true, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ApplicationController;
