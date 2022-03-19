interface IApiErrorData {
  status: number;
  error: string;
  errorDescription?: string;
}

export class ApiError extends Error {
  status: number;
  error: string;
  errorDescription?: string | undefined;

  constructor(data: IApiErrorData) {
    super();
    this.status = data.status;
    this.error = data.error;
    this.errorDescription = data.errorDescription;
  }
}
