import { DocumentData } from '@google-cloud/firestore'

export class User {
  public name: string
  public email: string
  public password: string
  public mothersName: string
  public fathersName: string

  constructor (props: User | DocumentData) {
    Object.assign(this, props)
  }
}
