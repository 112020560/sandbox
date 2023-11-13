import { Menu } from '@/entity/menu.entity';
import { getMongoRepository } from 'typeorm';

class AuthorizationService {
  public async findMenuAccessById(appId: string): Promise<Menu[]> {
    const repository = getMongoRepository(Menu);
    const data = await repository.find({ where: { ApplicationId: appId } });
    return data;
  }
}

export default AuthorizationService;
