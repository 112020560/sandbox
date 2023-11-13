import config from 'config';
import path from 'path';
import { ConnectionOptions } from 'typeorm';
import { dbConfig } from '@interfaces/db.interface';

const { url }: dbConfig = config.get('dbConfig');
export const dbConnection: ConnectionOptions = {
  type: 'mongodb',
  url: process.env.MONGO_URL, //'mongodb+srv://sandbox:nbZl1DXvxXu4kggM@cluster0.yh8to.mongodb.net/SandBox2?retryWrites=true&w=majority',
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [path.join(__dirname, '../**/*.subscriber{.ts,.js}')],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  useUnifiedTopology: true,
};
// export const dbConnection: ConnectionOptions = {
//   type: 'mongodb',
//   host: host,
//   username: user,
//   password: password,
//   port: 27017,
//   database: database,
//   synchronize: true,
//   logging: false,
//   entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
//   migrations: [path.join(__dirname, '../**/*.migration{.ts,.js}')],
//   subscribers: [path.join(__dirname, '../**/*.subscriber{.ts,.js}')],
//   cli: {
//     entitiesDir: 'src/entity',
//     migrationsDir: 'src/migration',
//     subscribersDir: 'src/subscriber',
//   },
// };
