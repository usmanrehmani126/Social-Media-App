import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import WrapperContainer from '../../components/WrapperComponent';
import {useSelector} from 'react-redux';
import fontFamily from '../../utlis/fontFamily';

const FirstSplashScreen = ({navigation}) => {
  const isDarKTheme = useSelector(state => state.appSetting.isDark);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SecondSplash');
    }, 3000);
  });
  return (
    <WrapperContainer>
      <View className="flex-1  items-center justify-center flex-row">
        <View className="w-20 h-20 bg-orange-500 items-center justify-center rounded-full">
          <Foundation
            name="social-evernote"
            size={26}
            color={isDarKTheme ? 'white' : 'white'}
          />
        </View>
        <Text
          className={`${
            isDarKTheme == true ? 'text-white' : 'text-black'
          } text-xl ml-4`}
          style={{fontFamily: fontFamily.medium}}>
          Social Wave 🖐.
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default FirstSplashScreen;

const styles = StyleSheet.create({});
