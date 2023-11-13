export interface IParameters {
  CountryCode: number;
  AppCode: number;
  Procedure: string;
  Parameters: string;
  Description: string;
  SearchKey: string;
  AppKey: string;
  EnableTrace: boolean;
}

export interface SandboxParametersV2 {
  Succeeded: boolean;
  ValidateParams: Boolean;
  Procedures: IParameters[];
}
