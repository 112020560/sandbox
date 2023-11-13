export class GenericResponse<T> {
  success: boolean;
  message: string;
  data: T
}
