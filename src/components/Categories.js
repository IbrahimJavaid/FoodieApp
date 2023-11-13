import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../globals/style';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.mytext}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.mytext}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.mytext}>Noodles</Text>
        </View>
        <View style={styles.box}>
        <MaterialCommunityIcons name="fruit-cherries" size={24} color="black"  style={styles.myicon}/>
          <Text style={styles.mytext}>Cherries</Text>
        </View>
        <View style={styles.box}>
        <MaterialCommunityIcons name="android" size={24} color="black"  style={styles.myicon}/>
          <Text style={styles.mytext}>Android</Text>
        </View>
        <View style={styles.box}>
        <MaterialCommunityIcons name="apple" size={24} color="black"  style={styles.myicon}/>
          <Text style={styles.mytext}>Apple</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    width:'90%',
    elevation:10,
    borderRadius:10
  },
  head: {
    fontSize: 25,
    fontWeight: '300',
    color: colors.text1,
    margin: 10,
    alignSelf:'center',
    paddingBottom:5,
    borderBottomWidth: 1,
    borderBottomColor: colors.text1,
  },
  box: {
    backgroundColor: colors.col1,
    elevation:20,
    margin:10,
    padding:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:"row"
  },
  myicon: {
    marginRight:10,
    color: colors.text3,
  },
  mytext: {
    color: colors.text3,
  },
})