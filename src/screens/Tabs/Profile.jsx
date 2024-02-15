import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <ScrollView>
        <View className="-mt-2">
          {/* Main Image  */}
          <Image
            source={require('../../assets/images/bg.png')}
            className="w-full h-52"
            style={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
          />
          {/* Main Image  */}

          {/* User Profile name,back button,edit button  */}
          <View className="absolute top-12 left-6">
            <View
              className=" flex-row items-center justify-between"
              style={{width: 350}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
                className="w-10 h-10 rounded-full bg-white items-center justify-center">
                <MaterialIcons name="arrow-back" color={'black'} size={22} />
              </TouchableOpacity>
              <Text className="font-[Poppins-SemiBold] text-white text-lg">
                @usman_us
              </Text>
              <TouchableOpacity
              onPress={()=>navigation.navigate("SettingScreen")}
                activeOpacity={0.7}
                className="w-10 h-10 rounded-full bg-white items-center justify-center">
                <AntDesign name="setting" size={20} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
          {/* User Profile name,back button,edit button  */}

          {/* User Profile image,user secondN name,email etc  */}

          <View className="items-center justify-center -mt-10">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb3RiYWxsJTIwcGxheWVyJTIwaW1hZ2VzfGVufDB8fDB8fHww',
              }}
              className="w-24 h-24 rounded-full"
            />
            <Text className=" text-black font-[Poppins-SemiBold] mt-2 text-lg">
              Usman JR
            </Text>
            <Text className=" text-gray-400 font-[Poppins-Regular] mt-1 text-sm">
              Football Lover
            </Text>
            <View className="flex-row items-center justify-center gap-2 mt-3">
              <Feather name="link-2" color={'#F9622E'} size={22} />
              <Text className=" text-[#F9622E] font-[Poppins-Regular] mt-1 text-sm">
                usmanjr126@gmail.com
              </Text>
            </View>
          </View>
          {/*  User Profile image,user secondN name,email etc   */}
        </View>

        {/*  User Followers,posts,likes section   */}

        <View className=" justify-center mt-6 flex-row items-center">
          <View className="mr-11">
            <Text className="text-black font-[Poppins-SemiBold] text-xl">
              241
            </Text>
            <Text className="text-gray-400 font-[Poppins-Regular] text-xs ml-1">
              Post
            </Text>
          </View>
          <View className="mr-11">
            <Text className="text-black font-[Poppins-SemiBold] text-xl">
              13.6k
            </Text>
            <Text className="text-gray-400 font-[Poppins-Regular] text-xs ml-1">
              Followers
            </Text>
          </View>
          <View className="mr-11">
            <Text className="text-black font-[Poppins-SemiBold] text-xl ml-4">
              2k
            </Text>
            <Text className="text-gray-400 font-[Poppins-Regular] text-xs ml-1">
              Following
            </Text>
          </View>
          <View>
            <Text className="text-black font-[Poppins-SemiBold] text-xl mr-1">
              1.1M
            </Text>
            <Text className="text-gray-400 font-[Poppins-Regular] text-xs ml-1">
              Likes
            </Text>
          </View>
        </View>
        {/*  User Followers,posts,likes section   */}

        {/*  User Follow and Message button  */}

        <View className=" flex-row items-center justify-center mt-8">
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-36 h-12 bg-[#F9622E] items-center rounded-3xl mr-12 flex-row justify-center">
            <Entypo name="thumbs-up" color={'white'} size={22} />
            <Text className="text-white font-[Poppins-Regular] ml-2">
              Follow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-36 h-12 bg-white flex-row items-center justify-center rounded-3xl border border-[#F9622E]">
            <AntDesign name="message1" color={'#F9622E'} size={22} />
            <Text className="text-[#F9622E] font-[Poppins-Regular] ml-2">
              Message
            </Text>
          </TouchableOpacity>
        </View>
        
        {/*  User Follow and Message button  */}
      </ScrollView>
    </WrapperContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({});
