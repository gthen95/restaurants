import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar, Button, Icon, Input } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import { map, size} from 'lodash'

export default function AddRestaurantForm({toastRef, setLoading, navigation }) {
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorName, setErrorName] = useState(null)
    const [errorDescription, setErrorDescription] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorAddress, setErrorAddress] = useState(null)
    const [errorPhone, setErrorPhone] = useState(null)
    const [imagesSelected, setImagesSelected] = useState([])


    const addRestaurant =() =>{
        console.log(formData)
        console.log("Fuck Yeah!!")
    }

    return (
        <View style={styles.viewContainer}>
            <FormAdd
                formData={formData}
                setFormData={setFormData}
                errorName={errorName}
                errorDescription={errorDescription}
                errorEmail={errorEmail}
                errorAddress={errorAddress}
                errorPhone={errorPhone}
            />
            <UploadImage
                toastRef={toastRef}
                imagesSelected={imagesSelected}
                setImagesSelected={setImagesSelected}
            />
            <Button
                title="Crear Restaurante"
                onPress={addRestaurant}
                buttonStyle={styles.btnAddRestaurant}
            />
        </View>
    )
}

function UploadImage({toastRef, imagesSelected, setImagesSelected }){
    return(
        <ScrollView
            horizontal
            style={styles.viewImages}
        >
           { 
                size(imagesSelected) < 10 && (
                    <Icon
                    type="material-community"
                    name="camera"
                    color="#7a7a7a"
                    containerStyle={styles.containerIcon}
                    />
                )
                
            }
{/* Video 66 */}
            {
                map(imagesSelected, (imageRestaurant, index) => (
                    <Avatar
                        key={index}
                        style={styles.miniatureStyle}
                        source={{uri: imageRestaurant }}
                    />
                ))
            }
        </ScrollView>
    )
}

function FormAdd({ formData,setFormData,errorName,errorDescription,errorEmail,errorAddress,errorPhone }) {
    const [country, setCountry] = useState("DO")
    const [callingCode, setCallingCode] = useState("1")
    const [phone, setPhone] = useState("")

    const onChange =(e, type) =>{
        setFormData({...formData, [type] : e.nativeEvent.text })
    }

    return (
        <View style={styles.viewForm}>
            <Input 
                placeholder="Nombre del restaurante..."
                defaultValue={formData.name}
                onChange={(e) => onChange(e,"name")}
                errorMessage={errorName}
            />
            <Input 
                placeholder="Dirección del restaurante..."
                defaultValue={formData.address}
                onChange={(e) => onChange(e,"address")}
                errorMessage={errorAddress}
            />
            <Input 
                keyboardType="email-address"
                placeholder="Email del restaurante..."
                defaultValue={formData.email}
                onChange={(e) => onChange(e,"email")}
                errorMessage={errorEmail}
            />
            <View style={styles.phoneView}>
                <CountryPicker
                    withFlag
                    withCallingCode
                    withFilter
                    withCallingCodeButton
                    containerStyle={styles.countryPicker}
                    countryCode={country}
                    onSelect={(country) => {
                        setFormData({...formData, "country": country.cca2, "callingCode": country.callingCode[0]})
                        setCountry(country.cca2)
                        setCallingCode(country.callingCode[0])
                    }}
                />
                <Input
                    placeholder="WhatsApp del restaurante..."
                    keyboardType="phone-pad"
                    containerStyle={styles.inputPhone}
                    defaultValue={formData.phone}
                    onChange={(e) => onChange(e,"phone")}
                    errorMessage={errorPhone}
                />
                
                
                

            </View>

                <Input
                    placeholder="Descripción del restaurante..."
                    multiline
                    containerStyle={styles.textArea}
                    defaultValue={formData.description}
                    onChange={(e) => onChange(e,"description")}
                    errorMessage={errorDescription}
                />

        </View>
    )
}

const defaultFormValues =() => {
    return{
        name: "",
        description: "",
        email:"",
        phone:"",
        address:"",
        country: "DO",
        callingCode:"1"
    }
}

const styles = StyleSheet.create({
    viewContainer:{
        height:"100%"
    },
    viewForm:{
        marginHorizontal: 10
    },
    textArea:{
        height:100,
        width: "100%"
    },
    phoneView:{
        width: "80%",
        flexDirection: "row"
    },
    inputPhone:{
        width: "80%"
    },
    btnAddRestaurant:{
        margin:20,
        backgroundColor:"#442484"
    },
    viewImages:{
        flexDirection:"row",
        marginHorizontal: 20,
        marginTop:30

    },
    containerIcon:{
        alignItems: "center",
        justifyContent: "center",
        marginRight:10,
        height:70,
        width:70,
        backgroundColor:"#e3e3e3"
    },
    miniatureStyle:{
        width: 70,
        height:70,
        marginRight:10
    }
})