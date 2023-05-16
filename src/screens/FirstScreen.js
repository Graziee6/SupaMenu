import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function FirstScreen() {
  return (
    <View style={styles.mainView}>
      <View style={styles.logo}>
        <Text style={styles.logoBlackPart}>Supa</Text>
        <Text style={styles.logoBrightPart}>Menu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.mainBckg,
    flex: 1,
  },
  logo: {
    fontSize: 50,
    height: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoBlackPart: {
    color: colors.black,
    fontSize: 50,
    fontWeight: 700,
  },
  logoBrightPart: {
    color: colors.bright,
    fontSize: 50,
    fontWeight: 700,
  },
});
