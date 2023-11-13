import AuthorizationService from '@/services/autorization.service';
import { NextFunction, Request, Response } from 'express';

class AuthorizationController {
  private service = new AuthorizationService();

  public findMenuAccess = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      console.log(id);
      const data = await this.service.findMenuAccessById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthorizationController;
