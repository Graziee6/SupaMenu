import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as Font from "expo-font";

import colors from "../config/colors";

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
      "Poppins-Bold": require("./../../assets/fonts/Poppins-Bold.otf")
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={[styles.loginPage]}>
          <View style={styles.loginDiv}>
            <View style={[styles.logo, styles.flexDiv]}>
              <Text style={[styles.logoBlackPart, styles.logoSize, styles.bold]}>Supa</Text>
              <Text style={[styles.logoBrightPart, styles.logoSize, styles.bold]}>Menu</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.formHeader}>
                <Text style={[styles.welcome, styles.all]}>Welcome ...</Text>
                <Text style={[styles.subheader, styles.all]}>
                  Please fill in the information
                </Text>
              </View>

              <View style={styles.formFields}>
                <TextInput style={styles.formField} placeholder="Full Name" />
                <TextInput
                  style={styles.formField}
                  placeholder="Phone Number"
                />
                <TextInput style={styles.formField} placeholder="Your email" />
              </View>

              <View style={styles.btn}>
                <TouchableOpacity
                  style={styles.button}
                  color="#ec9706"
                  onPress={() => {}}
                >
                  <Text style={[styles.all, styles.btnText]}>Proceed</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.options}>
                <View style={styles.orDiv}>
                  <View style={styles.line}></View>
                  <Text>OR</Text>
                  <View style={[styles.line, styles.line2]}></View>
                </View>
                <Text style={[styles.text, styles.all]}>
                  If you have a PMG account
                </Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity
                  style={styles.button}
                  color="#ec9706"
                  onPress={() => {}}
                >
                  <Text style={[styles.all, styles.btnText]}>Sign in</Text>
                </TouchableOpacity>

                <View style={styles.flexDiv}>
                  <Text style={styles.all}>Don't have an account?</Text>
                  <Text style={[styles.line2, styles.logoBrightPart, styles.all]}>Register</Text>
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

const styles = StyleSheet.create({
  bold: { fontFamily: "Poppins-Bold" },
  btn: {
    marginTop: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: colors.bright,
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: 18,
  },
  button: {
    width: "90%",
    height: 65,
    backgroundColor: colors.mainBckg,
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
    justifyContent: "center",
    alignItems: "center",
  },
  flexDiv: { flexDirection: "row" },
  form: {
    flex: 1,
  },
  formField: {
    textTransform: "capitalize",
    borderColor: colors.secondaryDark,
    height: 55,
    width: "90%",
    borderWidth: 2,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5,
    fontFamily:"Poppins-Regular"
  },
  formFields: {
    justifyContent: "center",
    alignItems: "center",
  },
  formHeader: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    fontFamily: "Poppins-Regular",
  },
  line: {
    height: 2,
    width: 120,
    backgroundColor: colors.secondaryDark,
    marginTop: 10,
    marginRight: 12,
  },
  line2: {
    marginLeft: 12,
  },
  loginDiv: {
    flex: 1,
    backgroundColor: colors.bright,
    top: 100,
    borderRadius: 50,
    paddingTop: 16,
  },
  loginPage: {
    backgroundColor: colors.mainBckg,
    flex: 1,
  },
  logo: {
    justifyContent: "center",
    paddingBottom: 18,
    fontFamily: "Poppins-Regular",
  },
  logoBlackPart: {
    color: colors.black,
    fontWeight: 700,
    fontFamily: "Poppins-Regular",
  },
  logoBrightPart: {
    color: colors.mainBckg,
    fontWeight: 700,
  },
  logoSize: { fontSize: 50 },
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  orDiv: {
    flexDirection: "row",
  },
  subheader: {
    paddingBottom: 12,
    color: colors.secondaryDark,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },
  text: {
    marginTop: 24,
  },
  welcome: {
    paddingBottom: 8,
    color: colors.darkBlue,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },
});
