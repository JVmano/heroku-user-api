import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private createUserUseCase: CreateUserUseCase) {}
  async handle (request: Request, response: Response) {
    const { name, email, password, fathersName, mothersName } = request.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
        fathersName,
        mothersName
      })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected create error'
      })
    }
  }
}
