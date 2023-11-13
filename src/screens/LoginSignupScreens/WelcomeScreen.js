import React from 'react'
import { View,Text,StyleSheet, Image, TouchableOpacity } from 'react-native'
import foodie from '../../../assets/foodie.png'
import { colors,hr80 } from '../../globals/style'

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome To  FOodie</Text>
        <View style={styles.logout}>
            <Image source={foodie} style={styles.logo}/>
        </View>
        <View style={hr80}/>
        <Text style={styles.text}>Finnd the best prices around you</Text>
        <View style={hr80}/>
        <View style={styles.btnout}>
    <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}>
        <Text style={styles.btn}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
        <Text style={styles.btn}>Log In</Text>
    </TouchableOpacity>
        </View>
    </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff4242",
        width:'100%',
        alignItems:'center',
        justifyContent:"center"
         },
         title:{
            fontSize:50,
            color:"#f0e16e",
            textAlign:'center',
            fontWeight:'200',
         },
         logout:{
            width:'80%',
            height:'30%',
            alignItems:'center',
            backgroundColor:"green",
         },
         logo:{
            width:"100%",
            height:"100%",
            backgroundColor:"#ff4242",
            resizeMode:"stretch"

         },
         text:{
            fontSize:20,
            width:'80%',
            color:"#f0e16e",
            textAlign:'center'
        },
        btn:{
            fontSize:20,
            color:colors.text1,
            textAlign:'center',
            fontWeight:'700',
            backgroundColor:"#fff",
            padding:10,
            borderRadius:10,
            marginHorizontal:10,
            marginVertical:30,
        },
        btnout:{
            flexDirection:'row'
        }
})