import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as Font from "expo-font";

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
        <View style={[GlobalStyles.loginPage]}>
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
              <Text style={[GlobalStyles.welcome, GlobalStyles.bold]}>
                Welcome ...
              </Text>
              <Text style={[GlobalStyles.subheader, GlobalStyles.bold]}>
                Please fill in the information
              </Text>
            </View>

            <View style={GlobalStyles.form}>
              <View style={GlobalStyles.formFields}>
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Full Name"
                />
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Phone Number"
                />
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Your email"
                />
              </View>

              <View style={GlobalStyles.btn}>
                <TouchableOpacity
                  style={GlobalStyles.button}
                  color="#ec9706"
                  onPress={() => {}}
                >
                  <Text style={[GlobalStyles.bold, GlobalStyles.btnText]}>
                    Proceed
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={GlobalStyles.options}>
                <View style={GlobalStyles.orDiv}>
                  <View style={GlobalStyles.line}></View>
                  <Text>OR</Text>
                  <View style={[GlobalStyles.line, GlobalStyles.line2]}></View>
                </View>
                <Text style={[GlobalStyles.text, GlobalStyles.bold]}>
                  If you have a PMG account
                </Text>
              </View>

              <View style={GlobalStyles.btn}>
                <TouchableOpacity
                  style={GlobalStyles.button}
                  color="#ec9706"
                  onPress={() => {}}
                >
                  <Text style={[GlobalStyles.bold, GlobalStyles.btnText]}>
                    Sign in
                  </Text>
                </TouchableOpacity>

                <View style={[GlobalStyles.flexDiv, GlobalStyles.centerDiv]}>
                  <Text>Don't have an account?</Text>
                  <Text style={[GlobalStyles.line2, GlobalStyles.logoBrightPart]}>
                    Register
                  </Text>
                </View>
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
