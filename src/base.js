import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'
import 'firebase/auth'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCYK3F58tNMUXcWuOn9md5rx6SsLBO9duc",
    authDomain: "note-herder-3fe33.firebaseapp.com",
    databaseURL: "https://note-herder-3fe33.firebaseio.com",
    projectId: "note-herder-3fe33",
    storageBucket: "note-herder-3fe33.appspot.com",
    messagingSenderId: "535020792140"
  }
  const app = firebase.initializeApp(config)

  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const auth = firebase.auth()
   
  export default Rebase.createClass(app.database())
