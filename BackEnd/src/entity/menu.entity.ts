import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'NavItem', database: 'AccessControl' })
export class Menu {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  ApplicationId: string;

  @Column()
  name: string;

  @Column()
  controller: string;

  @Column()
  action: string;

  @Column()
  isParent: boolean;

  @Column()
  children: Menu[];
}
