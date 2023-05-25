import { StyleSheet } from "react-native";

import colors from "./../config/colors";

const GlobalStyles = StyleSheet.create({
  bold: { fontFamily: "Poppins-Bold" },
  formBtnColors: {
    color: colors.bright,
    backgroundColor: colors.mainBckg,
  },
  btnPos: {
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
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
    justifyContent: "center",
    alignItems: "center",
  },
  centerDiv: { justifyContent: "center", alignItems: "center" },
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
    fontFamily: "Poppins-Regular",
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
  fullWidth: {
    width: "100%",
  },
  icon: {
    marginRight: 24,
  },
  loginPage: {
    backgroundColor: colors.mainBckg,
    flex: 1,
    justifyContent: "flex-end",
  },
  loginDiv: {
    height: "85%",
    backgroundColor: colors.bright,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 16,
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
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  orDiv: {
    flexDirection: "row",
  },
  shiftDiv: {
    bottom: 24,
  },
  socialBtn: {
    color: colors.secondaryDark,
    borderColor: colors.secondaryDark,
    borderWidth: 2,
    margin: 10,
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

export { GlobalStyles };
