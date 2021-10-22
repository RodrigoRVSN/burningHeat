import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    lineHeight: 20,
    marginBottom: 10,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },
  username: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 16,
  },
});
