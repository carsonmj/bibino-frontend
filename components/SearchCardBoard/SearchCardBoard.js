import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import SearchCard from "./SearchCard/SearchCard";
import Loading from "../../screens/Loading/Loading";
import {
  PRIMARY_DARK_GREY,
  PRIMARY_ORANGE,
  SEARCH_YELLOW,
  SERACH_RED,
} from "../../constants/colors";

const SearchCardBoard = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //이거 만약 ranking일때만 위 3개 색칠해주는거면 props받아온 후에
  //로직 조금 수정해줘야함
  const renderItem = ({ item, index }) => {
    let backgroundColor = null;

    switch (index) {
      case 0:
        backgroundColor = SERACH_RED;
        break;
      case 1:
        backgroundColor = PRIMARY_ORANGE;
        break;
      case 2:
        backgroundColor = SEARCH_YELLOW;
        break;
      default:
        backgroundColor = PRIMARY_DARK_GREY;
    }

    return <SearchCard beer={item} backgroundColor={backgroundColor} />;
  };

  useEffect(() => {
    setTimeout(() => {
      const beerData = require("./beers.json");
      beerData.forEach(
        (el) => (el.imageSource = require("../../assets/pngs/beerSample2.png"))
      );
      setIsLoading(false);
      setBeers(beerData);
    }, 1000);
  }, [setBeers, setIsLoading]);

  return (
    <View style={styles.container}>
      {isLoading ? <Loading /> : null}
      {!isLoading && beers.length ? (
        <FlatList
          data={beers}
          renderItem={renderItem}
          keyExtractor={({ id }) => "" + id}
          showsVerticalScrollIndicator={false}
        />
      ) : null}
    </View>
  );
};

export default SearchCardBoard;
