import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperComponent';
import fontFamily from '../../utlis/fontFamily';
import FastImageComponent from '../../components/FastImageComponent';
import {FlashList} from '@shopify/flash-list';
import {height, moderateScale, width} from '../../constants/responsiveSize';

const NotificationScreen = () => {
  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          key={index}
          className="flex-row items-center"
          activeOpacity={0.7}>
          <FastImageComponent
            url={
              'https://plus.unsplash.com/premium_photo-1705421623622-7157fbeec959?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            imageStyle={{
              width: moderateScale(50),
              height: moderateScale(50),
              borderRadius: moderateScale(25),
            }}
          />
          <View className="ml-3 ">
            <View>
              <Text
                className="text-[#F9622E] "
                style={{fontFamily: fontFamily.semiBold}}>
                @usmani_us{' '}
                <Text
                  className="text-black "
                  style={{fontFamily: fontFamily.regular}}>
                  Like Your Photo
                </Text>
              </Text>
              <Text className="text-gray-400 font-[Poppins-Regular] text-xs">
                32mint ago
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <WrapperContainer>
      <Text
        className="text-xl text-black p-2"
        style={{fontFamily: fontFamily.semiBold}}>
        Notifications
      </Text>

      <View className="ml-3 mb-[97px]">
        <FlatList
          data={[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ]}
          renderItem={renderItem}
          estimatedItemSize={width / 3}
          ItemSeparatorComponent={() => (
            <View
              className=" border-gray-300 my-2 mr-2 "
              style={{borderWidth: 0.3}}
            />
          )}
        />
      </View>
    </WrapperContainer>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: moderateScale(122),
    height: moderateScale(100),
    borderWidth: 0.4,
    borderRadius: moderateScale(1),
    margin: 1,
  },
});
