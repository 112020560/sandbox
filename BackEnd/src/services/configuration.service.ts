import { ConfigurationSetting } from '@/entity/configuration.entity';
import { getMongoRepository } from 'typeorm';
import { ConfigurationDto } from '../dtos/configuration.dto';

class ConfigurationServices {
  public async createConfiguration(configuration: ConfigurationDto): Promise<void> {
    const repository = getMongoRepository(ConfigurationSetting);
    const newconfig = new ConfigurationSetting();
    newconfig.Tenant = configuration.Tenant;
    newconfig.Configuration = configuration.Configuration;

    await repository.save(newconfig);
  }

  public async getConfiguration(appkey: string, tenantid: string) {
    const repository = getMongoRepository(ConfigurationSetting);
    return await repository.findOne({ where: { ApplicationId: appkey, Tenant: tenantid } });
  }

  public async getConfigurationByAppkey(appkey: string) {
    const repository = getMongoRepository(ConfigurationSetting);
    return await repository.findOne({ where: { ApplicationId: appkey } });
  }
}

export default ConfigurationServices;
