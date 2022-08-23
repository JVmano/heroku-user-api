import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private updateUserUseCase: UpdateUserUseCase) {}

  async handle (request: Request, response: Response) {
    const { name, email, password, fathersName, mothersName } = request.body

    try {
      await this.updateUserUseCase.execute({
        name,
        email,
        password,
        fathersName,
        mothersName
      })

      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected update error'
      })
    }
  }
}
