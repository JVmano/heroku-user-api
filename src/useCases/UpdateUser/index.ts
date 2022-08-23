import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'
import { UpdateUserController } from './UpdateUserController'
import { UpdateUserUseCase } from './UpdateUserUseCase'

const firestoreUsersRepository = new FirestoreUsersRepository()

const updateUserUseCase = new UpdateUserUseCase(firestoreUsersRepository)

const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserUseCase, updateUserController }
