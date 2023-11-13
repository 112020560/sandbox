export interface ITenant {
  id?: string;
  TenantId?: string;
  Name?: string;
  Description?: string;
  EnvironmentId?: string;
  ApplicaionId?: string[];
  UserId?: string;
  CreateAt?: Date;
  ExpiredAt?: Date;
  AprovedBy?: string;
  Configuration?: string;
}
