import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import WrapperContainer from '../../components/WrapperComponent';

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <View className=" flex-row items-center px-4 mt-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center ">
          <MaterialIcons name="arrow-back" color={'black'} size={22} />
        </TouchableOpacity>
        <Text className="font-[Poppins-SemiBold] text-black text-lg ml-20">
          Settings
        </Text>
      </View>

      <View className=" px-8 my-6">
        <TouchableOpacity
          className="items-center justify-between flex-row mt-6 mb-2"
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <View className="items-center flex-row">
            <AntDesign name="user" color={'#F9622E'} size={22} />
            <Text className="text-black font-[Poppins-Regular] ml-4 text-lg">
              Edit Profile
            </Text>
          </View>

          <Entypo name="chevron-right" color={'#F9622E'} size={26} />
        </TouchableOpacity>
        <View style={{borderWidth: 0.3, borderColor: '#D3D3D3'}} />
        <TouchableOpacity className="items-center justify-between flex-row mt-6 mb-2">
          <View className="items-center flex-row">
            <Ionicons name="bookmark-outline" size={22} color={'#F9622E'} />
            <Text className="text-black font-[Poppins-Regular] ml-4 text-lg">
              Saved
            </Text>
          </View>

          <Entypo name="chevron-right" color={'#F9622E'} size={26} />
        </TouchableOpacity>
        <View style={{borderWidth: 0.3, borderColor: '#D3D3D3'}} />

        <TouchableOpacity className="items-center justify-between flex-row mt-6 mb-2">
          <View className="items-center flex-row">
            <MaterialIcons name="privacy-tip" size={22} color={'#F9622E'} />
            <Text className="text-black font-[Poppins-Regular] ml-4 text-lg">
              Privacy Policy
            </Text>
          </View>

          <Entypo name="chevron-right" color={'#F9622E'} size={26} />
        </TouchableOpacity>
        <View style={{borderWidth: 0.3, borderColor: '#D3D3D3'}} />

        <TouchableOpacity className="items-center justify-between flex-row mt-6 mb-2">
          <View className="items-center flex-row">
            <Octicons name="person-add" size={22} color={'#F9622E'} />
            <Text className="text-black font-[Poppins-Regular] ml-4 text-lg">
              invite Friends
            </Text>
          </View>

          <Entypo name="chevron-right" color={'#F9622E'} size={26} />
        </TouchableOpacity>
        <View style={{borderWidth: 0.3, borderColor: '#D3D3D3'}} />

        <TouchableOpacity className="items-center justify-between flex-row mt-6 mb-2">
          <View className="items-center flex-row">
            <AntDesign name="logout" size={22} color={'#F9622E'} />
            <Text className="text-black font-[Poppins-Regular] ml-4 text-lg">
              Sign Out
            </Text>
          </View>

          <Entypo name="chevron-right" color={'#F9622E'} size={26} />
        </TouchableOpacity>
        <View style={{borderWidth: 0.3, borderColor: '#D3D3D3'}} />
      </View>
    </WrapperContainer>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
