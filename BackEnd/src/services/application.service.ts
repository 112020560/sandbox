import { getMongoManager, getMongoRepository, getConnection, getRepository } from 'typeorm';
import { ApplicationDto } from '../dtos/application.dto';
import { Application } from '../entity/application.entity';
import { ConnectionString } from '../entity/conection';
import { Procedure } from '../entity/procedure';
import { ExtentedProperty } from '../entity/extented';
import { AES, enc } from 'crypto-js';
import { ObjectID } from 'mongodb';
import { Tenant } from '../entity/tenant.entity';
import { HttpException } from '../exceptions/HttpException';
import { DataBaseEnvironment } from '../entity/environment.entity';
import { CloneAppDto } from '@/dtos/cloneapp.dto';
import { EnvUrls } from '../entity/endpoints';
import ip from 'ip';
import { logger } from '@utils/logger';

class ApplicationServices {
  public async creatApplication(applicationDto: ApplicationDto): Promise<void> {
    const newApplication = new Application();
    newApplication.ApplicationCode = applicationDto.ApplicationCode;
    newApplication.ApplicationId = applicationDto.ApplicationId;
    newApplication.ApplicationName = applicationDto.ApplicationName;
    newApplication.Description = applicationDto.Description;
    newApplication.DbUserName = applicationDto.DbUserName;
    newApplication.DbPassword = applicationDto.DbPassword;
    newApplication.IsEnable = applicationDto.IsEnable;
    newApplication.IsEditable = applicationDto.IsEditable;
    newApplication.ReqAprove = applicationDto.ReqAprove;
    const connectionArray = [];
    applicationDto.Connections.forEach(connection => {
      const encrypt_password = connection.Password != null ? AES.encrypt(connection.Password, process.env.SECRETE_KEY).toString() : null;
      console.log('encrypt_password', encrypt_password);
      connectionArray.push(
        new ConnectionString(
          connection.Type,
          connection.ConnectionString,
          connection.ConnectionKey00,
          connection.ConnectionKey01,
          connection.ConnectionKey02,
          connection.HostName,
          connection.UserName,
          encrypt_password,
          connection.DataBase,
          connection.Port,
          connection.SSLMode,
        ),
      );
    });
    newApplication.Connections = connectionArray;
    const procedureArrya = [];
    applicationDto.Procedures.forEach(procedure => {
      procedureArrya.push(new Procedure(procedure.Procedure, procedure.ProcedureKey, procedure.Parameters, procedure.Active, procedure.Trace));
    });
    newApplication.Procedures = procedureArrya;
    const extentedArray = [];
    applicationDto.ExtendedProperties.forEach(prop => {
      extentedArray.push(
        new ExtentedProperty(prop.Key00, prop.Key01, prop.Key02, prop.Value00, prop.Value01, prop.Value02, prop.NumericValue, prop.Description),
      );
    });
    newApplication.ExtendedProperties = extentedArray;
    newApplication.Country = applicationDto.Country;
    newApplication.AllowProcedure = applicationDto.AllowProcedure;

    const manager = getMongoManager();
    await manager.save(newApplication);
  }

  public async getApplicationKey(tenantid: string, appcode: number, countrycode: number): Promise<string> {
    const tenantRepository = getMongoRepository(Tenant);
    const applicationRepository = getMongoRepository(Application);
    const tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    if (tenant) {
      const application = await applicationRepository.findOne({ where: { ApplicationCode: appcode } });
      if (application) {
        if (application.Country.find(() => countrycode)) {
          return application.ApplicationId;
        } else {
          throw new HttpException(404, `Application ${application.ApplicationId} no existe para el Country ${countrycode}`);
        }
      } else {
        throw new HttpException(404, `Application ${application.ApplicationId} no existe`);
      }
    } else {
      throw new HttpException(404, `Tenant ${tenantid} no existe`);
    }
  }

