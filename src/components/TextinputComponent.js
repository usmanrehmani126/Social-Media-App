import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../constants/responsiveSize';
import colors from '../utlis/colors';
import {useSelector} from 'react-redux';

const TextinputComponent = ({
  inputStyle = {},
  textStyle = {},
  secureText,
  value,
  onChangeText,
  placeholder = '',
  onPressSecure,
  placeholderTextColor =isDarKTheme?  colors.gray4: "gray",
  isDarKTheme,
  ...props
}) => {
  return (
    <View style={{...styles.inputStyle(isDarKTheme), ...inputStyle}}>
      <TextInput
        style={{...styles.textStyle, ...textStyle}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
        placeholderTextColor={placeholderTextColor}
      />
      {!!secureText ? (
        <Text className="text-[#F9622E]" onPress={onPressSecure}>
          {secureText}
        </Text>
      ) : null}
    </View>
  );
};

export default TextinputComponent;

const styles = StyleSheet.create({
  inputStyle: isDarKTheme => ({
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    backgroundColor: isDarKTheme ? 'white' : '#dadada',
    marginBottom: moderateScale(16),
  }),
  textStyle: {
    fontSize: textScale(14),
    flex: 1,
    color: 'black',
  },
});
