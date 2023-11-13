import { Tenant } from '@/entity/tenant.entity';
import { getMongoRepository } from 'typeorm';
import { Application } from '../entity/application.entity';
import { DataBaseEnvironment } from '../entity/environment.entity';
import { HttpException } from '@/exceptions/HttpException';
import { ObjectID } from 'mongodb';
import { IConnection } from '@/interfaces/connection.interface';
import { AES, enc } from 'crypto-js';
import { ConnectionString } from '@/entity/conection';
import { logger } from '@/utils/logger';

const ORACLE_FORMAT = 'user id=[USERNAME];password=[PASSWORD];data source=//[HOST]/[DATABSE];Connection Timeout=60';
const MSSQL_FROMAR =
  'data source=[HOST];User ID=[USERNAME];Password=[PASSWORD];Connection Timeout=30;Initial Catalog=[DATABSE];Application Name=[APPLICATION_NAME];';
const MYSQL_FORMAT = 'data source=[HOST];uid=[USERNAME];password=[PASSWORD];port=[PORT];database=[DATABSE];SslMode=[SSLMODE];';

class ConnectionStringService {
  public async getConnectionString(tenantid: string): Promise<IConnection[]> {
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
          const connectionStringArray: IConnection[] = [];
          application.Connections.forEach(conn => {
            if (!env.Instances.find(x => x.Target == conn.Type))
              throw new HttpException(409, 'The connection string type and environment datasource host type does not match');
            const host = env.Instances.find(x => x.Target == conn.Type).Value;

            connectionStringArray.push({
              connstring:
                conn.Type === 'ORACLE'
                  ? conn.ConnectionString.replace('[ORACLE_HOST]', host)
                  : conn.Type === 'MYSQL'
                  ? conn.ConnectionString.replace('MYSQL_HOST', host)
                  : conn.ConnectionString.replace('HOST', host),
              key00: conn.ConnectionKey00,
              key01: conn.ConnectionKey01,
              key02: conn.ConnectionKey02,
              AppKey: application.ApplicationId,
              App: application.ApplicationCode,
              Country: 0,
              HostName: '',
            });
          });
          return connectionStringArray;
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

  public async getSandBoxConnectionString(tenantid: string, appid: string): Promise<IConnection[]> {
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
        // const applicationid: string = tenant.ApplicationId.find(x)
        if (tenant.ApplicationId.find(() => appid)) {
          // SI EL APLICATIVO EXISTE EN EL TENANT SE BUSCA PARA OBTENER SU CONFIGURACION
          const applicationRepository = getMongoRepository(Application);
          const application = await applicationRepository.findOne({ where: { ApplicationId: appid } });
          if (application) {
            //SI LA APLICACION EXISTE VAMOS A OBTENER LOS STRING DE CONEXION
            const connectionStringArray: IConnection[] = [];
            //console.log(application.Connections);
            application.Connections.forEach(conn => {
              if (!env.Instances.find(x => x.Target == conn.Type))
                throw new HttpException(409, 'The connection string type and environment datasource host type does not match');
              let host = '';
              if (env.Instances.find(x => x.Target == conn.Type && conn.ConnectionKey00.includes(x.Key))) {
                host = env.Instances.find(x => x.Target == conn.Type && conn.ConnectionKey00.includes(x.Key)).Value;
              }
              if (host === undefined || host === null || host === '') {
                host = env.Instances.find(x => x.Target == conn.Type).Value;
              }

              connectionStringArray.push({
                connstring: this.buildConnectionsString(conn.Type, host, application.ApplicationName, conn),
                // conn.Type === 'ORACLE'
                //   ? conn.ConnectionString.replace('[ORACLE_HOST]', host)
                //   : conn.Type === 'MYSQL'
                //   ? conn.ConnectionString.replace('[MYSQL_HOST]', host)
                //   : conn.ConnectionString.replace('[HOST]', host),
                key00: conn.ConnectionKey00,
                key01: conn.ConnectionKey01,
                key02: conn.ConnectionKey02,
                AppKey: application.ApplicationId,
                App: application.ApplicationCode,
                Country: application.Country[0],
                HostName: '',
              });
            });
            return connectionStringArray;
          } else {
            throw new HttpException(409, `La aplicacion configurada ${application.ApplicationId} no existe o ya no esta disponible`);
          }
        } else {
          throw new HttpException(409, `El ApplicationID ${appid} no existe o no esta configurado en el tenant ${tenantid}`);
        }
      } else {
        throw new HttpException(409, `El Environment ${env.EnvironmetId} configurado en el tenant no existe o ya no esta disponible`);
      }
    } else {
      throw new HttpException(409, `El tenant ${tenantid} no existe o ya no esta disponible`);
    }
  }

  public async getConnectionStringSplit(tenantid: string): Promise<IConnection[]> {
    //Se valida que el tenant exista
    const tenantRepository = getMongoRepository(Tenant);
    const tenant: Tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    console.log(tenant);
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
          const connectionStringArray: IConnection[] = [];
          application.Connections.forEach(conn => {
            if (!env.Instances.find(x => x.Target == conn.Type))
              throw new HttpException(409, 'The connection string type and environment datasource host type does not match');
            const host = env.Instances.find(x => x.Target == conn.Type).Value;
            const bytes = AES.decrypt(conn.Password, process.env.SECRETE_KEY);
            const password = bytes.toString(enc.Utf8);
            connectionStringArray.push({
              key00: conn.ConnectionKey00,
              key01: conn.ConnectionKey01,
              key02: conn.ConnectionKey02,
              AppKey: application.ApplicationId,
              App: application.ApplicationCode,
              Country: 0,
              HostName: host,
              UserName: conn.UserName,
              Password: password,
              DataBase: conn.DataBase,
            });
          });
          return connectionStringArray;
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

  private buildConnectionsString(type: string, hostname: string, applicationName: string, connection: ConnectionString) {
    console.log(connection);
    const bytes = AES.decrypt(connection.Password, process.env.SECRETE_KEY);
    const password = bytes.toString(enc.Utf8);

    if (type.toUpperCase().includes('MSSQL')) {
      let connectionString = MSSQL_FROMAR;

      connectionString = connectionString
        .replace('[HOST]', hostname)
        .replace('[USERNAME]', connection.UserName)
        .replace('[PASSWORD]', password)
        .replace('[DATABSE]', connection.DataBase)
        .replace('[APPLICATION_NAME]', applicationName);
      return connectionString;
    } else if (type.toUpperCase().includes('MYSQL')) {
      let connectionString = MYSQL_FORMAT;
      connectionString = connectionString
        .replace('[HOST]', hostname)
        .replace('[USERNAME]', connection.UserName)
        .replace('[PASSWORD]', password)
        .replace('[DATABSE]', connection.DataBase)
        .replace('[PORT]', connection.Port.toString())
        .replace('[SSLMODE]', connection.SSLMode || 'none');
      return connectionString;
    } else if (type.toUpperCase().includes('ORACLE')) {
      let connectionString = ORACLE_FORMAT;
      connectionString = connectionString
        .replace('[HOST]', hostname)
        .replace('[USERNAME]', connection.UserName)
        .replace('[PASSWORD]', password)
        .replace('[DATABSE]', connection.DataBase);
      return connectionString;
    } else if (type.toUpperCase().includes('POSTGRES')) {
      throw new Error('Postgresql not configured');
    } else if (type.toUpperCase().includes('SYBASE')) {
      throw new Error('Sybase  not configured');
    } else if (type.toUpperCase().includes('MONGO')) {
      throw new Error('Mongo  not configured');
    }

    // switch (type) {
    //   case 'MSSQL': {
    //     let connectionString = MSSQL_FROMAR;

    //     connectionString = connectionString
    //       .replace('[HOST]', hostname)
    //       .replace('[USERNAME]', connection.UserName)
    //       .replace('[PASSWORD]', password)
    //       .replace('[DATABSE]', connection.DataBase)
    //       .replace('[APPLICATION_NAME]', applicationName);
    //     return connectionString;
    //   }
    //   case 'MYSQL': {
    //     let connectionString = MYSQL_FORMAT;
    //     connectionString = connectionString
    //       .replace('[HOST]', hostname)
    //       .replace('[USERNAME]', connection.UserName)
    //       .replace('[PASSWORD]', password)
    //       .replace('[DATABSE]', connection.DataBase)
    //       .replace('[PORT]', connection.Port.toString());
    //     return connectionString;
    //   }
    //   case 'ORACLE': {
    //     let connectionString = ORACLE_FORMAT;
    //     connectionString = connectionString
    //       .replace('[HOST]', hostname)
    //       .replace('[USERNAME]', connection.UserName)
    //       .replace('[PASSWORD]', password)
    //       .replace('[DATABSE]', connection.DataBase);
    //     return connectionString;
    //   }
    //   case 'SAC': {
    //     let connectionString = ORACLE_FORMAT;
    //     connectionString = connectionString
    //       .replace('[HOST]', hostname)
    //       .replace('[USERNAME]', connection.UserName)
    //       .replace('[PASSWORD]', password)
    //       .replace('[DATABSE]', connection.DataBase);
    //     return connectionString;
    //   }
    //   default: {
    //     let connectionString = MSSQL_FROMAR;

    //     connectionString = connectionString
    //       .replace('[HOST]', hostname)
    //       .replace('[USERNAME]', connection.UserName)
    //       .replace('[PASSWORD]', password)
    //       .replace('[DATABSE]', connection.DataBase)
    //       .replace('[APPLICATION_NAME]', applicationName);
    //     return connectionString;
    //   }
    // }
  }
}

export default ConnectionStringService;
