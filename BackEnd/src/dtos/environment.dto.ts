export class EnvironmentDto {
  EnvironmetId: string;

  Name: string;

  Description: string;

  IsEnable: boolean;

  EndPoints: EndPointsDto[];

  Instances: IntancesDto[];
}

class IntancesDto {
  Target: string;
  Value: string;
  Key?: string;
}

class EndPointsDto {
  Key: string;
  Value: string;
}
