import { getMongoManager, getMongoRepository, getRepository } from 'typeorm';
import { TenetDto } from '@dtos/tenant.dto';
import { Tenant } from '../entity/tenant.entity';
import { ITenant } from '@/interfaces/tenant.interface';
import { ObjectID } from 'mongodb';
import { DataBaseEnvironment } from '@/entity/environment.entity';
import { ConfigurationSetting } from '@/entity/configuration.entity';
import { ScheduleConfig } from '@/entity/schedule.entity';
import { RequestDto } from '../dtos/solicitud.dto';

class TenantService {
  public async creatTenant(dto: TenetDto): Promise<ITenant> {
    const newTenant = new Tenant();
    newTenant.Description = dto.Description;
    newTenant.ApplicationId = dto.ApplicationId;
    newTenant.AprovedBy = dto.AprovedBy;
    newTenant.CreateAt = dto.CreateAt;
    newTenant.EnvironmentId = dto.EnvironmentId;
    newTenant.ExpiredAt = dto.ExpiredAt;
    newTenant.Name = dto.Name;
    newTenant.TenantId = dto.TenantId;
    newTenant.UserId = dto.UserId;
    newTenant.Configuration = dto.Configuration;

    const manager = getMongoManager();
    const created: ITenant = await manager.save(newTenant);
    return created;
  }

  public async getAll(): Promise<Tenant[]> {
    const manager = getRepository(Tenant);
    return await manager.find();
  }

  public async updateTenant(id: string, tenant: TenetDto) {
    const newTenant = new Tenant();
    newTenant.Description = tenant.Description;
    newTenant.ApplicationId = tenant.ApplicationId;
    newTenant.AprovedBy = tenant.AprovedBy;
    newTenant.CreateAt = tenant.CreateAt;
    newTenant.EnvironmentId = tenant.EnvironmentId;
    newTenant.ExpiredAt = tenant.ExpiredAt;
    newTenant.Name = tenant.Name;
    newTenant.TenantId = tenant.TenantId;
    newTenant.UserId = tenant.UserId;
    newTenant.Configuration = tenant.Configuration;

    const repository = getRepository(Tenant);
    await repository.update(new ObjectID(id), newTenant);
  }

  public async deleteTenant(id: string) {
    const repo = getRepository(Tenant);
    const tenant = await repo.findOne(new ObjectID(id));
    if (tenant) {
      await repo.delete(tenant);
    } else {
      throw new Error('Tenant no existe');
    }
  }

  public async updateConfig(id: string, config: any): Promise<void> {
    const repository = getMongoRepository(Tenant);
    await repository.findOneAndUpdate(
      { _id: new ObjectID(id) },
      {
        $set: {
          Configuration: config,
        },
      },
    );
  }

  public async getConfiguration(tenantid: string) {
    const repository = getMongoRepository(Tenant);
    const tenant = await repository.findOne(new ObjectID(tenantid));
    if (tenant) {
      return tenant.Configuration;
    } else {
      throw new Error(`Tenant ${tenantid} no existe`);
    }
  }

  public async getBackEndUrls(environment: string, applicationId: string) {
    const repository = getMongoRepository(Tenant);
    const envrepository = getMongoRepository(DataBaseEnvironment);

    const tenant = await repository.findOne({ where: { EnvironmentId: environment.toUpperCase(), ApplicationId: applicationId } });
    if (tenant) {
      const env = await envrepository.findOne({ where: { EnvironmetId: environment } });
      if (env) {
        const retvalues = [];
        env.EndPoints.forEach(endpoint => {
          if (endpoint.Key.toUpperCase() === 'BACKEND') {
            retvalues.push({
              BackEnd1_0: `${endpoint.Value}/api/1.0/BackEnd/${tenant.id}`,
              BackEndV1: `${endpoint.Value}/api/v1/${tenant.id}`,
              BackEnd2_0: `${endpoint.Value}/api/2.0/BackEnd/${tenant.id}`,
              BackEndV2: `${endpoint.Value}/api/v2/${tenant.id}`,
            });
          }
        });
        return retvalues;
      } else {
        throw new Error(`Environment ${environment} no existe`);
      }
    } else {
      throw new Error(`Tenant no existe para el environment ${environment} y el applicationid ${applicationId}`);
    }
  }

  public async getMigrationInformationAsync(tenantid: string) {
    const tenantRepository = getMongoRepository(Tenant);
    const tenantResp: Tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    if (tenantResp) {
      const applicationId: string[] = tenantResp.ApplicationId;
      const sourceEnvironmet = tenantResp.EnvironmentId;
      const sourceTenantId = tenantid;
      let configurationId = '';
      let scheduleid = '';
      const configurationRepository = getMongoRepository(ConfigurationSetting);
      const configurationResp = await configurationRepository.findOne({ where: { ApplicationId: applicationId } });
      if (configurationResp) {
        configurationId = configurationResp.id.toString();
      }
      const scheduleRepository = getMongoRepository(ScheduleConfig);
      const scheduleResp = await scheduleRepository.findOne({ where: { ServiceName: applicationId } });
      if (scheduleResp) {
        scheduleid = scheduleResp.id.toString();
      }

      const response = new RequestDto();
      response.sourceApplicationId = applicationId;
      response.sourceConfigurationId = configurationId;
      response.sourceEnvironment = sourceEnvironmet;
      response.sourceScheduleId = scheduleid;
      response.sourceTenantId = sourceTenantId;

      return response;
    }
  }
}
export default TenantService;
