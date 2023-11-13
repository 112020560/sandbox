import { Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity('Configuration')
export class ConfigurationSetting {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  Tenant: string;
  @Column()
  ApplicationId: string;
  @Column()
  Configuration: Object;
}
