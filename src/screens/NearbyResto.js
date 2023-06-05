import { TextInput, TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons/";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { GlobalStyles } from "../config/globalStyles";

export default function NearbyResto() {
  return (
    <View
      style={[
        GlobalStyles.whiteDiv,
        GlobalStyles.fullHeight,
        GlobalStyles.safeView,
        GlobalStyles.flexEnd,
      ]}
    >
      <View
        style={[
          GlobalStyles.flexDiv,
          GlobalStyles.backDivSpacing,
          GlobalStyles.backDivBorder,
        ]}
      >
        <View
          style={[
            GlobalStyles.backDiv,
            GlobalStyles.centerDiv,
            GlobalStyles.lightGrayBackground,
            GlobalStyles.icon,
            { marginLeft: 30 },
          ]}
        >
          <FontAwesome
            name="angle-left"
            size={36}
            style={[GlobalStyles.orangeColor]}
          />
        </View>
        <View style={GlobalStyles.centerDiv}>
          <TextInput placeholder="Search..." />
        </View>
      </View>

      <Text style={[GlobalStyles.orangeColor, GlobalStyles.subheaderStyle]}>
        Nearby Restaurant
      </Text>

      <View>
        <View style={[GlobalStyles.centerDiv, GlobalStyles.mediumDiv]}>
          <TouchableOpacity
            style={[
              GlobalStyles.lighterGrayBackground,
              GlobalStyles.nearbyRestoDiv,
              GlobalStyles.mediumDiv,
              GlobalStyles.nearbyRestoBradius,
              GlobalStyles.flexDiv,
              GlobalStyles.centerY,
            ]}
          >
            <View>
              <Image
                source={require("../../assets/pizzer.jpeg")}
                style={[GlobalStyles.nearbyRestoBradius, GlobalStyles.image]}
              />
            </View>
            <View>
              <Text
                style={[GlobalStyles.heavyWeight, GlobalStyles.textPadding]}
              >
                Choose Kigali
              </Text>
              <Text style={GlobalStyles.textPadding}>
                World, African, Pizzeria, Coffee
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[GlobalStyles.centerDiv, GlobalStyles.mediumDiv]}>
          <TouchableOpacity
            style={[
              GlobalStyles.lighterGrayBackground,
              GlobalStyles.nearbyRestoDiv,
              GlobalStyles.mediumDiv,
              GlobalStyles.nearbyRestoBradius,
              GlobalStyles.flexDiv,
              GlobalStyles.centerY,
            ]}
          >
            <View>
              <Image
                source={require("../../assets/pizzer.jpeg")}
                style={[GlobalStyles.nearbyRestoBradius, GlobalStyles.image]}
              />
            </View>
            <View>
              <Text
                style={[GlobalStyles.heavyWeight, GlobalStyles.textPadding]}
              >
                Choose Kigali
              </Text>
              <Text style={GlobalStyles.textPadding}>
                World, African, Pizzeria, Coffee
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[GlobalStyles.centerDiv, GlobalStyles.mediumDiv]}>
          <TouchableOpacity
            style={[
              GlobalStyles.lighterGrayBackground,
              GlobalStyles.nearbyRestoDiv,
              GlobalStyles.mediumDiv,
              GlobalStyles.nearbyRestoBradius,
              GlobalStyles.flexDiv,
              GlobalStyles.centerY,
            ]}
          >
            <View>
              <Image
                source={require("../../assets/pizzer.jpeg")}
                style={[GlobalStyles.nearbyRestoBradius, GlobalStyles.image]}
              />
            </View>
            <View>
              <Text
                style={[GlobalStyles.heavyWeight, GlobalStyles.textPadding]}
              >
                Choose Kigali
              </Text>
              <Text style={GlobalStyles.textPadding}>
                World, African, Pizzeria, Coffee
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[GlobalStyles.centerDiv, GlobalStyles.mediumDiv]}>
        <TouchableOpacity
          style={[
            GlobalStyles.lighterGrayBackground,
            GlobalStyles.nearbyRestoDiv,
            GlobalStyles.mediumDiv,
            GlobalStyles.nearbyRestoBradius,
            GlobalStyles.flexDiv,
            GlobalStyles.centerY,
          ]}
        >
          <View>
            <Image
              source={require("../../assets/pizzer.jpeg")}
              style={[GlobalStyles.nearbyRestoBradius, GlobalStyles.image]}
            />
          </View>
          <View>
            <Text style={[GlobalStyles.heavyWeight, GlobalStyles.textPadding]}>
              Choose Kigali
            </Text>
            <Text style={GlobalStyles.textPadding}>
              World, African, Pizzeria, Coffee
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[{ height: "20%" }, GlobalStyles.flexEnd]}>
        <View
          style={[
            GlobalStyles.centerDiv,
            GlobalStyles.flexDiv,
            GlobalStyles.iconDiv,
            GlobalStyles.whiteDiv,
          ]}
        >
          <FontAwesome name="home" size={24} />
          <FontAwesome name="bell-o" size={24} />
          <MaterialCommunityIcons
            name="line-scan"
            size={24}
            style={GlobalStyles.orangeColor}
          />
          <FontAwesome name="history" size={24} />
          <FontAwesome name="shopping-cart" size={24} />
        </View>
      </View>
    </View>
  );
}
