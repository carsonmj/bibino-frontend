import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  BEER_NAME_FONT_SIZE,
  BEER_DESCRIPTION_FONT_SIZE,
} from "../../constants/size";
import {
  PRIMARY_BLACK,
  CARD_FONT_GREY,
  PRIMARY_ORAGNE,
} from "../../constants/colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const itemWidth = Math.round(windowWidth * 0.8);
const itemHeight = Math.round(windowHeight * 0.46);

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: itemHeight,
    borderRadius: 30,
  },
  imageContainer: {
    flex: 2,
    width: "100%",
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    backgroundColor: PRIMARY_BLACK,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginHorizontal: 20,
    color: PRIMARY_ORAGNE,
    fontFamily: RUBIK_BOLD,
    fontSize: BEER_NAME_FONT_SIZE,
  },
  description: {
    marginVertical: 10,
    marginHorizontal: 20,
    color: CARD_FONT_GREY,
    fontFamily: RUBIK_REGULAR,
    fontSize: BEER_DESCRIPTION_FONT_SIZE,
  },
  topCircularBorder: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomCircularBorder: {
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default styles;
