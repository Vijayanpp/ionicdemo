import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbcPyBt5sKgbrctJk_L5wSxg0rJV2p7bQ",
    authDomain: "maojam.firebaseapp.com",
    databaseURL : " https://maojam.firebaseio.com " ,
    projectId: "maojam",
    storageBucket: "maojam.appspot.com",
    messagingSenderId: "1046021973103",
    appId: "1:1046021973103:web:cc0ec6ca5e5f4edf09199a",
    measurementId: "G-WYX5FESPD6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
console.log(auth)

export { auth, db };

