// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { HttpHeaders } from "@angular/common/http";

const headers = new HttpHeaders({ "Content-Type": "application/json" });
const options = { headers: headers };

export const environment = {
  // configurationUrlSacProd: 'http://172.16.29.60:3000',
  // configurationUrlDev: 'http://10.173.86.166',
  // configurationUrlUat: 'http://10.173.113.19',
  // configurationUrlProd: 'http://172.29.112.160',
  coreimporterUrl: "http://localhost:7000",
  httjsonpostheader: options,
  configurationUrls: [
    {
      KEY: "Dev",
      VALUE: "http://10.173.86.166",//"http://localhost:3000",
    },
    {
      KEY: "Uat",
      VALUE: "http://10.173.113.19",
    },
    {
      KEY: "Stg",
      VALUE: "http://10.173.86.206",
    },
    {
      KEY: "Prod",
      VALUE: "http://172.29.112.160",
    },
    {
      KEY: "SacTest",
      VALUE: "http://172.16.31.24:3000",
    },
    {
      KEY: "SacProd",
      VALUE: "http://172.16.29.60:3000",
    },
  ],
  production: false,
};
