import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAl5MEgeN3CX-lPECYFqp8CvbmGMWx5xqk",
    authDomain: "clone-b34f9.firebaseapp.com",
    projectId: "clone-b34f9",
    storageBucket: "clone-b34f9.appspot.com",
    messagingSenderId: "377332903839",
    appId: "1:377332903839:web:1e9837d1eb302a0cc617aa",
    measurementId: "G-DKGXN8B7KB"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};