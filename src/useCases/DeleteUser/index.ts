import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const firestoreUsersRepository = new FirestoreUsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(firestoreUsersRepository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserUseCase, deleteUserController }
