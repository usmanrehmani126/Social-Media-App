import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../../constants/lang';
import TextinputComponent from '../../components/TextinputComponent';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../constants/responsiveSize';
import CustomButton from '../../components/CustomButton';
import {useSelector} from 'react-redux';
import {showError} from '../../utlis/helperFunction';
import validator from '../../utlis/validations';
import {userLogin} from '../../redux/actions/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const isDarKTheme = useSelector(state => state.appSetting.isDark);

  const isValidData = () => {
    const error = validator({
      email,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };
  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      setIsLoading(true);
      try {
        const res = await userLogin({
          email,
          password,
        });
        console.log('login api res', res);
        setIsLoading(false);
        
        if (!!res.data && !res?.data?.validOTP) {
          navigation.navigate('OtpScreen', {
            data: res.data,
          });
        }
        // else{
        //   navigation.navigate('Main');
        // }
        
      } catch (error) {
        console.log('error in login api', error);
        showError(error?.error);
        setIsLoading(false);
      }
    }
  };

  return (
    <WrapperContainer style={{backgroundColor: 'black', padding: 12}}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          color={isDarKTheme == true ? 'white' : 'black'}
          size={26}
        />
      </TouchableOpacity>
      <KeyboardAvoidingView
        style={{flex: 1, padding: moderateScale(16)}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1">
            <View className="flex-[0.8]">
              <Text
                className={` font-[Poppins-Bold] text-xl pl-2 pr-4 ${
                  isDarKTheme == true ? 'text-white' : 'text-black'
                } mt-4`}>
                {strings.WELCOME_BACK}
              </Text>
              <Text
                className="text-base pl-2 pr-4 text-gray-400 mt-1  font-[Poppins-Medium]"
                style={{marginBottom: moderateScaleVertical(20)}}>
                {strings.WE_ARE_HAPPY_TO_SEE}
              </Text>
              <View className="items-center justify-center pl-2 pr-4 mt-5">
                <TextinputComponent
                  placeholder={strings.EMAIL}
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

                <Text className="text-white font-bold text-right w-full">
                  {strings.FORGOT_PASSWORD}?
                </Text>
              </View>
            </View>
            <View className="flex-[0.2] justify-end">
              <CustomButton
                isLoading={isLoading}
                text={strings.LOGIN}
                onPress={() => onLogin()}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

export default LoginScreen;
