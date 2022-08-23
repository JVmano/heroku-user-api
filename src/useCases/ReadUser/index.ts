import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'
import { ReadUserController } from './ReadUserController'
import { ReadUserUseCase } from './ReadUserUseCase'

const firestoreUsersRepository = new FirestoreUsersRepository()

const readUserUseCase = new ReadUserUseCase(firestoreUsersRepository)

const readUserController = new ReadUserController(readUserUseCase)

export { readUserUseCase, readUserController }
