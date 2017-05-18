import firebase from 'firebase'
import firebaseConf from 'firebaseConf'
try {
  firebase.initializeApp(firebaseConf)
} catch (e) {

}


// Initialize Firebase


export const firebaseRef = firebase.database().ref()
export default firebase
