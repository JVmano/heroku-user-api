import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private deleteUserUseCase: DeleteUserUseCase) {}
  async handle (request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    try {
      await this.deleteUserUseCase.execute({ email })

      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected delete error'
      })
    }
  }
}
