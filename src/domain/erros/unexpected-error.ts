export class UnexpectedError extends Error {
  constructor () {
    super('Alogo de errado aconteceu. Tente novamente em breve.')
    this.name = 'UnexctedError'
  }
}
