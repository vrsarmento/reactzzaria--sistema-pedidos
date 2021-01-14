import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyASgB8RSo95maM5uhLW_5pYKqXa1egNdlg',
  authDomain: 'reactzzaria-18f90.firebaseapp.com',
  projectId: 'reactzzaria-18f90',
  storageBucket: 'reactzzaria-18f90.appspot.com',
  messagingSenderId: '737845885147',
  appId: '1:737845885147:web:a1411b0ce007a7b80fb4fe'
}

firebase.initializeApp(firebaseConfig)

export default firebase
