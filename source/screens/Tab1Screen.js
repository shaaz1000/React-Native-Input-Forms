import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,StatusBar,SafeAreaView,ScrollView, TouchableOpacity} from "react-native"
import InputText from "../commonComponents/InputText"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Tab1Screen = ({navigation}) => {
    const [FirstName,setFirstName] = useState("")
    const [LastName,setLastName] = useState("")
    const [UserName,setUserName] = useState("")
    const [Password,setPassword] = useState("")
    const [ConfirmPassword,setConfirmPassword] = useState("")
    const [data,setData] = useState("")

    const submitForm = () => {
        if(FirstName.length != 0 &&  LastName.length != 0 &&  UserName.length != 0 &&  Password.length!=0 && ConfirmPassword.length!=0){
            navigation.navigate("Form2",{FirstName,LastName,Password,ConfirmPassword,UserName})
        }
        else{
            alert("Please fill all details")
        }
    }

    const checkData = async () => {
        try {
            const data = await AsyncStorage.getItem("details")
            
            if(data != null){
                setData(JSON.parse(data))
            }
        } catch (error) {
            alert(error)
        }   
    }
    useEffect(()=>{
        checkData()
    },[])
    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="#2a9d8f"/>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InputText
                    text="First Name"
                    inputText={(text)=>setFirstName(text)}
                    secureText={false}
                    
                />
                <InputText
                    text="Last Name"
                    inputText={(text)=>setLastName(text)}
                    secureText={false}
                />
                <InputText
                    text="User Name"
                    inputText={(text)=>setUserName(text)}
                    secureText={false}
                />
                <InputText
                    text="Password "
                    inputText={(text)=>setPassword(text)}
                    secureText={true}
                />
                <InputText
                    text="Confirm Password "
                    inputText={(text)=>setConfirmPassword(text)}
                    secureText={true}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={submitForm}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:17,
        fontWeight:"bold",
        margin:5,
        marginHorizontal:15,
        padding:5,
        color:"#f4a261"
    },
    textInputStyle:{
        marginHorizontal:10,
        backgroundColor:"#b7b7a4",
        borderRadius:20,
        padding:10,
        width:"90%",
        padding:10,
        alignSelf:"center"
    },
    buttonStyle:{
        padding:10,
        backgroundColor:"#2a9d8f",
        borderRadius:20,
        marginTop:20,
        alignSelf:"center",
        width:"70%"
    },
    buttonText:{
        color:"white",
        padding:10,
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
    }
})

export default Tab1Screen