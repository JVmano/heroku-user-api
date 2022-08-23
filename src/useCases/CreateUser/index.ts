import { FirestoreUsersRepository } from '../../repositories/implementations/FirestoreUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const firestoreUsersRepository = new FirestoreUsersRepository()

const createUserUseCase = new CreateUserUseCase(firestoreUsersRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
