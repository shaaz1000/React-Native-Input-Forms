import React,{useState} from 'react'
import {Text,TextInput,StyleSheet} from "react-native"


const InputText = ({text,inputText,secureText,keyboardType,maxLength,defaultValue}) => {
    return(
        <>
            <Text style={styles.textStyle}>{text}</Text>
            <TextInput
                defaultValue={defaultValue}
                secureTextEntry={secureText}
                style={styles.textInputStyle}
                placeholder={text}
                label={text}
                onChangeText={inputText}
                keyboardType={keyboardType}
                maxLength={maxLength}
            />
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
})

export default InputText