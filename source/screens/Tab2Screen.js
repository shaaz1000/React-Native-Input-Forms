import React,{useState} from 'react'
import {Text,StyleSheet,StatusBar,SafeAreaView,View,TouchableOpacity} from "react-native"
import InputText from "../commonComponents/InputText"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Tab2Screen = ({navigation,route}) => {
    
    const [Phone,setPhone] = useState("")
    const [Email,setEmail] = useState("")
    const {ConfirmPassword,FirstName,LastName,Password,UserName} = route.params

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    const submitForm = async () => {
        if(FirstName.length != 0 && LastName.length != 0&&  UserName.length != 0&& Password.length!=0&& ConfirmPassword.length!=0 && Phone.length !=0 &&  Email.length != 0){
            if(Password === ConfirmPassword){
                if(Email.match(emailRegex)){
                    if(Phone.length === 10 && Phone.match(phoneRegex)){
                        const Data = {
                            FirstName,LastName,Password,Email,Phone,ConfirmPassword,UserName
                        }
                        try {
                            alert("All details have been filled")
                            await AsyncStorage.setItem("details",JSON.stringify(Data))
                        } catch (error) {
                            alert(error)
                        }
                        
                    }
                    else{
                        alert("Please Enter valid 10 digit phone number")
                    }
                }
                else{
                    alert("Please enter valid email")
                }
            }
            else{
                alert("Password and Confirm Password does not match")
            }
        }
        else{
            alert("Please fill all details")
        }
    }
    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="#2a9d8f"/>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <InputText
                text="Email"
                inputText={(text)=>setEmail(text)}
                secureText={false}
               
            />
            <InputText
                text="Phone"
                inputText={(text)=>setPhone(text)}
                secureText={false}
                keyboardType="number-pad"
                maxLength={10}
            />
            <View style={styles.viewStyle}>
                <TouchableOpacity 
                    onPress={()=>navigation.goBack()}
                    style={[styles.buttonStyle,{backgroundColor:"white",borderWidth:2,borderColor:"#2a9d8f"}]}>
                    <Text style={[styles.buttonText,{color:"black"}]}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={submitForm}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        marginHorizontal:20,
        alignSelf:"center"
    },
    buttonStyle:{
        padding:10,
        backgroundColor:"#2a9d8f",
        borderRadius:20,
        marginTop:20,
        alignSelf:"center",
        width:"40%",
        marginHorizontal:10
    },
    buttonText:{
        color:"white",
        
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
    }
})

export default Tab2Screen