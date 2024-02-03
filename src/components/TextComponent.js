import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textScale} from '../constants/responsiveSize';
import {useSelector} from 'react-redux';
import colors from '../utlis/colors';

const TextComponent = ({text, style = {}, ...props}) => {
  isDarkTheme = false;
  // const isDarkTheme=useSelector(state=>state.appSetting.isDark)
  return (
    <View>
      <Text
        style={{
          ...style,
          ...styles.textStyle,
          color: isDarkTheme ? colors.whiteColor : colors.blackColor,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: textScale(12),
  },
});
