import { Platform, StatusBar, StyleSheet } from "react-native";

import colors from "./colors";

export const GlobalStyles = StyleSheet.create({
  appFontFamily: { fontFamily: "Poppins-Regular" },
  backDiv: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  backDivSpacing: { paddingBottom: 24 },
  backDivBorder: { borderBottomColor: colors.lightDark, borderBottomWidth: 1 },
  boldFontFamily: { fontFamily: "Poppins-Bold" },
  btn: {
    marginTop: 16,
    width: "100%",
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
  centerY: { justifyContent: "center", alignItems: "center" },
  flexDiv: { flexDirection: "row" },
  flexEnd: { justifyContent: "flex-end" },
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
  fullHeight: {
    flex: 1,
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: { flex: 1 },
  grayText: {
    color: colors.secondaryDark,
  },
  heavyWeight: {
    fontWeight: 700,
  },
  icon: {
    marginRight: 24,
  },
  iconDiv: {
    justifyContent: "space-around",
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 30,
    marginTop: 24,
  },

  image: {
    width: 90,
    height: "90%",
    marginRight: 12,
  },
  letterSpace: {
    letterSpacing: 0.5,
  },
  lightGrayBackground: {
    backgroundColor: colors.lightDark,
  },
  lighterGrayBackground: {
    backgroundColor: colors.lighterDark,
  },
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
  lineHeight: {
    lineHeight: 50,
  },
  textPadding: {
    padding: 6,
  },
  littlePadding: {
    paddingTop: 5,
  },
  loginDiv: {
    height: "85%",
    backgroundColor: colors.bright,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 16,
  },
  loginPage: {
    backgroundColor: colors.mainBckg,
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    justifyContent: "center",
    paddingBottom: 18,
  },
  logoBlackPart: {
    color: colors.black,
  },
  logoSize: { fontSize: 50 },
  mediumDiv: {
    width: "90%",
  },
  mediumSize: {
    fontSize: 15,
  },
  mediumWeight: {
    fontWeight: "600",
  },
  nearbyRestoBradius: {
    borderRadius: 20,
  },
  nearbyRestoDiv: {
    height: 100,
    marginBottom: 10,
  },
  orangeBackground: {
    backgroundColor: colors.mainBckg,
  },
  orangeColor: {
    color: colors.mainBckg,
  },
  orDiv: {
    flexDirection: "row",
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },

  safeView: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 10,
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
    borderWidth: 1,
    margin: 10,
  },
  text: {
    marginTop: 24,
  },
  subheader: {
    paddingBottom: 12,
    color: colors.secondaryDark,
    fontSize: 18,
  },
  subheaderStyle: {
    padding: 20,
  },
  welcome: {
    paddingBottom: 8,
    color: colors.darkBlue,
    fontSize: 18,
  },
  whiteText: {
    color: colors.bright,
  },
  whiteDiv: {
    backgroundColor: colors.bright,
  },
});
