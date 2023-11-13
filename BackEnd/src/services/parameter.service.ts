import { Tenant } from '@/entity/tenant.entity';
import { getMongoRepository } from 'typeorm';
import { Application } from '../entity/application.entity';
import { DataBaseEnvironment } from '../entity/environment.entity';
import { HttpException } from '@/exceptions/HttpException';
import { ObjectID } from 'mongodb';
import { IParameters, SandboxParametersV2 } from '@/interfaces/parameter.interface';
import { logger } from '@/utils/logger';

class ParametersService {
  public async getParameters(tenantid: string): Promise<IParameters[]> {
    //Se valida que el tenant exista
    const tenantRepository = getMongoRepository(Tenant);
    //Busqueda por id o por environmentId
    let tenant: Tenant = null;
    if (ObjectID.isValid(tenantid)) {
      logger.info('Busqueda por Id');
      tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    } else {
      logger.info('Busqueda por EnvironmentId');
      tenant = await tenantRepository.findOne({ EnvironmentId: tenantid });
    }
    //const tenant: Tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    if (tenant) {
      //SI EL TENANT EXISTE, SE VALIDA QUE EL ENVIRONMENT EXISTA
      const envRepository = getMongoRepository(DataBaseEnvironment);
      const env = await envRepository.findOne({ where: { EnvironmetId: tenant.EnvironmentId } });
      //SI EL AMBIENTE EXISTE, VALIDAMOS QUE EL APLICATIVO EXISTA
      if (env) {
        const applicationRepository = getMongoRepository(Application);
        const application = await applicationRepository.findOne({ where: { ApplicationId: tenant.ApplicationId } });
        if (application) {
          //SI LA APLICACION EXISTE VAMOS A OBTENER LOS STRING DE CONEXION
          const parametersArray: IParameters[] = [];
          application.Procedures.forEach(param => {
            const paramString = param.Parameters.join('|');

            parametersArray.push({
              CountryCode: 0,
              AppCode: application.ApplicationCode,
              Procedure: param.Procedure,
              Parameters: paramString,
              Description: param.Procedure,
              SearchKey: param.ProcedureKey,
              AppKey: application.ApplicationId,
              EnableTrace: param.Trace,
            });
          });
          return parametersArray;
        } else {
          throw new HttpException(409, `La aplicacion configurada ${application.ApplicationId} no existe o ya no esta disponible`);
        }
      } else {
        throw new HttpException(409, `El Environment ${env.EnvironmetId} configurado en el tenant no existe o ya no esta disponible`);
      }
    } else {
      throw new HttpException(409, `El tenant ${tenantid} no existe o ya no esta disponible`);
    }
  }

  public async getSandBoxParameters(tenantid: string, applicationid: string): Promise<IParameters[]> {
    //Se valida que el tenant exista
    const tenantRepository = getMongoRepository(Tenant);
    //const tenant: Tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    //Busqueda por id o por environmentId
    let tenant: Tenant = null;
    if (ObjectID.isValid(tenantid)) {
      logger.info('Busqueda por Id');
      tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    } else {
      logger.info('Busqueda por EnvironmentId');
      tenant = await tenantRepository.findOne({ EnvironmentId: tenantid });
    }
    if (tenant) {
      //SI EL TENANT EXISTE, SE VALIDA QUE EL ENVIRONMENT EXISTA
      const envRepository = getMongoRepository(DataBaseEnvironment);
      const env = await envRepository.findOne({ where: { EnvironmetId: tenant.EnvironmentId } });
      //SI EL AMBIENTE EXISTE, VALIDAMOS QUE EL APLICATIVO EXISTA
      if (env) {
        if (tenant.ApplicationId.find(() => applicationid)) {
          const applicationRepository = getMongoRepository(Application);
          const application = await applicationRepository.findOne({ where: { ApplicationId: applicationid } });
          console.log(application);
          if (application) {
            //SI LA APLICACION EXISTE VAMOS A OBTENER LOS STRING DE CONEXION
            const parametersArray: IParameters[] = [];
            application.Procedures.forEach(param => {
              const paramString = param.Parameters.join('|');

              parametersArray.push({
                CountryCode: application.Country[0],
                AppCode: application.ApplicationCode,
                Procedure: param.Procedure,
                Parameters: paramString,
                Description: param.Procedure,
                SearchKey: param.ProcedureKey,
                AppKey: application.ApplicationId,
                EnableTrace: param.Trace,
              });
            });
            return parametersArray;
          } else {
            throw new HttpException(409, `Applicationid ${applicationid} no existe o ya no esta disponible`);
          }
        } else {
          throw new HttpException(409, `El Environment ${env.EnvironmetId} configurado en el tenant no existe o ya no esta disponible`);
        }
      } else {
        throw new HttpException(409, `El Environment ${env.EnvironmetId} configurado en el tenant no existe o ya no esta disponible`);
      }
    } else {
      throw new HttpException(409, `El tenant ${tenantid} no existe o ya no esta disponible`);
    }
  }

  public async getSandBoxParametersV2Async(tenantid: string, applicationid: string): Promise<SandboxParametersV2> {
    //Se valida que el tenant exista
    const tenantRepository = getMongoRepository(Tenant);
    let tenant: Tenant = null;
    if (ObjectID.isValid(tenantid)) {
      logger.info('Busqueda por Id');
      tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    } else {
      logger.info('Busqueda por EnvironmentId');
      tenant = await tenantRepository.findOne({ EnvironmentId: tenantid });
    }
    if (tenant) {
      //SI EL TENANT EXISTE, SE VALIDA QUE EL ENVIRONMENT EXISTA
      const envRepository = getMongoRepository(DataBaseEnvironment);
      const env = await envRepository.findOne({ where: { EnvironmetId: tenant.EnvironmentId } });
      //SI EL AMBIENTE EXISTE, VALIDAMOS QUE EL APLICATIVO EXISTA
      if (env) {
        if (tenant.ApplicationId.find(() => applicationid)) {
          const applicationRepository = getMongoRepository(Application);
          const application = await applicationRepository.findOne({ where: { ApplicationId: applicationid } });
          console.log(application);
          if (application) {
            //SI LA APLICACION EXISTE VAMOS A OBTENER LOS STRING DE CONEXION
            const parametersArray: IParameters[] = [];
            application.Procedures.forEach(param => {
              const paramString = param.Parameters.join('|');

              parametersArray.push({
                CountryCode: application.Country[0],
                AppCode: application.ApplicationCode,
                Procedure: param.Procedure,
                Parameters: paramString,
                Description: param.Procedure,
                SearchKey: param.ProcedureKey,
                AppKey: application.ApplicationId,
                EnableTrace: param.Trace,
              });
            });

            const respProcedures: SandboxParametersV2 = {
              Succeeded: true,
              ValidateParams: application.AllowProcedure,
              Procedures: parametersArray,
            };

            return respProcedures;
          } else {
            throw new HttpException(409, `Applicationid ${applicationid} no existe o ya no esta disponible`);
          }
        } else {
          throw new HttpException(409, `El Environment ${env.EnvironmetId} configurado en el tenant no existe o ya no esta disponible`);
        }
      } else {
        throw new HttpException(409, `El Environment ${env.EnvironmetId} configurado en el tenant no existe o ya no esta disponible`);
      }
    } else {
      throw new HttpException(409, `El tenant ${tenantid} no existe o ya no esta disponible`);
    }
  }
}

export default ParametersService;
