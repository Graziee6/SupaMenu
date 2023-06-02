import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import SignInScreen from "./src/screens/SignInScreen";
import QrPay from "./src/screens/QrPay";

export default function App() {
  return <QrPay />;
}
