import React, { useEffect, useRef, useState } from "react";
import { View, Animated, Easing } from "react-native";
import { FloatingAction } from "react-native-floating-action";

import styles from "./styles";
import { PRIMARY_ORANGE } from "../../constants/colors";

import TitleContainer from "./TitleContainer/TitleContainer";
import RatingBoardContainer from "./RatingBoardContainer/RatingBoardContainer";
import TagBoardContainer from "./TagBoardContainer/TagBoardContainer";
import CharacteristicContainer from "./CharacteristicContainer/CharacteristicContainer";
import CommentBoardContainer from "./CommentBoardContainer/CommentBoardContainer";
import RecommendationBoardContainer from "./RecommendationBoardContainer/RecommendationBoardContainer";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import SectionDivider from "./SectionDivider/SectionDivider";
import floatingButtons from "../../constants/floatingButtons";
import FeedbackBoard from "../../components/FeedbackBoard/FeedbackBoard";

const Beer = ({ navigation }) => {
  const moveY = useRef(new Animated.Value(100)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setModalVisible] = useState(false);
  const [shouldShowFeedBack, setShouldShowFeedBack] = useState(false);

  useEffect(() => {
    Animated.timing(moveY, {
      toValue: 0,
      duration: 500,
      easing: Easing.inOut(Easing.quad),
      delay: 100,
      useNativeDriver: false,
    }).start();
  }, [moveY]);

  const handleOnScroll = (event) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: false,
    })(event);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Animated.ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      onScroll={handleOnScroll}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={[styles.image, styles.handleImageY(scrollY)]}
            source={require("../../assets/pngs/beerSample1.png")}
          />
        </View>
        <TitleContainer title="RAEA BEER" />
        <RatingBoardContainer rating={4} />
        <TagBoardContainer />
        <SectionDivider direction="right" text="Description" />
        <Animated.Text style={{ ...styles.description, top: moveY }}>
          2020 bottle shared by a friend. Darkest brown pour with a medium light
          brown head. Aroma of malt, maple, chocolate, bourbon, vanilla and some
          coffee. Malt and vanilla flavor giving way to coconut(!), maple and
          chocolate before a sweet bourbon and maple finish. Just a tad less
          sweetness and it would have been perfect, but definitely deserving of
          the hype.
        </Animated.Text>
        <SectionDivider direction="left" text="Characteristic" />
        <Animated.View style={styles.handlePositionX(scrollY)}>
          <CharacteristicContainer />
        </Animated.View>
        <SectionDivider direction="right" text="Recommendation" />
        <Animated.View style={styles.handleOpacity(scrollY)}>
          <RecommendationBoardContainer />
        </Animated.View>
        <SectionDivider direction="left" text="Comments" />
        <CommentBoardContainer navigation={navigation} />
      </View>
      <Animated.View
        style={[styles.buttonContainer, styles.handleButtonY(scrollY)]}
      >
        <FloatingAction
          actions={floatingButtons}
          color={PRIMARY_ORANGE}
          showBackground={false}
          onPressItem={(name) => {
            if (name === "reviewButton") {
              setModalVisible(true);
            }
          }}
        />
      </Animated.View>
      <ModalContainer
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        navigation={navigation}
        setShouldShowFeedBack={setShouldShowFeedBack}
      />
      {shouldShowFeedBack && (
        <Animated.View style={{ ...styles.feedbackContainer, top: scrollY }}>
          <FeedbackBoard setShouldShowFeedBack={setShouldShowFeedBack} />
        </Animated.View>
      )}
    </Animated.ScrollView>
  );
};

export default Beer;
