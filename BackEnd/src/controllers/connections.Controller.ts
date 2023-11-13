import { IConnection } from '@/interfaces/connection.interface';
import { NextFunction, Request, Response } from 'express';
import ConnectionStringService from '../services/connectionstring.service';

class ConnectionStirngController {
  private connectionStringService = new ConnectionStringService();

  public getConnectionSting = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenant = req.params.tenant.toString();
      const connstrings: IConnection[] = await this.connectionStringService.getConnectionString(tenant);
      res.status(200).json(connstrings);
    } catch (error) {
      next(error);
    }
  };

  public getSandboxConnectionSting = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(JSON.stringify(req.headers));

      const tenant = req.params.tenant.toString();
      const key = req.params.key.toString();
      const connstrings: IConnection[] = await this.connectionStringService.getSandBoxConnectionString(tenant, key);
      res.status(200).json(connstrings);
    } catch (error) {
      next(error);
    }
  };

  public getConnectionStingSplit = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tenant = req.params.tenant.toString();
      const connstrings: IConnection[] = await this.connectionStringService.getConnectionStringSplit(tenant);
      res.status(200).json(connstrings);
    } catch (error) {
      next(error);
    }
  };
}
export default ConnectionStirngController;
