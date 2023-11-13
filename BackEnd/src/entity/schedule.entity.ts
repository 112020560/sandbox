import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('Schedule')
export class ScheduleConfig {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  ServiceName: string;
  @Column()
  Countries: any[];
  @Column()
  Tenant: string;
}
