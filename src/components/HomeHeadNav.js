import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {colors} from '../globals/style'

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
        <Fontisto name="nav-icon-list-a" size={24} color="black" style={styles.myicon}/>
        <View style={styles.containerin}>
         <Text style={styles.mytext}>𝔽𝕠𝕠𝕕𝕚𝕖</Text>
         <Ionicons name="md-fast-food-outline" size={24} color="black" style={styles.myicon}/>
        </View>
        <FontAwesome5 name="user-circle" size={24} color="black"  style={styles.myicon}/>
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        backgroundColor:colors.col1,
        elevation:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    containerin:{
        flexDirection:'row',
        alignItems:'center',
    },
    myicon:{
        color:colors.text1,
    },
    mytext:{
        color:colors.text1,
        fontSize:24
    },
})