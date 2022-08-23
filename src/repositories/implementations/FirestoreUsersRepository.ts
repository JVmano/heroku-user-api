import bcrypt from 'bcrypt'
import { DocumentData, WriteResult } from '@google-cloud/firestore'
import { db } from '../../providers/implementations/FirestoreProvider'
import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class FirestoreUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<DocumentData> {
    try {
      const userRef = db.collection('users').doc(email)
      const response = await userRef.get()
      return response.data()
    } catch (error) {
      console.error(error, '\n')
    }
  }

  async save (user: User): Promise<WriteResult> {
    try {
      const { name, password, email, fathersName, mothersName } = user
      const encryptedPassword = await bcrypt.hash(password, 8)

      const response = await db.collection('users').doc(email).set({
        name, password: encryptedPassword, email, fathersName, mothersName
      })
      return response
    } catch (error) {
      console.error(error, '\n')
    }
  }

  async update (user: User): Promise<void> {
    try {
      const fetchedUser = db.collection('users').doc(user.email)
      const response = await fetchedUser.get()
      const compareUserData = new User(response.data())

      if (user.email) {
        await fetchedUser.update({
          email: user.email
        })
      }

      if (user.password) {
        if (user.password !== compareUserData.password) {
          const encryptedPassword = await bcrypt.hash(user.password, 8)
          await fetchedUser.update({
            password: encryptedPassword
          })
        }
      }

      if (user.name) {
        await fetchedUser.update({
          name: user.name
        })
      }

      if (user.mothersName) {
        await fetchedUser.update({
          mothersName: user.mothersName
        })
      }

      if (user.fathersName) {
        await fetchedUser.update({
          fathersName: user.fathersName
        })
      }
    } catch (error) {
      console.error(error, '\n')
    }
  }

  async delete (email: string): Promise<WriteResult> {
    try {
      const response = await db.collection('users').doc(email).delete()
      return response
    } catch (error) {
      console.error(error, '\n')
    }
  }

  async readAll (): Promise<DocumentData> {
    try {
      const users = db.collection('users').get()
      const tempDoc = []
      ;(await users).forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() })
      })
      return tempDoc
    } catch (error) {
      console.error(error, '\n')
    }
  }
}
