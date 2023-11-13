import { getConnection, getMongoManager, getMongoRepository, getRepository } from 'typeorm';
import { EnvironmentDto } from '@dtos/environment.dto';
import { DataBaseEnvironment } from '../entity/environment.entity';
import { DataBaseIntance } from '@/entity/dbintance';
import { EnvUrls } from '@/entity/endpoints';
import { ObjectID } from 'mongodb';
import { logger } from '@/utils/logger';

class EnvironmentService {
  public async createEnvironment(dto: EnvironmentDto): Promise<void> {
    const newEnvironment = new DataBaseEnvironment();
    newEnvironment.EnvironmetId = dto.EnvironmetId;
    newEnvironment.Name = dto.Name;
    newEnvironment.Description = dto.Description;
    newEnvironment.IsEnable = dto.IsEnable;
    const endpointsArray = [];
    if (dto.EndPoints !== undefined && dto.EndPoints !== null && dto.EndPoints.length > 0) {
      dto.EndPoints.forEach(endpoint => {
        endpointsArray.push(new EnvUrls(endpoint.Key, endpoint.Value));
      });
    }
    newEnvironment.EndPoints = endpointsArray;

    const instancesArray = [];
    if (dto.Instances !== undefined && dto.Instances !== null && dto.Instances.length > 0) {
      dto.Instances.forEach(data => {
        instancesArray.push(new DataBaseIntance(data.Target, data.Value, data.Key));
      });
    }
    newEnvironment.Instances = instancesArray;
    console.log(newEnvironment);
    const manager = getMongoManager();
    await manager.save(newEnvironment);
  }

  public async getEnvironments(): Promise<DataBaseEnvironment[]> {
    const manager = getMongoManager();
    return await manager.find(DataBaseEnvironment);
  }

  public async updateEnvironmentsInstance(id: string, target: string, value: string): Promise<void> {
    const repository = getMongoRepository(DataBaseEnvironment);
    await repository.findOneAndUpdate(
      { _id: new ObjectID(id), 'Instances.Target': target },
      {
        $set: {
          'Instances.$.Value': value,
        },
      },
    );
  }

  public async updateEnvironmentsEndpoint(id: string, key: string, value: string): Promise<void> {
    const repository = getMongoRepository(DataBaseEnvironment);
    //await repository.findOneAndUpdate({ _id: new ObjectID(id), 'EndPoints.Key': key }, { $set: { 'EndPoints.$.Value': value } });
    const environment = await repository.findOne(new ObjectID(id));
    if (environment.EndPoints.find(x => x.Key === key)) {
      environment.EndPoints.find(x => x.Key === key).Value = value;
    } else {
      environment.EndPoints.push({ Key: key, Value: value });
    }
    await repository.save(environment);
  }

  public async deleteEnvironmentsEndpoint(id: string, key: string): Promise<void> {
    logger.info(`================${'Entre'}=================`);
    const repository = getMongoRepository(DataBaseEnvironment);
    const environment = await repository.findOne(new ObjectID(id));
    const endpoints = environment.EndPoints.filter(x => x.Key !== key);
    environment.EndPoints = endpoints;
    await repository.save(environment);
  }

  public async updateEnvironment(id: string, dto: EnvironmentDto) {
    const newEnvironment = new DataBaseEnvironment();
    newEnvironment.EnvironmetId = dto.EnvironmetId;
    newEnvironment.Name = dto.Name;
    newEnvironment.Description = dto.Description;
    newEnvironment.IsEnable = dto.IsEnable;
    const endpointsArray = [];
    if (dto.EndPoints !== undefined && dto.EndPoints !== null && dto.EndPoints.length > 0) {
      dto.EndPoints.forEach(endpoint => {
        endpointsArray.push(new EnvUrls(endpoint.Key, endpoint.Value));
      });
    }
    newEnvironment.EndPoints = endpointsArray;

    const instancesArray = [];
    if (dto.Instances !== undefined && dto.Instances !== null && dto.Instances.length > 0) {
      dto.Instances.forEach(data => {
        instancesArray.push(new DataBaseIntance(data.Target, data.Value, data.Key));
      });
    }
    newEnvironment.Instances = instancesArray;

    const repository = getMongoRepository(DataBaseEnvironment);
    await repository.update(new ObjectID(id), newEnvironment);
  }

  public async deleteEnvironment(id: string) {
    const repository = getMongoRepository(DataBaseEnvironment);
    await repository.delete(new ObjectID(id));
  }
}

export default EnvironmentService;
