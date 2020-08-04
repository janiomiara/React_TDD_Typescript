import { HttpPostClient } from '../../protocols/http/http-post-clinet'
import { AuthenticationParams } from '../../../domain/usecases/authentication'
import { HttpStatusCode } from '../../protocols/http/http-reposnse'
import { InvalidCredentialsError } from '../../../domain/erros/InvalidCredentialsError'
import { UnexpectedError } from '../../../domain/erros/unexpected-error'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unathorized:throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
