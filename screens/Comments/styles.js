import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE } from "../../constants/colors";
import { RUBIK_BOLD, RUBIK_MEDIUM } from "../../constants/font";
import { COMMENTS_RATING_FONT_SIZE } from "../../constants/size";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    borderRadius: 10,
    // alignItems: "center",
    backgroundColor: PRIMARY_ORANGE,
  },

  descriptionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 10,
  },

  commentsContainer: {
    flex: 9,
    alignItems: "center",
  },
  rating: {
    fontFamily: RUBIK_BOLD,
    fontSize: COMMENTS_RATING_FONT_SIZE,
  },
});

export default styles;
