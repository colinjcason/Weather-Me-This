import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJvzemnhgqnv0fxoy9LFmdNberjhOhAAI",
    authDomain: "react-weather-640ef.firebaseapp.com",
    projectId: "react-weather-640ef",
    storageBucket: "react-weather-640ef.appspot.com",
    messagingSenderId: "488982884034",
    appId: "1:488982884034:web:658fbd0a028f14ab70555b",
    measurementId: "G-6MFGV2DXDR"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    return result;
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  export const signOut = () => auth.signOut();
  
  export default firebase;