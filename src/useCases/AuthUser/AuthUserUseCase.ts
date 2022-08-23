import { User } from '../../entities/User'
import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'
import { IAuthUserRequestDTO } from './IAuthUserDTO'

export class AuthUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private usersRepository: FirestoreUsersRepository) {}

  async execute (data: IAuthUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (!userExists) {
      throw new Error("User doesn't exist")
    }

    const user = new User(userExists)
    return user
  }
}
