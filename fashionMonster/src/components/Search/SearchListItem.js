import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { THEME_PURPLE, THEME_GRAY } from '../../styles/color';

function SearchListItem({ imgSrc, title }) {
  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity style={styles.contentContainer}>
        <Image 
          source={imgSrc}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FeatherIcon name="x" size={20} color={THEME_GRAY} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: THEME_PURPLE,
  },
  titleText: {
    fontSize: 16,
  }
});

export default SearchListItem;