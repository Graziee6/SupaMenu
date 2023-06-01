import { StyleSheet } from "react-native";

import colors from "./../config/colors";

const GlobalStyles = StyleSheet.create({
  bold: { fontWeight: 700 },
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
    fontSize: 18,
  },
  button: {
    width: "90%",
    height: 65,
    borderRadius: 5,
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
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  formFields: {
    justifyContent: "center",
    alignItems: "center",
  },
  formHeader: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  grayText: {
    color: colors.secondaryDark,
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
  },
  logoBlackPart: {
    color: colors.black,
  },
  logoBrightPart: {
    color: colors.mainBckg,
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
  mediumFont: {
    fontWeight: 500,
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  orangeIcon: {
    color: colors.mainBckg,
  },
  orDiv: {
    flexDirection: "row",
  },
  searchBar: {
    backgroundColor: colors.bright,
    height: 50,
    width: "85%",
    borderRadius: 50,
    position: "absolute",
    top: 120,
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
  },
  text: {
    marginTop: 24,
  },
  welcome: {
    paddingBottom: 8,
    color: colors.darkBlue,
    fontSize: 18,
  },
});

export { GlobalStyles };
