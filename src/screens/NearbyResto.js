import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../config/globalStyles";
import { FontAwesome } from "@expo/vector-icons/";

export default function NearbyResto() {
  return (
    <View
      style={[
        GlobalStyles.whiteDiv,
        GlobalStyles.centerDiv,
        GlobalStyles.fullHeight,
      ]}
    > 

    <View style={GlobalStyles.flexDiv}>
      <View style={[GlobalStyles.backDiv, GlobalStyles.grayBackground]}>
        <FontAwesome name="angle-left" size={24}/>
      </View>
    </View>
      <View style={[GlobalStyles.flexDiv, GlobalStyles.iconDiv, GlobalStyles.flexEnd,]}>
        <FontAwesome name="home" size={24} />
        <FontAwesome name="bell-o" size={24} />
        <FontAwesome name="home" size={24} />
        <FontAwesome name="home" size={24} />
        <FontAwesome name="shopping-cart" size={24} />
      </View>
    </View>
  );
}
