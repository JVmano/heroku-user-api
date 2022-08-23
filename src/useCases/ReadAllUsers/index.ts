import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'
import { ReadAllUsersController } from './ReadAllUsersController'
import { ReadAllUsersUseCase } from './ReadAllUsersUseCase'

const firestoreUsersRepository = new FirestoreUsersRepository()

const readAllUsersUseCase = new ReadAllUsersUseCase(firestoreUsersRepository)

const readAllUsersControler = new ReadAllUsersController(readAllUsersUseCase)

export { readAllUsersUseCase, readAllUsersControler }
