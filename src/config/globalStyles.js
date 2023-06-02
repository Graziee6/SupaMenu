import { StyleSheet } from "react-native";

import colors from "./colors";

export const GlobalStyles = StyleSheet.create({
  appFontFamily: { fontFamily: "Poppins-Regular" },
  bold: { fontWeight: 700 },
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
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: { flex: 1 },
  grayText: {
    color: colors.secondaryDark,
  },
  icon: {
    marginRight: 24,
  },
  letterSpace: {
    letterSpacing: 0.5,
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
  littlePadding: {
    paddingTop: 5,
  },
  loginDiv: {
    flex: 1,
    backgroundColor: colors.bright,
    top: 100,
    borderRadius: 50,
    paddingTop: 16,
  },
  loginPage: {
    backgroundColor: colors.mainBckg,
    flex: 1,
  },
  logo: {
    justifyContent: "center",
    paddingBottom: 18,
  },
  logoBlackPart: {
    color: colors.black,
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
    mediumSize: {
      fontSize: 15,
    },
    mediumWeight: {
      fontWeight: "600",
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
    orangeBackground: {
      backgroundColor: colors.mainBckg,
    },
    orangeColor: {
      color: colors.mainBckg,
    },
    orDiv: {
      flexDirection: "row",
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
    whiteText: {
      color: colors.bright,
    },
  },
});
