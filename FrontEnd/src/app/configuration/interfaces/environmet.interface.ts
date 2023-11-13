export interface SandBoxEnviroment {
  id?: string;
  EnvironmetId?: string;
  Name?: string;
  Description?: string;
  IsEnable?: boolean;
  EndPoints?: EnvUrls[];
  Instances?: DataBaseIntance[];
}

export interface EnvUrls {
  Key?: string;
  Value?: string;
}

export class DataBaseIntance {
  Target?: string;
  Value?: string;
}