  public async getExtendedProperty(tenantid: string, applicationid: string): Promise<any> {
    const tenantRepository = getMongoRepository(Tenant);
    const applicationRepository = getMongoRepository(Application);
    const tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    //console.log(tenant);
    if (tenant) {
      // SE VALIDA SI EL APPLICATIONID ESTA CONFIGURADO EN EL TENANT
      if (!tenant.ApplicationId.find(() => applicationid))
        throw new Error(`applicationid ${applicationid} no existe en el tenant ${tenant.TenantId}`);
      // SE OBTIENE LA INFORMACION DEL APPLICATIVO
      const application = await applicationRepository.findOne({ where: { ApplicationId: applicationid } });
      //console.log(application);
      if (application) {
        if (application.ExtendedProperties.length > 0) {
          const resultObject = [];
          application.ExtendedProperties.forEach(property => {
            if (property.Key00 !== 'URL') {
              resultObject.push({
                PK_UTL_PAR_APLICATIVO: application.ApplicationCode,
                DESCRIPCION: property.Description,
                PK_UTL_PAR_PROPIEDAD_APLICATIVO: 0,
                PROPIEDAD: property.Description,
                STR_VALOR: property.Value00,
                STR_VALOR01: property.Value01,
                STR_VALOR02: property.Value02,
                NUM_VALOR: property.NumericValue,
                LLAVE00: property.Key00,
                LLAVE01: property.Key01,
                LLAVE02: property.Key02,
                FK_UTL_PAR_PAIS: 0,
              });
            }
          });
          return resultObject;
        }
      } else {
        throw new Error(`ApplicationId ${applicationid} no encontrada`);
      }
    } else {
      throw new Error(`Tenant Id ${tenantid} no existe`);
    }
  }

  public async getExtendedPropertyUrl(tenantid: string, key: string, applicationid: number, countryid: number): Promise<any> {
    const tenantRepository = getMongoRepository(Tenant);
    const applicationRepository = getMongoRepository(Application);
    const envRepository = getMongoRepository(DataBaseEnvironment);

    const tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    if (tenant) {
      let envEndpoints: EnvUrls;
      const env = await envRepository.findOne({ where: { EnvironmetId: tenant.EnvironmentId } });
      //console.log(env);
      if (env) {
        envEndpoints = env.EndPoints.find(x => x.Key === 'BackEnd-External');
        //console.log('envEndpoints', envEndpoints);
      }
      // SE VALIDA SI EL APPLICATIONID ESTA CONFIGURADO EN EL TENANT
      if (!tenant.ApplicationId.find(() => applicationid))
        throw new Error(`applicationid ${applicationid} no existe en el tenant ${tenant.TenantId}`);
      // SE OBTIENE LA INFORMACION DEL APPLICATIVO
      console.log(`applicationid ${applicationid} - countryid: ${countryid}`);
      const application = await applicationRepository.findOne({ where: { ApplicationCode: applicationid, Country: countryid } }); //, Country: { $elemMatch: { countryid } }
      console.log(application);
      if (application) {
        if (application.ExtendedProperties.length > 0) {
          const resultObject = [];
          application.ExtendedProperties.forEach(property => {
            console.log(key.toUpperCase());
            if (key.toUpperCase() === 'ALL') {
              if (property.Key00 === 'URL') {
                resultObject.push({
                  PK_WEBURLS: 0,
                  FK_UTL_PAR_PAIS: countryid,
                  FK_BOM_PAR_APLICATIVO: application.ApplicationCode,
                  LLAVE: property.Key01,
                  URL:
                    property.Key01.toUpperCase() === 'BACKEND'
                      ? `${envEndpoints.Value}/api/v1/${tenant.id}`
                      : property.Key01.toUpperCase() === 'MQ'
                      ? `${envEndpoints.Value}/api/1.0/queue/${tenant.id}/rabbitmq`
                      : property.Value00,
                  ACTIVA: 1,
                  TIMEOUT: 0,
                  MAXBUFFERSIZE: 0,
                  KEY: null,
                  PAIS: null,
                  PK_UTL_PAR_APLICATIVO: application.ApplicationCode,
                  LLAVE02: null,
                  FUENTE_CORE: null,
                });
              }
            } else {
              if (property.Key00 === 'URL' && property.Key01.toUpperCase() === key.toUpperCase()) {
                resultObject.push({
                  PK_WEBURLS: 0,
                  FK_UTL_PAR_PAIS: countryid,
                  FK_BOM_PAR_APLICATIVO: application.ApplicationCode,
                  LLAVE: property.Key01,
                  URL:
                    property.Key01.toUpperCase() === 'BACKEND'
                      ? `${envEndpoints.Value}/api/v1/${tenant.id}`
                      : property.Key01.toUpperCase() === 'MQ'
                      ? `${envEndpoints.Value}/api/1.0/queue/${tenant.id}/rabbitmq`
                      : property.Value00,
                  ACTIVA: 1,
                  TIMEOUT: 0,
                  MAXBUFFERSIZE: 0,
                  KEY: null,
                  PAIS: null,
                  PK_UTL_PAR_APLICATIVO: application.ApplicationCode,
                  LLAVE02: null,
                  FUENTE_CORE: null,
                });
              }
            }
          });
          return resultObject;
        }
      } else {
        throw new Error(`ApplicationId ${applicationid} no encontrada`);
      }
    } else {
      throw new Error(`Tenant Id ${tenantid} no existe`);
    }
  }

