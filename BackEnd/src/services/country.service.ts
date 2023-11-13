import { CountryDto } from '@/dtos/country.dto';
import { getMongoRepository } from 'typeorm';
import { Country } from '../entity/country.entity';
import { ObjectID } from 'mongodb';

class CountryService {
  public async findAllCountry(source = 0): Promise<Country[]> {
    const repository = getMongoRepository(Country);

    if (source === 0) {
      return await repository.find({ where: { enable: true, code: { $ne: 6 } } });
    } else {
      return await repository.find();
    }
  }

  public async createCountry(countryDto: CountryDto) {
    const newCountry: Country = Object.create(countryDto);
    const repository = getMongoRepository(Country);
    await repository.save(newCountry);
  }

  public async updateCountry(id: string, countryDto: CountryDto) {
    const newCountry: Country = Object.create(countryDto);
    const repository = getMongoRepository(Country);
    await repository.update(new ObjectID(id), newCountry);
  }

  public async deleteCountry(id: string) {
    const repository = getMongoRepository(Country);
    await repository.delete(new ObjectID(id));
  }

  public async findCountryByAbbreviation(abbreviation: string): Promise<Country[]> {
    const repository = getMongoRepository(Country);
    return await repository.find({ where: { enable: true, abbreviation: abbreviation, code: { $ne: 6 } } });
  }

  public async findCountryByAbbreviationManager(abbreviation: string): Promise<any> {
    const repository = getMongoRepository(Country);
    let countries: Country[] = [];
    if (abbreviation.toUpperCase() === 'ALL') {
      countries = await repository.find({ where: { enable: true, code: { $ne: 6 } } });
    } else {
      countries = await repository.find({ where: { enable: true, abbreviation: abbreviation, code: { $ne: 6 } } });
    }

    const retvalues = [];
    if (countries.length > 0) {
      countries.forEach(county => {
        retvalues.push({
          SIN_PK_UTL_PAR_PAIS: county.code,
          STR_CODIGO: county.cod_area,
          STR_NOMBRE: county.name,
          TIN_ACTIVO: 1,
          TIN_VISIBLE: 1,
          STR_ABREVIACION: county.abbreviation,
          FUENTE_CORE: county.source_core,
          LDAP: county.ldap,
          DOMINIO_AD: county.domain,
          // Esto se debe de agregar a la coleccion
          CODIGO_PAIS_REGLA: county.rule_code,
        });
      });
    }
    return retvalues;
  }
}
export default CountryService;
