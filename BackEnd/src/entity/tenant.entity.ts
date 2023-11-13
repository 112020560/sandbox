import { Column, Entity, ObjectID, ObjectIdColumn, Unique } from 'typeorm';

@Entity('Tenant')
@Unique(['EnvironmentId', 'ApplicationId', 'Name'])
export class Tenant {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  TenantId: string;
  @Column()
  Name: string;
  @Column()
  Description: string;
  @Column()
  EnvironmentId: string;
  @Column()
  ApplicationId: string[];
  @Column()
  UserId: string;
  @Column()
  CreateAt: Date;
  @Column()
  ExpiredAt: Date;
  @Column()
  AprovedBy: string;
  @Column()
  Configuration?: any;
}