  public async getExtendedPropertyUrlByApplicationId(tenantid: string, applicationid: string): Promise<any> {
    const tenantRepository = getMongoRepository(Tenant);
    const applicationRepository = getMongoRepository(Application);
    const envRepository = getMongoRepository(DataBaseEnvironment);

    const tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    if (tenant) {
      let envEndpoints: EnvUrls;
      const env = await envRepository.findOne({ where: { EnvironmetId: tenant.EnvironmentId } });
      console.log(env);
      if (env) {
        envEndpoints = env.EndPoints.find(x => x.Key === 'BackEnd-External');
        console.log(envEndpoints);
      }
      // SE VALIDA SI EL APPLICATIONID ESTA CONFIGURADO EN EL TENANT
      if (!tenant.ApplicationId.find(() => applicationid))
        throw new Error(`applicationid ${applicationid} no existe en el tenant ${tenant.TenantId}`);
      // SE OBTIENE LA INFORMACION DEL APPLICATIVO
      const application = await applicationRepository.findOne({ where: { ApplicationId: applicationid } }); //, Country: { $elemMatch: { countryid } }
      if (application) {
        if (application.ExtendedProperties.length > 0) {
          const resultObject = [];
          application.ExtendedProperties.forEach(property => {
            if (property.Key00 === 'URL') {
              resultObject.push({
                PK_WEBURLS: 0,
                FK_UTL_PAR_PAIS: application.Country[0],
                FK_BOM_PAR_APLICATIVO: application.ApplicationCode,
                LLAVE: property.Key01,
                URL:
                  property.Key01.toUpperCase() === 'BACKEND'
                    ? `${envEndpoints.Value}/api/v1/${tenant.id}`
                    : property.Key01.toUpperCase() === 'MQ'
                    ? `${envEndpoints.Value}/api/1.0/queue/${tenant.id}/rabbitmq`
                    : property.Value00,
                ACTIVA: 1,
                TIMEOUT: 0,
                MAXBUFFERSIZE: 0,
                KEY: null,
                PAIS: null,
                PK_UTL_PAR_APLICATIVO: application.ApplicationCode,
                LLAVE02: null,
                FUENTE_CORE: null,
              });
            }

            // if (key.toUpperCase() === 'ALL') {
            // } else {
            //   if (property.Key00 === 'URL' && property.Key01 === key) {
            //     resultObject.push({
            //       PK_WEBURLS: 0,
            //       FK_UTL_PAR_PAIS: application.Country[0],
            //       FK_BOM_PAR_APLICATIVO: application.ApplicationCode,
            //       LLAVE: property.Key01,
            //       URL:
            //         property.Key01.toUpperCase() === 'BACKEND'
            //           ? `${envEndpoints.Value}/api/v1/${tenant.id}`
            //           : property.Key01.toUpperCase() === 'MQ'
            //           ? `${envEndpoints.Value}/api/1.0/queue/${tenant.id}/rabbitmq`
            //           : property.Value00,
            //       ACTIVA: 1,
            //       TIMEOUT: 0,
            //       MAXBUFFERSIZE: 0,
            //       KEY: null,
            //       PAIS: null,
            //       PK_UTL_PAR_APLICATIVO: application.ApplicationCode,
            //       LLAVE02: null,
            //       FUENTE_CORE: null,
            //     });
            //   }
            //}
          });
          return resultObject;
        }
      } else {
        throw new Error(`ApplicationId ${applicationid} no encontrada`);
      }
    } else {
      throw new Error(`Tenant Id ${tenantid} no existe`);
    }
  }

  public async getApplicationByName(applicationId: string) {
    const repository = getMongoRepository(Application);
    const data = await repository.findOne({ where: { ApplicationId: applicationId }, order: { id: 'DESC' } });
    //console.log(data);
    data.Connections.forEach(conn => {
      conn.Password = AES.decrypt(conn.Password, process.env.SECRETE_KEY).toString(enc.Utf8);
    });
    return data;
  }

  public async getApplicationByEnvironment(environmentId: string) {
    //const envrepository = getMongoRepository(DataBaseEnvironment);
    const tenantrepository = getMongoRepository(Tenant);
    const repository = getMongoRepository(Application);

    const tenants = await tenantrepository.find({ where: { EnvironmentId: environmentId } });
    const applications = [];
    if (tenants) {
      for (let index = 0; index < tenants.length; index++) {
        const tenant = tenants[index];
        for (let index = 0; index < tenant.ApplicationId.length; index++) {
          const applicationId = tenant.ApplicationId[index];
          //console.log(applicationId);
          const appresp = await repository.findOne({ where: { ApplicationId: applicationId } });
          applications.push(appresp);
        }
      }
      //console.log(applications);
    } else {
      throw new Error(`El ambiente ${environmentId} no existe`);
    }
    //console.log('Finaly');
    return applications;
  }

