import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import AuthorizationController from '@/controllers/autorization.controller';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();
  public authorizeController = new AuthorizationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.post(`${this.path}login`, validationMiddleware(CreateUserDto, 'body'), this.authController.logIn);
    this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);

    this.router.get(`${this.path}api/v1/security/menu/:id`, this.authorizeController.findMenuAccess);
  }
}

export default AuthRoute;
