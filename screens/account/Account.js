import React, {useState,useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { getCurrentUser } from '../../utils/actions'
import Loading from '../../components/Loading'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

//*****Descomentando esto es otra manera de validar el Loggeo*****
//import {firebaseApp} from '../../utils/firebase'
//import firebase from 'firebase'


export default function Account() {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        const user = getCurrentUser()
            user ? (setLogin(true)) : setLogin(false)
    }, [])

   if(login == null){
        return <Loading isVisible={true} text="Cargando..."/>
    }
    return login ? <UserLogged/> : <UserGuest/>

     //*****Descomentando esto es otra manera de validar el Loggeo*****
    //useEffect(() => {
    //    firebase.auth().onAuthStateChanged((user)=> {
    //        user !== null ? (setLogin(true)) : setLogin(false)
    //    })
   // }, [])

}

const styles = StyleSheet.create({})

 //*****Descomentando esto es otra manera de validar el Loggeo*****
//export default  Account
