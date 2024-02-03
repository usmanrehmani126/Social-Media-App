import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../../constants/lang';
import TextinputComponent from '../../components/TextinputComponent';
import {moderateScaleVertical} from '../../constants/responsiveSize';
import CustomButton from '../../components/CustomButton';
import {useSelector} from 'react-redux';
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isDarKTheme = useSelector(state => state.appSetting.isDark);

  return (
    <WrapperContainer style={{backgroundColor: 'black', padding: 12}}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          color={isDarKTheme == true ? 'white' : 'black'}
          size={26}
        />
      </TouchableOpacity>
      <ScrollView>
        <View className="flex-[0.8]">
          <Text
            className={`text-xl pl-2 pr-4 text-white mt-4  font-[Poppins-Bold] ${
              isDarKTheme == true ? 'text-white' : 'text-black'
            }`}>
            {strings.CREATE_NEW_ACCOUNT}
          </Text>
          <Text
            className="text-base pl-2 pr-4 text-gray-400 mt-1  font-[Poppins-Medium]"
            style={{marginBottom: moderateScaleVertical(20)}}>
            {strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE}
          </Text>
          <View className="items-center justify-center pl-2 pr-4 mt-5">
            <TextinputComponent
              placeholder="Enter First Name"
              value={userName}
              onChangeText={txt => setUserName(txt)}
              isDarKTheme={isDarKTheme}
            />
            <TextinputComponent
              placeholder={strings.USERNAME}
              value={fullName}
              onChangeText={txt => setFullName(txt)}
              isDarKTheme={isDarKTheme}
            />
            <TextinputComponent
              placeholder={strings.FULL_NAME}
              value={email}
              onChangeText={txt => setEmail(txt)}
              isDarKTheme={isDarKTheme}
            />
            <TextinputComponent
              placeholder={strings.PASSWORD}
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
          </View>
        </View>
        <View className="flex-[0.2] justify-end mt-20">
          <CustomButton
            text={strings.SIGN_UP}
            onPress={() => navigation.navigate('OtpScreen')}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default RegisterScreen;
