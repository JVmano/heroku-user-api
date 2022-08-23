import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './ICreateUserDTO'

export class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email)
    if (userExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)

    await this.usersRepository.save(user)
  }
}
