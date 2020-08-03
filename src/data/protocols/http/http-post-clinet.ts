import { HttpReposnse } from './http-reposnse'

export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient{
  post(params: HttpPostParams): Promise<HttpReposnse>
}
