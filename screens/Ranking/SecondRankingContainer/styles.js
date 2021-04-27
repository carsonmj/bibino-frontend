import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK, PRIMARY_LIGHT_ORANGE } from "../../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  reviewCount: {
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
    fontSize: 15,
  },
  rating: {
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
    fontSize: 18,
  },
  secondContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.24,
  },
  secondRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: PRIMARY_LIGHT_ORANGE,
  },
  secondRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  secondNumber: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 130,
  },
  secondName: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 50,
  },
});

styles.resizeFont = (string) => {
  if (string.length > 6) {
    return { fontSize: windowWidth * 0.07 };
  } else {
    return { fontSize: 80 };
  }
};

export default styles;
