import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Font from "expo-font";

import { GlobalStyles } from "../config/globalStyles.js";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      fullName: "",
      email: "",
      password: "",
    };
  }

  async collectData() {
    try {
      const fullName = this.state.fullName;
      const email = this.state.email;
      const password = this.state.password;

      let result = await fetch("http://10.0.2.2:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });
      result = await result.json();
    } catch (error) {
      console.error("error caught", error);
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
        <View style={[GlobalStyles.loginPage]}>
          <View style={GlobalStyles.loginDiv}>
            <View style={[GlobalStyles.logo, GlobalStyles.flexDiv]}>
              <Text
                style={[
                  GlobalStyles.logoBlackPart,
                  GlobalStyles.logoSize,
                  GlobalStyles.bold,
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

            <View style={GlobalStyles.form}>
              <View style={GlobalStyles.formHeader}>
                <Text
                  style={[GlobalStyles.welcome, GlobalStyles.boldFontFamily]}
                >
                  Welcome ...
                </Text>
                <Text
                  style={[GlobalStyles.subheader, GlobalStyles.appFontFamily]}
                >
                  Please fill in the information
                </Text>
              </View>

              <View style={GlobalStyles.formFields}>
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Full Name"
                  onChangeText={(text) => this.setState({ fullName: text })}
                />
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Your email"
                  onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                  style={GlobalStyles.formField}
                  placeholder="Password"
                  onChangeText={(text) => this.setState({ password: text })}
                />
              </View>

              <View style={[GlobalStyles.btn, GlobalStyles.centerDiv]}>
                <TouchableOpacity
                  style={[GlobalStyles.button, GlobalStyles.orangeBackground]}
                  color="#ec9706"
                  onPress={() => {
                    this.collectData();
                  }}
                >
                  <Text
                    style={[
                      GlobalStyles.btnText,
                      GlobalStyles.boldFontFamily,
                      GlobalStyles.letterSpace,
                      GlobalStyles.whiteText,
                    ]}
                  >
                    Proceed
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={[GlobalStyles.centerDiv, GlobalStyles.mediumTopMargin]}>
                <View style={GlobalStyles.orDiv}>
                  <View style={GlobalStyles.line}></View>
                  <Text>OR</Text>
                  <View style={[GlobalStyles.line, GlobalStyles.line2]}></View>
                </View>
                <Text
                  style={[
                    GlobalStyles.grayText,
                    GlobalStyles.mediumTopMargin,
                    GlobalStyles.appFontFamily,
                    GlobalStyles.mediumWeight,
                  ]}
                >
                  If you have a PMG account
                </Text>
              </View>

              <View style={[GlobalStyles.btn, GlobalStyles.centerDiv]}>
                <TouchableOpacity
                  style={[GlobalStyles.button, GlobalStyles.orangeBackground]}
                  color="#ec9706"
                  onPress={() => {}}
                >
                  <Text
                    style={[
                      GlobalStyles.btnText,
                      GlobalStyles.boldFontFamily,
                      GlobalStyles.letterSpace,
                      GlobalStyles.whiteText,
                    ]}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>

                <View style={GlobalStyles.flexDiv}>
                  <Text
                    style={[
                      GlobalStyles.grayText,
                      GlobalStyles.appFontFamily,
                      GlobalStyles.letterSpace,
                      GlobalStyles.mediumFontSize,
                      GlobalStyles.mediumWeight,
                      GlobalStyles.littlePadding,
                    ]}
                  >
                    Don't have an account?
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.orangeColor,
                      GlobalStyles.boldFontFamily,
                      GlobalStyles.letterSpace,
                      GlobalStyles.smallFontSize,
                      GlobalStyles.littlePadding,
                      { marginLeft: 2 },
                    ]}
                  >
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
