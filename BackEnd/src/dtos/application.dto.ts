export class ApplicationDto {
  ApplicationCode: number;
  ApplicationId: string;

  ApplicationName: string;

  Description: string;

  DbUserName: string;

  DbPassword: string;

  IsEnable: boolean;

  IsEditable: boolean;

  ReqAprove: boolean;

  Connections: ConnectionDto[];

  AllowProcedure: boolean;

  Procedures: ProcedureDto[];

  ExtendedProperties: ExtendedDto[];
  Country: number[];
}

class ConnectionDto {
  Type: string;

  ConnectionString: string;

  ConnectionKey00: string;

  ConnectionKey01: string;

  ConnectionKey02: string;

  HostName?: string;

  UserName?: string;

  Password?: string;

  DataBase?: string;

  Port?: number;

  SSLMode?: string;
}

class ProcedureDto {
  Procedure: string;

  ProcedureKey: string;

  Parameters: string[];

  Active: boolean;

  Trace: boolean;
}

class ExtendedDto {
  Key00: string;
  Key01: string;
  Key02: string;
  Value00: any;
  Value01: any;
  Value02: any;
  NumericValue: number;
  Description: string;
}
