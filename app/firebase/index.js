import firebase from 'firebase'

try {
  firebase.initializeApp({
    apiKey:            process.env.API_KEY,
    authDomain:        process.env.AUTH_DOMAIN,
    databaseURL:       process.env.DATABASE_URL,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    projectId:         process.env.PROJECT_ID,
    storageBucket:     process.env.STORAGE_BUCKET
  })
} catch (e) {

}


// Initialize Firebase

export const twitterProvider = new firebase.auth.TwitterAuthProvider()
export const firebaseRef = firebase.database().ref()
export default firebase
