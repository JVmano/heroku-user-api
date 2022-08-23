import admin from 'firebase-admin'
const credentials = require('../../assets/key.json')

admin.initializeApp({
  credential: admin.credential.cert(credentials)
})

const db = admin.firestore()

export { db }
