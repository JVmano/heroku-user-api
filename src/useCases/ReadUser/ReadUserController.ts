import { Request, Response } from 'express'
import { ReadUserUseCase } from './ReadUserUseCase'

export class ReadUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readUserUseCase: ReadUserUseCase) {}
  async handle (request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    try {
      const userData = await this.readUserUseCase.execute({ email })

      return response.status(200).send(userData)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected read error'
      })
    }
  }
}
