export enum HttpStatusCode {
  noContent = 204,
  unathorized = 401

}

export type HttpReposnse = {
  statusCode: HttpStatusCode
  body?: any
};
