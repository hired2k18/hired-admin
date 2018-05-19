import Firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

const fireApp = Firebase.initializeApp(firebaseConfig)

export default fireApp
