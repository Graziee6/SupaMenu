import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";
import { GlobalStyles } from "../config/globalStyles";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      email:"",
      password:""
    };
  }

  async login(){
    try {
      const email = this.state.email
      const password = this.state.password

      let result = await fetch("http://10.0.2.2:4000/login/", {
        method:"POST",
        body:JSON.stringify({
          email, password
        }),
        headers:{"Content-Type":"application/json"}
      })

      result = await result.json();
    } catch (error) {
      console.log(error)
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      "Poppins-Regular": require("./../../assets/fonts/Poppins-Regular.otf"),
      "Poppins-Bold": require("./../../assets/fonts/Poppins-Bold.otf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={GlobalStyles.loginPage}>
          <View style={GlobalStyles.loginDiv}>
            <View style={[GlobalStyles.logo, GlobalStyles.flexDiv]}>
              <Text
                style={[
                  GlobalStyles.bold,
                  GlobalStyles.logoBlackPart,
                  GlobalStyles.logoSize,
                ]}
              >
                Supa
              </Text>
              <Text
                style={[
                  GlobalStyles.orangeColor,
                  GlobalStyles.logoSize,
                  GlobalStyles.bold,
                ]}
              >
                Menu
              </Text>
            </View>

            <View style={GlobalStyles.formHeader}>
              <Text style={[GlobalStyles.welcome, GlobalStyles.boldFontFamily]}>
                Welcome ...
              </Text>
              <Text style={[GlobalStyles.subheader, GlobalStyles.grayText, GlobalStyles.appFontFamily]}>
                Sign in to continue
              </Text>
            </View>

            <View>
              <View style={GlobalStyles.formFields}>
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Your Email" onChangeText={(text)=> this.setState({email:text})}
                />
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Password" onChangeText={(text)=>{this.setState({password
                  :text})}}
                />
              </View>

              <View style={[GlobalStyles.btn, GlobalStyles.btnPos]}>
                <TouchableOpacity
                  style={[GlobalStyles.button, GlobalStyles.orangeBackground]}
                  color="#ec9706"
                  onPress={() => {
                    this.login()
                  }}
                >
                  <Text style={[GlobalStyles.btnText, GlobalStyles.boldFontFamily, GlobalStyles.letterSpace]}>Sign in</Text>
                </TouchableOpacity>
              </View>

              <View style={GlobalStyles.options}>
                <View style={GlobalStyles.flexDiv}>
                  <View style={GlobalStyles.line}></View>
                  <Text style={[GlobalStyles.grayText, GlobalStyles.appFontFamily, GlobalStyles.mediumWeight]}>OR</Text>
                  <View style={[GlobalStyles.line, GlobalStyles.line2]}></View>
                </View>
              </View>
            </View>

            <View
              style={[
                GlobalStyles.btn,
              ]}
            >
              <TouchableOpacity
                style={[
                  GlobalStyles.socialBtn,
                  GlobalStyles.button,
                  GlobalStyles.flexDiv,
                ]}
              >
                <View>
                <FontAwesome
                  name="google"
                  size={24}
                  style={GlobalStyles.icon}
                />
                </View>
                <Text>Login with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  GlobalStyles.socialBtn,
                  GlobalStyles.button,
                  GlobalStyles.flexDiv,
                ]}
              >
                <View>
                <FontAwesome
                  name="facebook"
                  size={24}
                  style={GlobalStyles.icon}
                />
                </View>
                <Text>Login with Facebook</Text>
              </TouchableOpacity>
            </View>

            <View style={[GlobalStyles.centerDiv]}>
              <Text style={[GlobalStyles.orangeColor, GlobalStyles.boldFontFamily, { marginTop: 1 }]}>
                Forgot password?
              </Text>
              <View style={[GlobalStyles.flexDiv]}>
                <Text style={[GlobalStyles.grayText, GlobalStyles.appFontFamily]}>Don't have an account?</Text>
                <Text style={[GlobalStyles.orangeColor, GlobalStyles.boldFontFamily, {marginLeft:2}]}>
                  Register
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}
