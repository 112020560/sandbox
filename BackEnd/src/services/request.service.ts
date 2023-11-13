import { RequestDto } from '@/dtos/solicitud.dto';
import { Solicitud } from '@/entity/solicitud.entity';
import { getMongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

class RequestService {
  async createRequestAsync(dto: RequestDto) {
    const repository = getMongoRepository(Solicitud);
    return await repository.save({ ...dto });
  }

  async getPendingRequest() {
    const repository = getMongoRepository(Solicitud);
    return await repository.find({ where: { status: 'pending' } });
  }

  async getRequestById(id: string) {
    const repository = getMongoRepository(Solicitud);
    return await repository.findOne(new ObjectID(id));
  }

  async updateRequestAsync(id: string, dto: RequestDto) {
    const repository = getMongoRepository(Solicitud);
    return await repository.update(new ObjectID(id), { ...dto });
  }
}

export default RequestService;
