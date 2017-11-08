import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyC83yzg37mpSbyTE80YW6z852VHAsP-aqM',
  authDomain: 'cropchat-18359.firebaseapp.com',
  databaseURL: 'https://cropchat-18359.firebaseio.com',
  projectId: 'cropchat-18359',
  storageBucket: 'cropchat-18359.appspot.com',
  messagingSenderId: '324928321793'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
