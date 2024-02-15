import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import WrapperContainer from '../../components/WrapperComponent';
import TextinputComponent from '../../components/TextinputComponent';
import strings from '../../constants/lang';
import CustomButton from '../../components/CustomButton';
import MultiTextInput from '../../components/MultiTextInput';
import ModalComponent from '../../components/ModalComponent';
import {useSelector} from 'react-redux';

const EditProfileScreen = () => {
  const [showPassModal, setShowPassModal] = useState(false);
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const isDarKTheme = useSelector(state => state.appSetting.isDark);
  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <ScrollView className=" px-4 ">
        <View className=" flex-row items-center mt-2">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center ">
            <MaterialIcons name="arrow-back" color={'black'} size={22} />
          </TouchableOpacity>
          <Text className="font-[Poppins-SemiBold] text-black text-lg ml-20">
            Edit Profile
          </Text>
        </View>
        <View className="items-center justify-center mt-6">
          <View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb3RiYWxsJTIwcGxheWVyJTIwaW1hZ2VzfGVufDB8fDB8fHww',
              }}
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity
              activeOpacity={0.6}
              className="absolute top-0 -right-4 ">
              <Feather name="edit-2" color={'#F9622E'} size={22} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-4">
          <TextinputComponent
            placeholder={strings.USERNAME}
            //   value={email}
            //   onChangeText={txt => setEmail(txt)}
            //   isDarKTheme={isDarKTheme}
          />
          <TextinputComponent
            placeholder={strings.FULL_NAME}
            //   value={email}
            //   onChangeText={txt => setEmail(txt)}
            //   isDarKTheme={isDarKTheme}
          />
          <MultiTextInput placeholder="Add Bio Here..." />

          <View className=" flex-row items-center justify-center mt-8">
            <TouchableOpacity
              onPress={() => setShowPassModal(true)}
              activeOpacity={0.7}
              className="w-40 h-12 bg-[#F9622E] items-center rounded-3xl mr-12 flex-row justify-center">
              <Text className="text-white font-[Poppins-Regular] text-sm">
                Change Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddLinksForProfile')}
              activeOpacity={0.7}
              className="w-36 h-12 bg-white flex-row items-center justify-center rounded-3xl border border-[#F9622E]">
              <Text className="text-[#F9622E] font-[Poppins-Regular] ml-2">
                Add Links
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton text="Save Changes" />
        </View>
      </ScrollView>
      <ModalComponent
        isVisible={showPassModal}
        onBackdropPress={() => setShowPassModal(false)}>
        <View>
          <TextinputComponent
            placeholder={strings.ENTER_OLD_PASSWORD}
            value={password}
            onChangeText={txt => setPassword(txt)}
            secureTextEntry={secureText}
            secureText={secureText ? strings.SHOW : strings.HIDE}
            onPressSecure={() => setSecureText(!secureText)}
            isDarKTheme={isDarKTheme}
          />
          <TextinputComponent
            placeholder={strings.CONFIRM_PASSWORD}
            value={confirmPassword}
            onChangeText={txt => setConfirmPassword(txt)}
            secureTextEntry={secureText}
            secureText={secureText ? strings.SHOW : strings.HIDE}
            onPressSecure={() => setSecureText(!secureText)}
            isDarKTheme={isDarKTheme}
          />
          <CustomButton text="Submit" />
        </View>
      </ModalComponent>
    </WrapperContainer>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({});