  public async cloneApp(dto: CloneAppDto) {
    const apprepository = getMongoRepository(Application);
    const app = await apprepository.findOne({ where: { ApplicationId: dto.sourceAppId } });
    if (app) {
      const newapp: Application = { ...app };
      newapp.ApplicationId = dto.targetAppId;
      newapp.ApplicationName = dto.targetAppId;
      newapp.Description = dto.description;
      newapp.ApplicationCode = dto.applicationCode;
      newapp.Country = [dto.applicationCountry];

      delete newapp.id;

      await apprepository.insert(newapp);
    }
  }

  public async updateApplication(appid: string, applicationDto: ApplicationDto): Promise<void> {
    applicationDto.Connections.forEach(data => {
      console.log(data);
    });

    const newApplication = new Application();
    newApplication.ApplicationCode = applicationDto.ApplicationCode;
    newApplication.ApplicationId = applicationDto.ApplicationId;
    newApplication.ApplicationName = applicationDto.ApplicationName;
    newApplication.Description = applicationDto.Description;
    newApplication.DbUserName = applicationDto.DbUserName;
    newApplication.DbPassword = applicationDto.DbPassword;
    newApplication.IsEnable = applicationDto.IsEnable;
    newApplication.IsEditable = applicationDto.IsEditable;
    newApplication.ReqAprove = applicationDto.ReqAprove;
    const connectionArray = [];
    applicationDto.Connections.forEach(connection => {
      const encrypt_password = connection.Password != null ? AES.encrypt(connection.Password, process.env.SECRETE_KEY).toString() : null;
      console.log('encrypt_password', encrypt_password);
      connectionArray.push(
        new ConnectionString(
          connection.Type,
          connection.ConnectionString,
          connection.ConnectionKey00,
          connection.ConnectionKey01,
          connection.ConnectionKey02,
          connection.HostName,
          connection.UserName,
          encrypt_password,
          connection.DataBase,
          connection.Port,
          connection.SSLMode,
        ),
      );
    });
    newApplication.Connections = connectionArray;
    const procedureArrya = [];
    applicationDto.Procedures.forEach(procedure => {
      procedureArrya.push(new Procedure(procedure.Procedure, procedure.ProcedureKey, procedure.Parameters, procedure.Active, procedure.Trace));
    });
    newApplication.Procedures = procedureArrya;
    const extentedArray = [];
    applicationDto.ExtendedProperties.forEach(prop => {
      extentedArray.push(
        new ExtentedProperty(prop.Key00, prop.Key01, prop.Key02, prop.Value00, prop.Value01, prop.Value02, prop.NumericValue, prop.Description),
      );
    });
    newApplication.ExtendedProperties = extentedArray;
    newApplication.Country = applicationDto.Country;
    newApplication.AllowProcedure = applicationDto.AllowProcedure;

    const manager = getMongoRepository(Application);
    console.log(appid);
    //console.log(newApplication);
    await manager.update(new ObjectID(appid), newApplication);
  }

  public async getConfigurationUrlByEnvApp(applicationid: string) {
    console.log(ip.address());
    const tenantRepository = getRepository(Tenant);
    const tenants = await tenantRepository.find({ where: { ApplicationId: applicationid } });
    if (tenants) {
      const responseUrl = [];
      tenants.forEach(tenat => {
        responseUrl.push({
          Environmet: tenat.EnvironmentId,
          configurationUrl: `http://20.75.122.158/api/${tenat.id}/v1`,
        });
      });
      return responseUrl;
    } else {
      return [];
    }
  }

  public async getAllAplication(): Promise<Application[]> {
    logger.info('Todos');
    const repository = getMongoRepository(Application);
    return await repository.find({ order: { id: 'ASC' } });
  }

  public async deleteApplication(applicationId: string) {
    //Validamos si el aplicativo esta amarrado a algun tenant
    const tenantRepository = getRepository(Tenant);
    const tenants = await tenantRepository.find({ where: { ApplicationId: applicationId } });
    if (tenants && tenants.length > 0) {
      throw Error(`No se puede eliminar el applicativo ${applicationId} ya que se encuenta configurado en los tenants ${tenants.join()}`);
    }
    const repository = getRepository(Application);
    const app = await repository.findOne({ where: { ApplicationId: applicationId } });
    await repository.remove(app);
  }
}

export default ApplicationServices;
