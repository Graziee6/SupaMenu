import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Font from "expo-font";

import { GlobalStyles } from "../config/globalStyles.js";

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
                  GlobalStyles.logoBlackPart,
                  GlobalStyles.logoSize,
                  GlobalStyles.bold,
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
                  <Text
                    style={[
                      GlobalStyles.btnText,
                      GlobalStyles.boldFontFamily,GlobalStyles.letterSpac
                    ]}
                  >
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
                <Text
                  style={[
                    GlobalStyles.grayText,
                    GlobalStyles.text,
                    GlobalStyles.appFontFamily,
                    GlobalStyles.mediumWeight,
                  ]}
                >
                  If you have a PMG account
                </Text>
              </View>

              <View style={GlobalStyles.btn}>
                <TouchableOpacity
                  style={GlobalStyles.button}
                  color="#ec9706"
                  onPress={() => {}}
                >
                  <Text
                    style={[,
                      GlobalStyles.btnText,
                      GlobalStyles.boldFontFamily,GlobalStyles.letterSpac
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
                      GlobalStyles.mediumSize,
                      GlobalStyles.mediumWeight,
                      GlobalStyles.littlePadding,
                    ]}
                  >
                    Don't have an account?
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.logoBrightPart,
                      GlobalStyles.boldFontFamily,
                      GlobalStyles.letterSpace,
                      GlobalStyles.mediumSize,
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
