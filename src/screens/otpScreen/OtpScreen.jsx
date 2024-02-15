import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WrapperContainer from '../../components/WrapperComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../../constants/lang';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../constants/responsiveSize';
import CustomButton from '../../components/CustomButton';
import {useSelector} from 'react-redux';
import OTPTextView from 'react-native-otp-textinput';
import colors from '../../utlis/colors';
import {useRoute} from '@react-navigation/native';
import validations from '../../utlis/validations';
import {showError} from '../../utlis/helperFunction';
import {otpVerify} from '../../redux/actions/auth';
import store from '../../redux/store';
import {saveUserData} from '../../redux/reducers/auth';

const OtpScreen = ({navigation}) => {
  const [otpInput, setOtpInput] = useState('');
  const [timer, setTimer] = useState(5);
  const isDarKTheme = useSelector(state => state.appSetting.isDark);
  const input = useRef(null);
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(false);
  const {data} = route?.params || {};
  const {dispatch} = store;
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
    }, 1000);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timer]);
  const handleCellTextChange = async (text, i) => {};
  const onPressResend = () => {
    setTimer(5);
  };

  const isValidData = () => {
    const error = validations({
      otp: otpInput,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };
  const onDone = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      setIsLoading(true);
      try {
        const res = await otpVerify(
          {
            email: data.email,
            otp: otpInput,
          },
          data.token,
        );
        setIsLoading(false);
        navigation.navigate('Main');
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
                {strings.ENTER_THE_FOUR_DIGIT}
              </Text>
              <Text
                className="text-base pl-2 pr-4 text-gray-400 mt-1  font-[Poppins-Medium]"
                style={{marginBottom: moderateScaleVertical(20)}}>
                {strings.EDIT_MY_EMAIL}
              </Text>
              <View className="items-center justify-center pl-2 pr-4 mt-5">
                <OTPTextView
                  ref={input}
                  textInputStyle={styles.textInputContainer}
                  handleTextChange={setOtpInput}
                  handleCellTextChange={handleCellTextChange}
                  inputCount={4}
                  keyboardType="numeric"
                  autoFocus
                  tintColor={colors.whiteColor}
                  offTintColor={colors.whiteColorOpacity40}
                />
              </View>
            </View>
            <View className="flex-[0.2] justify-end">
              <TouchableOpacity activeOpacity={0.7}>
                {timer > 0 ? (
                  <>
                    <Text className="text-blue-700 font-bold text-left w-full">
                      {strings.RESEND_CODE}
                      <Text> {timer} seconds</Text>
                    </Text>
                  </>
                ) : (
                  <Text
                    className="text-blue-700 font-bold text-left w-full"
                    onPress={onPressResend}>
                    {strings.RESEND_CODE}
                  </Text>
                )}
              </TouchableOpacity>
              <CustomButton
                isLoading={isLoading}
                text={strings.DONE}
                onPress={() => onDone()}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: colors.gray7,
    borderBottomWidth: 0,
    borderRadius: 8,
    color: colors.blackColor,
  },
});
