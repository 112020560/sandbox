process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ApplicationRoute from './routes/application.route';
import EnvironmentRoute from './routes/environment.route';
import TenantRoute from './routes/tenant.route';
import ConnectionStringRoute from './routes/connectionstring.route';
import ParametersRoute from './routes/parameters.rout';
import SandBoxConnectionStringRoute from './routes/sandboxconnections';
import SandBoxParametersRoute from './routes/sandboxparameters';
import SandboxApplicationRoute from './routes/sandboxapplication.route';
import ScheduleRoute from './routes/schedule.route';
import CountryRouter from './routes/country.route';
import ApiConfigRoute from './routes/apiconfig.route';
import ConfigurationRoute from './routes/configuration.route';
import UrlRoute from './routes/url.route';
import ConfigurationV2Route from './routes/configurationv2.router';
import RequestRoute from './routes/solicitud.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new ApplicationRoute(),
  new EnvironmentRoute(),
  new TenantRoute(),
  new ConnectionStringRoute(),
  new ParametersRoute(),
  new SandBoxConnectionStringRoute(),
  new SandBoxParametersRoute(),
  new SandboxApplicationRoute(),
  new ScheduleRoute(),
  new CountryRouter(),
  new ApiConfigRoute(),
  new ConfigurationRoute(),
  new UrlRoute(),
  new ConfigurationV2Route(),
  new RequestRoute(),
]);

app.listen();
