

import * as firebase from 'firebase'
import 'firebase/firestore'
import { firebaseApp } from './firebase'

const db = firebase.firestore(firebaseApp) 


export const isUserLogged = () => {
    let isLogged =false
    firebase.auth().onAuthStateChanged((user)=> {
        user !== null && (isLogged=true)
    })
    return isLogged
}

//Esto es para traer el usuario logeado
export const getCurrentUser = () => {
    return firebase.auth().currentUser
}