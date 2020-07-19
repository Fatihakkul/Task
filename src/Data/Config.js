import firebase from 'firebase'

import 'firebase/firebase-database'

var firebaseConfig = {
    apiKey: "AIzaSyC1tJ6LoS4aDU8-j35lxumclDedbzKZR_8",
    authDomain: "task-2e4bd.firebaseapp.com",
    databaseURL: "https://task-2e4bd.firebaseio.com",
    projectId: "task-2e4bd",
    storageBucket: "task-2e4bd.appspot.com",
    messagingSenderId: "138410948306",
    appId: "1:138410948306:web:ec7f1047a3932a145fdf0b"
  };
 
  firebase.initializeApp(firebaseConfig);

  export default firebase