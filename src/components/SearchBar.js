//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import colors from '../utlis/colors';
import {useSelector} from 'react-redux';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../constants/responsiveSize';

// create a component
const SerachBar = ({
  value = '',
  onChangeText,
  placeholder = '',
  isSearch = false,
  inputStyle = {},
  textStyle = {},
  placeholderTextColor = colors.whiteColorOpacity70,
  ...props
}) => {
  const {lang, selectedTheme} = useSelector(state => state?.appSetting);

  return (
    <View
      style={{
        ...styles.inputStyle,
        ...inputStyle,
      }}>
      <TextInput
        style={{
          ...styles.textStyle,
          ...textStyle,
        }}
        // value={''}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {!isSearch ? <ActivityIndicator color={colors.redColor} /> : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(46),
    borderRadius: moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    backgroundColor: colors.gray7,
    marginBottom: moderateScaleVertical(16),
    marginTop: 12,
  },
  textStyle: {
    fontSize: textScale(14),
    flex: 1,
    color: 'black',
  },
});

//make this component available to the app
export default SerachBar;
