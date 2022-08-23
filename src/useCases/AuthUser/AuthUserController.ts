import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { AuthUserUseCase } from './AuthUserUseCase'

export class AuthUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private authUserUseCase: AuthUserUseCase) {}

  async handle (request: Request, response: Response) {
    const { email, password } = request.body

    try {
      const user = await this.authUserUseCase.execute({ email, password })
      const verify = await bcrypt.compare(password, user.password)

      if (!verify) return response.status(400).send({ message: 'Invalid password' })

      return response.status(200).send(user)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected auth error'
      })
    }
  }
}
