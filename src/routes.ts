import { Router } from 'express'
import { authUserController } from './useCases/AuthUser'
import { createUserController } from './useCases/CreateUser'
import { deleteUserController } from './useCases/DeleteUser'
import { readAllUsersControler } from './useCases/ReadAllUsers'
import { readUserController } from './useCases/ReadUser'
import { updateUserController } from './useCases/UpdateUser'

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

router.get('/users', (request, response) => {
  return readUserController.handle(request, response)
})

router.patch('/users', (request, response) => {
  return updateUserController.handle(request, response)
})

router.delete('/users', (request, response) => {
  return deleteUserController.handle(request, response)
})

router.post('/users/auth', (request, response) => {
  return authUserController.handle(request, response)
})

router.get('/users/all', (request, response) => {
  return readAllUsersControler.handle(request, response)
})

export { router }
