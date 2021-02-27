import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDtG-hBi8FQIBsiFhZzT1di48bF48PuF9M",
    authDomain: "restaurants-fdd9e.firebaseapp.com",
    projectId: "restaurants-fdd9e",
    storageBucket: "restaurants-fdd9e.appspot.com",
    messagingSenderId: "78479476269",
    appId: "1:78479476269:web:5b047228986b007d9a9aa4"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig);