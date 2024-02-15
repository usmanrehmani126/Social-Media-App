import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import WrapperContainer from '../../components/WrapperComponent';
import strings from '../../constants/lang';
import MultiTextInput from '../../components/MultiTextInput';
import CustomButton from '../../components/CustomButton';

const AddPost = ({route}) => {
  const navigation = useNavigation();
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+ JSON.stringify(route.params))
  const [image, setImage] = useState(JSON.stringify(route.params.isPostImage));
  console.log(JSON.stringify(route.params.isPostImage));
  return (
    <WrapperContainer>
      <View className=" flex-row items-center mt-2 px-4 ">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center ">
          <MaterialIcons name="arrow-back" color={'black'} size={22} />
        </TouchableOpacity>
        <Text className="font-[Poppins-SemiBold] text-black text-lg ml-20">
          {strings.CREATE_POST}
        </Text>
      </View>
      <View className="px-6 mt-20 ">
        <View>
          <Image source={{uri: image?.cropRect?.path}} className="w-24 h-32" />
        </View>
        <MultiTextInput
          placeholder={'Write a Description here '}
          inputStyle={{height: 200}}
        />
      </View>

      <View className="px-8 mt-12">
        <TouchableOpacity
          className="items-center justify-between flex-row mb-6"
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <View className="items-center flex-row">
            <AntDesign name="user" color={'#F9622E'} size={22} />
            <Text className="text-black font-[Poppins-Regular] ml-4 text-lg">
              Tag People
            </Text>
          </View>

          <Entypo name="chevron-right" color={'#F9622E'} size={26} />
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center justify-between flex-row mb-2 mt-4"
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <View className="items-center flex-row">
            <Feather name="map-pin" color={'#F9622E'} size={22} />
            <Text className="text-black font-[Poppins-Regular] ml-4 text-lg">
              Add Location
            </Text>
          </View>

          <Entypo name="chevron-right" color={'#F9622E'} size={26} />
        </TouchableOpacity>

        <View className="mt-20">
          <CustomButton text="Post" />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default AddPost;

const styles = StyleSheet.create({});
