import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Register from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import QrPay from "./src/screens/QrPayScreen";
import NearbyResto from "./src/screens/NearbyResto";

export default function App() {
  return <NearbyResto />;
}
