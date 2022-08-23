import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IDeleteUserRequestDTO } from './DeleteUserDTO'

export class DeleteUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IDeleteUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (!userExists) {
      throw new Error("User doesn't exist")
    }

    await this.usersRepository.delete(data.email)
  }
}
