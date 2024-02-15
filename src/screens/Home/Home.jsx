import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import WrapperContainer from '../../components/WrapperComponent';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';
import fontFamily from '../../utlis/fontFamily';
import {moderateScale} from '../../constants/responsiveSize';
import FastImageComponent from '../../components/FastImageComponent';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Second Item',
  },
];

const Home = () => {
  const {isDark, lang} = useSelector(state => state.appSetting);
  const renderItem = useCallback(({item, index}) => {
    return (
      <View
        key={index}
        style={{
          margin: moderateScale(4),
          borderRadius: moderateScale(6),
          padding: moderateScale(6),
          backgroundColor: isDark == true ? '#181818' : 'rgb(243,244,246)',
        }}>
        {/* User profile,and more  */}
        <View className="flex-row items-center justify-between ">
          <View className="flex-row items-center">
            <FastImageComponent
              url={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlrEg-pZGXfN6-qwvykOhs7O9tOdaSfSz7pJ56oe0Wg&s'
              }
              imageStyle={{
                width: moderateScale(50),
                height: moderateScale(50),
                borderRadius: moderateScale(25),
              }}
            />
            <View>
              <Text
                className={` ${
                  isDark == true ? 'text-white' : 'text-black'
                } text-md font-[Poppins-Regular] ml-2`}>
                Hji Usman
              </Text>
              <Text
                className={` ${
                  isDark == true ? 'text-white' : 'text-gray-400'
                }  text-md font-[Poppins-Light] ml-2`}>
                @usmani_us
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={isDark ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        {/* User profile,and more */}

        {/* Posts,images and videos section  */}
        <FastImageComponent
          url={
            'https://images.unsplash.com/photo-1536063211352-0b94219f6212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D'
          }
          imageStyle={{
            width: '100%',
            height: moderateScale(250),
            borderRadius: moderateScale(8),
            marginVertical: moderateScale(6),
          }}
        />
        {/* Posts,images and videos section  */}
        <View className="my-1">
          <Text
            className={`text-xs tracking-normal ${
              isDark == true ? 'text-white' : 'text-gray-400'
            }`}>
            Hey everyone i am usman i want to share you some of my real
            experiance in waveFrnd i hope you find my post help full plz like it
            and share with your frnds.
          </Text>
          <Text className="text-gray-400 text-xs mt-1">1hr ago</Text>
        </View>
        {/* likes,comments and save post section */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center ml-4 my-2 gap-4">
            <View className="flex-row items-center gap-1">
              <Entypo
                name="heart"
                size={22}
                color={isDark ? 'white' : 'black'}
              />
              <Text className="text-gray-400">22.2k</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <EvilIcons
                name="comment"
                size={22}
                color={isDark ? 'white' : 'black'}
              />
              <Text className="text-gray-400">1.2k</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons
              name="bookmark-outline"
              size={22}
              color={isDark ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        {/* likes,comments and save post section */}
      </View>
    );
  });
  return (
    <WrapperContainer>
      {/* App Logo and Messaging Icon */}
      <View className="flex-row items-center justify-between p-2">
        <View className="flex-row items-center">
          <View className="w-10 h-10 bg-[#F9622E] items-center justify-center rounded-full">
            <Foundation name="social-evernote" size={20} color={'white'} />
          </View>
          <Text
            className={`${
              isDark == true ? 'text-white' : 'text-black'
            } text-lg  ml-2 `}
            style={{fontFamily: fontFamily.semiBold}}>
            Social Wave 🖐.
          </Text>
        </View>
        <Pressable className="border border-gray-300 rounded-full w-10 h-10 items-center justify-center">
          <AntDesign
            name="message1"
            size={19}
            color={isDark ? 'white' : 'gray'}
          />
        </Pressable>
      </View>
      {/* App Logo and Messaging Icon*/}

      {/* Dynamic data for post ,user details, Main API Posts Data*/}
      <FlashList data={DATA} renderItem={renderItem} estimatedItemSize={3} />
      {/* Dynamic data for post ,user details, Main API Posts Data*/}
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
