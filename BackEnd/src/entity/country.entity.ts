import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('Country')
export class Country {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  code: number;

  @Column()
  cod_area: string;

  @Column()
  name: string;

  @Column()
  abbreviation: string;

  @Column()
  Enable: boolean;

  @Column()
  enable: string;

  @Column()
  ldap: string;

  @Column()
  domain: string;

  @Column()
  source_core: string;

  @Column()
  rule_code: string;
}
