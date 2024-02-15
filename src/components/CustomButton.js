import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CustomButton = ({
  onPress = () => {},
  text = '',
  leftImg = null,
  textStyle = {},
  isLoading ,
}) => {
  return (
    <View style={{alignSelf: 'center', width: 300}}>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-[#F9622E] h-14 rounded-full flex-row items-center justify-center my-4"
        onPress={onPress}>
        {!!leftImg ? (
          <Image
            source={leftImg}
            className="w-4 h-4 mr-4"
            resizeMode="contain"
          />
        ) : null}
        {isLoading ? (
          <ActivityIndicator size={'small'} color={'white'} />
        ) : (
          <Text className="text-white text-md  font-[Poppins-Bold]">
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
