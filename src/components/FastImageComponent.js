import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const FastImageComponent = ({url, imageStyle = {}}) => {
  return (
    <FastImage
      style={{...styles.imageStyle, ...imageStyle}}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default FastImageComponent;

const styles = StyleSheet.create({
  imageStyle: {},
});
