import { CountryDto } from '@/dtos/country.dto';
import { NextFunction, Request, Response } from 'express';
import CountryService from '../services/country.service';

class CountryController {
  private service = new CountryService();

  findCountry = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.service.findAllCountry();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  findCountrySource = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //const source = Number(req.params.source);
      const data = await this.service.findAllCountry(1);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  findCountryByAbbreviation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const abbr = req.params.id.toString().toUpperCase();
      const data = await this.service.findCountryByAbbreviation(abbr);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  findCountryByAbbreviationManager = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const abbr = req.params.id.toString().toUpperCase();
      const data = await this.service.findCountryByAbbreviationManager(abbr);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  createCountry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const payload: CountryDto = req.body;
      await this.service.createCountry(payload);
      res.status(201).json({ success: true, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  updateCountry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const payload: CountryDto = req.body;
      const id = req.params.id.toString();
      await this.service.updateCountry(id, payload);
      res.status(201).json({ success: true, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  deleteCountry = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id.toString();
      await this.service.deleteCountry(id);
      res.status(200).json({ success: true, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
export default CountryController;
