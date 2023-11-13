export class TenetDto {
  TenantId: string;

  Name: string;

  Description: string;

  EnvironmentId: string;

  ApplicationId: string[];

  UserId: string;

  CreateAt: Date;

  ExpiredAt: Date;

  AprovedBy: string;

  Configuration?: any;
}
