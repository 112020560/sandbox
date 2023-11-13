export class RequestDto {
  requestUser: string;
  sourceEnvironment: string;
  sourceApplicationId: string[];
  sourceTenantId: string;
  sourceConfigurationId: string;
  sourceScheduleId: string;
  targetEnvironmetId: string;
  created_at: Date;
  updated_at: Date;
  userApproves: string;
}
