// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const options = { headers: headers };

export const environment = {
  configurationUrlDev: 'http://10.173.86.53:8081',
  configurationUrlUat: 'http://10.173.112.201',
  configurationUrlProd: 'http://172.29.112.127',
  coreimporterUrl: 'http://localhost:7000',
  httjsonpostheader: options,
  production: true
};
