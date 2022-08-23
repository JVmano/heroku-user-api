import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'

export class ReadAllUsersUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private usersRepository: FirestoreUsersRepository) {}

  async execute () {
    const users = await this.usersRepository.readAll()
    return users
  }
}
