import { Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../config/globalStyles";

export default function FirstScreen() {
  return (
    <View style={GlobalStyles.mainView}>
      <View style={GlobalStyles.logo}>
        <Text style={GlobalStyles.logoBlackPart}>Supa</Text>
        <Text style={GlobalStyles.logoBrightPart}>Menu</Text>
      </View>
    </View>
  );
}
