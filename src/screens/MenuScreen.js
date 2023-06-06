import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../config/globalStyles";

export default function MenuScreen() {
  return (
    <View style={[GlobalStyles.blackDiv, GlobalStyles.centerDiv, { flex: 1 }]}>
      <View style={{ justifyContent: "flex-start" }}>
        <Text
          style={[
            GlobalStyles.logoBrightPart,
            GlobalStyles.btnText,
            GlobalStyles.bold,
          ]}
        >
          Choose Kigali
        </Text>
        <View style={[GlobalStyles.centerDiv,GlobalStyles.flexDiv]}>
          <View></View>
          <View
            style={[GlobalStyles.orangeBackground, { width: 1, height: 60 }]}
          ></View>
          <View></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
