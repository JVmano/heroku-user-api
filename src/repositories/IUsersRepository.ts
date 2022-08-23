import { DocumentData, WriteResult } from '@google-cloud/firestore'
import { User } from '../entities/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<DocumentData>
  save(user: User): Promise<WriteResult>
  delete(email: string): Promise<WriteResult>
  update(user: User): Promise<void>
  readAll(): Promise<DocumentData>
}
