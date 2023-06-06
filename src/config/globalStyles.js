import { Platform, StatusBar, StyleSheet } from "react-native";

import colors from "./colors";

export const GlobalStyles = StyleSheet.create({
  appFontFamily: { fontFamily: "Poppins-Regular" },
  backDiv: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  backDivSpacing: { paddingBottom: 24 },
  backDivBorder: { borderBottomColor: colors.lightDark, borderBottomWidth: 1 },
  boldFontFamily: { fontFamily: "Poppins-Bold" },
  blackDiv: {
    backgroundColor: colors.black,
  },
  bold: { fontWeight: "700" },

  btnPos: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
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
    width: 70,
    height: "70%",
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
    height: "90%",
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
  nearbyRestoPageLeftMargin: { marginLeft: 20 },
  mediumDiv: {
    width: "95%",
  },
  mediumFontSize: {
    fontSize: 18,
  },
  mediumTopMargin: {
    marginTop: 12,
  },
  mediumWeight: {
    fontWeight: "600",
  },
  nearbyRestoBradius: {
    borderRadius: 20,
  },
  nearbyRestoDiv: {
    height: 90,
    // marginBottom: 10,
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
  safeView: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 10,
  },
  orangeBackground: {
    backgroundColor: colors.mainBckg,
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
  smallFontSize: {
    fontSize: 18,
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
    paddingBottom: 8,
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
  whiteBackground: {
    backgroundColor: colors.bright,
  },
  whiteText: {
    color: colors.bright,
  },
});
