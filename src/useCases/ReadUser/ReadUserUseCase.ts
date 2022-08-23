import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IReadUserRequestDTO } from './ReadUserDTO'

export class ReadUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IReadUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (!userExists) {
      throw new Error("User doesn't exist")
    }
    return userExists
  }
}
