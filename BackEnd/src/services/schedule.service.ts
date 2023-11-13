import { ScheduleConfig } from '@/entity/schedule.entity';
import { Tenant } from '@/entity/tenant.entity';
import { getMongoRepository } from 'typeorm';
import { ScheduleDto } from '../dtos/schedule.dto';
import { ObjectID } from 'mongodb';
import { HttpException } from '../exceptions/HttpException';

class ScheduleService {
  public async createSchedule(dto: ScheduleDto): Promise<void> {
    const newSchedule = new ScheduleConfig();
    newSchedule.ServiceName = dto.ServiceName;
    newSchedule.Countries = dto.Countries;
    newSchedule.Tenant = dto.Tenant;

    const respository = getMongoRepository(ScheduleConfig);
    await respository.save(newSchedule);
  }

  public async findSchedule(tenantid: string, serviceName: string): Promise<ScheduleConfig> {
    const repository = getMongoRepository(ScheduleConfig);
    const tenantRepository = getMongoRepository(Tenant);
    const tenant = await tenantRepository.findOne(new ObjectID(tenantid));
    if (tenant) {
      const schedule = await repository.findOne({ where: { ServiceName: serviceName, Tenant: tenantid } });
      if (schedule) {
        return schedule;
      } else {
        throw new HttpException(404, 'Schedule no existe');
      }
    } else {
      throw new HttpException(404, 'Tenant no existe');
    }
  }

  public async findScheduleByName(serviceName: string): Promise<ScheduleConfig> {
    const repository = getMongoRepository(ScheduleConfig);
    const tenantRepository = getMongoRepository(Tenant);
    const tenant = await tenantRepository.findOne({ where: { ApplicationId: serviceName } });
    if (tenant) {
      const schedule = await repository.findOne({ where: { ServiceName: serviceName } });
      if (schedule) {
        return schedule;
      } else {
        throw new HttpException(404, 'Schedule no existe');
      }
    } else {
      throw new HttpException(404, 'Tenant no existe');
    }
  }
}

export default ScheduleService;
