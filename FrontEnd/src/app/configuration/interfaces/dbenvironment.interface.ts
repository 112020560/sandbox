export interface IEnvironment {
  id?: string;
  EnvironmetId?: string;
  Name?: string;
  Description?: string;
  IsEnable?: boolean;
  EndPoints?: EnvUrls[];
  Instances?: DataBaseIntance[];
}

export class EnvUrls {
  Key?: string;
  Value?: string;
}

export class DataBaseIntance {
  Target?: string;
  Value?: string;
}
