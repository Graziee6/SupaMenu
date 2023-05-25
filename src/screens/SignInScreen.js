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
    };
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
                  GlobalStyles.logoBrightPart,
                  GlobalStyles.logoSize,
                  GlobalStyles.bold,
                ]}
              >
                Menu
              </Text>
            </View>

            <View style={GlobalStyles.formHeader}>
              <Text style={[GlobalStyles.welcome, GlobalStyles.all]}>
                Welcome ...
              </Text>
              <Text style={[GlobalStyles.subheader, GlobalStyles.all]}>
                Sign in to continue
              </Text>
            </View>

            <View style={GlobalStyles.form}>
              <View style={GlobalStyles.formFields}>
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Your Email"
                />
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Password"
                />
              </View>

              <View style={[GlobalStyles.btn, GlobalStyles.btnPos]}>
                <TouchableOpacity
                  style={[GlobalStyles.button, GlobalStyles.formBtnColors]}
                  color="#ec9706"
                  onPress={() => {}}
                >
                  <Text style={GlobalStyles.btnText}>Sign in</Text>
                </TouchableOpacity>
              </View>

              <View style={GlobalStyles.options}>
                <View style={GlobalStyles.orDiv}>
                  <View style={GlobalStyles.line}></View>
                  <Text>OR</Text>
                  <View style={[GlobalStyles.line, GlobalStyles.line2]}></View>
                </View>
              </View>
            </View>

            <View
              style={[
                GlobalStyles.btn,
                GlobalStyles.btnPos,
                GlobalStyles.shiftDiv,
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

            <View style={[GlobalStyles.centerDiv, GlobalStyles.shiftDiv]}>
              <Text style={[GlobalStyles.logoBrightPart, { marginTop: 12 }]}>
                Forgot password?
              </Text>
              <View style={[GlobalStyles.flexDiv]}>
                <Text>Don't have an account?</Text>
                <Text style={[GlobalStyles.line2, GlobalStyles.logoBrightPart]}>
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
