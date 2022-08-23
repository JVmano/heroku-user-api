import { Request, Response } from 'express'
import { ReadAllUsersUseCase } from './ReadAllUsersUseCase'

export class ReadAllUsersController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readAllUsersUseCase: ReadAllUsersUseCase) {}

  async handle (request: Request, response: Response) {
    try {
      const users = await this.readAllUsersUseCase.execute()
      return response.status(200).send(users)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected read all error'
      })
    }
  }
}
