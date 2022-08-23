import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IUpdateUserRequestDTO } from './UpdateUserDTO'

export class UpdateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IUpdateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (!userExists) {
      throw new Error("User doesn't exist")
    }

    await this.usersRepository.update(data)
  }
}
