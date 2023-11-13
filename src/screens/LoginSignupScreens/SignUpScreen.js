import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors, titles, btn1, hr80 ,hr81} from "../../globals/style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const LoginScreen = (props) => {
  const [namefocus,setNamefocus]=useState(false)
  const [emailfocus, setEmailfocus] = useState(false);
  const [phonefocus,setPhonefocus]=useState(false)
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>SignUp</Text>
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={namefocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="FullName"
          onFocus={() => {
            setNamefocus(true)
            setEmailfocus(false);
            setPasswordfocus(false);
            setShowpassword(true);
            setcPasswordfocus(false);
            setShowcpassword(true);
            setPhonefocus(false)
          }}
        />
      </View>

      {/* Email Down */}

      <View style={styles.inputout}>
        <MaterialIcons
          name="alternate-email"
          size={24}
          color={emailfocus === true ? colors.text1 : colors.text2}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setShowpassword(true);
            setcPasswordfocus(false);
            setShowcpassword(true);
            setNamefocus(false);
            setPhonefocus(false)
          }}
        />
      </View>

      {/* Phone Number down */}

      <View style={styles.inputout}>
        <Feather
          name="smartphone"
          size={24}
          color={phonefocus=== true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onFocus={() => {
            setPhonefocus(true)
            setEmailfocus(false);
            setPasswordfocus(false);
            setShowpassword(true);
            setcPasswordfocus(false);
            setShowcpassword(true);
          }}
        />
      </View>
      {/* Password end */}

      <View style={styles.inputout}>
        <MaterialIcons
          name="lock-outline"
          size={24}
          color={passwordfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(true);
            setNamefocus(false);
            setPhonefocus(false)
            setcPasswordfocus(false)
          }}
          secureTextEntry={showpassword}
        />
        <Octicons
          name={showpassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowpassword(!showpassword)}
        />
      </View>

      {/* Password end */}

      <View style={styles.inputout}>
        <MaterialIcons
          name="lock-outline"
          size={24}
          color={cpasswordfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onFocus={() => {
            setEmailfocus(false);
            setcPasswordfocus(true);
            setPasswordfocus(false);
            setNamefocus(false);
            setPhonefocus(false)
          }}
          secureTextEntry={showcpassword}
        />
        <Octicons
          name={showcpassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowcpassword(!showcpassword)}
        />
      </View>

      {/* TouchableOpacity fields ends */}


      <Text style={styles.address}>Please enter your address</Text>
          <View style={styles.inputout}>
          <FontAwesome5 name="address-card" size={24} color="black" />
            <TextInput style={styles.input} placeholder="Enter your Address"/>
          </View>

      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign Up With</Text>

      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <FontAwesome name="facebook-f" size={24} color="#426782" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr81}></View>
      <Text>
        Already have an account?
        <Text style={{ color: colors.text1 }} onPress={()=>props.navigation.navigate("Login")}> LogIn</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 60,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    elevation: 20,
    // backgroundColor:"yellow"
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
    
  },
  frgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
    
  },
  or: {
    color: colors.text1,
    marginVertical: 5,
    fontWeight: "bold",
    
  },
  gftxt: {
    color: colors.text2,
    marginVertical: 5,
    fontSize: 25,
    
  },
  gf: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  gficon: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    marginHorizontal: 10,
  },
  address:{
    fontSize:18,
    color:colors.text2,
    marginTop:20,
    textAlign:'center'
  }
});
