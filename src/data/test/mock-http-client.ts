import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-clinet'
import { HttpReposnse, HttpStatusCode } from '../protocols/http/http-reposnse'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpReposnse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (params: HttpPostParams): Promise<HttpReposnse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
