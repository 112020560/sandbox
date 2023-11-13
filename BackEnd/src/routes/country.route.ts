import { Router } from 'express';
import CountryController from '../controllers/country.controller';
import { Routes } from '@interfaces/routes.interface';

class CountryRouter implements Routes {
  public path = '/api/v1/country';
  public router = Router();
  private controller = new CountryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.findCountrySource);
    this.router.get(`${this.path}/:id`, this.controller.findCountryByAbbreviation);
    // ESTE ES TEMPORAL, SE DEBE DE BORRAS
    this.router.get('/api/:tenant/v1/Pais/get/:id', this.controller.findCountryByAbbreviationManager);
    this.router.post(`${this.path}`, this.controller.createCountry);
    this.router.put(`${this.path}/:id`, this.controller.updateCountry);
    this.router.delete(`${this.path}/:id`, this.controller.deleteCountry);
  }
}
export default CountryRouter;
