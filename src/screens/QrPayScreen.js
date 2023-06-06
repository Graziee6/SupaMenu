import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons/";
import * as Font from "expo-font";

import { GlobalStyles } from "../config/globalStyles";
import colors from "../config/colors";

export default class QrPay extends React.Component {
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
        <View
          style={[
            GlobalStyles.orangeBackground,
            GlobalStyles.centerDiv,
            GlobalStyles.fullHeight,
          ]}
        >
          <View
            style={[
              GlobalStyles.centerDiv,
              GlobalStyles.searchBar,
              GlobalStyles.flexDiv,
            ]}
          >
            <FontAwesome
              name="search"
              size={24}
              style={[GlobalStyles.icon, GlobalStyles.orangeColor]}
            />
            <TextInput placeholder="Search for your preferred restaurant" />
          </View>

          <Text
            style={[
              GlobalStyles.bold,
              GlobalStyles.grayText,
              GlobalStyles.mediumFontSize,
              GlobalStyles.text
            ]}
          >
            or
          </Text>

          <Image
            source={require("./../../assets/qrCode.png")}
            style={[{ width: 70, height: 70, marginTop: 72, marginBottom: 36 }]}
          />

          <Text
            style={[
              GlobalStyles.grayText,
              { textTransform: "capitalize" },
              GlobalStyles.bold,
              GlobalStyles.mediumFontSize,
            ]}
          >
            scan, pay & enjoy
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }
}
