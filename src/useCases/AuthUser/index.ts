import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'
import { AuthUserController } from './AuthUserController'
import { AuthUserUseCase } from './AuthUserUseCase'

const firestoreUsersRepository = new FirestoreUsersRepository()

const authUserUseCase = new AuthUserUseCase(firestoreUsersRepository)

const authUserController = new AuthUserController(authUserUseCase)

export { authUserUseCase, authUserController }
