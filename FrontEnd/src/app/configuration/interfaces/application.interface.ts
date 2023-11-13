export interface IApplication {
  id?: string;
  ApplicationId?: string;
  ApplicationCode?:number;
  ApplicationName?: string;
  Description?: string;
  DbUserName?: string;
  DbPassword?: string;
  IsEnable?: boolean;
  IsEditable?: boolean;
  ReqAprove?: boolean;
  Connections?: ConnectionString[];
  AllowProcedure?: boolean;
  Procedures?: Procedure[];
  ExtendedProperties?: ExtentedProperty[];
  Country?: number[];
}


export class ConnectionString {
  Type?: string;
  ConnectionString?: string;
  ConnectionKey00?: string;
  ConnectionKey01?: string;
  ConnectionKey02?: string;
  HostName?: string;
  UserName?: string;
  Password?: string;
  DataBase?: string;
  Port?: number;
  SSLMode?: string;
}

export class Procedure {
  Procedure?: string;
  ProcedureKey?: string;
  Parameters?: string[];
  Active?: boolean;
  Trace?: boolean;
}

export class ExtentedProperty {
  Key00?: string;
  Key01?: string;
  Key02?: string;
  Value00?: any;
  Value01?: any;
  Value02?: any;
  NumericValue?: number;
  Description?: string;
}
