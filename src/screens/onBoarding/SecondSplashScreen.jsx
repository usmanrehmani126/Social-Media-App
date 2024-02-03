import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
} from 'react-native';
import React, {useState} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import strings from '../../constants/lang';
import WrapperContainer from '../../components/WrapperComponent';
import CustomButton from '../../components/CustomButton';
import {useSelector} from 'react-redux';
import ModalComponent from '../../components/ModalComponent';
import RNRestart from 'react-native-restart';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../constants/responsiveSize';
import colors from '../../utlis/colors';
import store from '../../redux/store';
import {saveUserData} from '../../redux/reducers/auth';
import {changeLanguage, changeThemeApp} from '../../redux/actions/appSetting';
import fontFamily from '../../utlis/fontFamily';
const {dispatch} = store;
const SecondSplashScreen = ({navigation}) => {
  const privacyPolicy = (type = '1') => {
    if (type == 1) {
      navigation.navigate('WebViewScreen', {type});
    } else {
      navigation.navigate('WebViewScreen', {type});
    }
  };
  const {isDark, lang} = useSelector(state => state.appSetting);
  const [visible, setVisible] = useState(false);

  const onLogin = () => {
    dispatch(saveUserData({isLogin: true}));
  };
  const onPressLang = lng => {
    if (lng === 'urd' && lng !== lng) {
      changeLanguage(lng);
      I18nManager.forceRTL(true);
      RNRestart.restart();
    } else if (lang !== lng) {
      changeLanguage(lng);
      I18nManager.forceRTL(false);
      RNRestart.restart();
    }
    setVisible(false);
  };
  const onPressTheme = theme => {
    dispatch(changeThemeApp(theme));
    setVisible(false);
  };
  return (
    <WrapperContainer>
      <View className=" flex-row items-center justify-between p-6 flex-[0.3] -mt-20">
        <View className="flex-row items-center justify-center ">
          <View className="w-12 h-12 bg-[#F9622E] items-center justify-center rounded-full">
            <Foundation name="social-evernote" size={22} color={'white'} />
          </View>
          <Text
            className={`${
              isDark == true ? 'text-white' : 'text-black'
            } text-lg  ml-2 `}
            style={{fontFamily: fontFamily.semiBold}}>
            Social Wave 🖐.
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-[#F9622E] h-12 w-12 rounded-full items-center justify-center"
          onPress={() => setVisible(true)}>
          <Text className="text-white capitalize font-[Poppins-Medium]">
            {lang}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-gray-500 text-center text-md  font-[Poppins-Medium]">
          {strings.BY_CLICKING_LOG_IN}
        </Text>
        <Text
          className="text-gray-500 text-center text-md  font-[Poppins-Bold]"
          onPress={() => privacyPolicy(1)}>
          {strings.TERMS}.
        </Text>
        <Text className="text-gray-500 text-center text-md  font-[Poppins-Medium]">
          {strings.LEARN_HOW_WE_PRCOESS}
        </Text>
        <Text
          className="text-gray-500 text-center text-md  font-[Poppins-Bold]"
          onPress={() => privacyPolicy(2)}>
          {strings.PRIVACY_POLICY}
        </Text>
      </View>

      <View className="flex-[0.6] justify-end">
        <CustomButton
          text={strings.LOG_IN_WITH_PHONE_NUMBER}
          onPress={() => navigation.navigate('LoginScreen')}
        />

        <Text
          className={`my-5 font-bold text-center ${
            isDark ? 'text-white' : 'text-gray-600'
          }`}>
          {strings.OR}
        </Text>

        <CustomButton
          text={strings.LOG_IN_WITH_GOOGLE}
          leftImg={require('../../assets/images/ic_google.png')}
        />
        <CustomButton
          text={strings.LOG_IN_WITH_FACEBOOK}
          leftImg={require('../../assets/images/ic_facebook.png')}
        />
        <CustomButton
          text={strings.LOG_IN_WITH_APPLE}
          leftImg={require('../../assets/images/ic_apple.png')}
        />
        <View className="flex-row items-center justify-center">
          <Text
            className={`${
              isDark == true ? 'text-white' : 'text-black'
            }  font-[Poppins-Medium]`}>
            New Here?{' '}
          </Text>
          <Text
            className="text-md text-[#F9622E] underline  font-[Poppins-Bold]"
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            Sign Up
          </Text>
        </View>
      </View>
      {/* Modal Component For themes exchange and Language Selection */}
      <ModalComponent
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}>
        <View
          className="bg-white p-4"
          style={{minHeight: moderateScale(height / 6)}}>
          <Text className="text-black" style={styles.headingStyle}>
            {strings.CHOOSE_LANGUAGE}
          </Text>
          <TouchableOpacity
            onPress={() => onPressLang('en')}
            activeOpacity={0.6}
            className="flex-row items-center justify-between my-1">
            <Text
              style={[
                styles.langTextStyle,
                {
                  color: lang == 'en' ? colors.redColor : colors.gray4,
                },
              ]}>
              English
            </Text>
            <Image
              tintColor={lang == 'en' ? colors.redColor : colors.gray4}
              source={require('../../assets/images/ic_blue_tick.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressLang('ar')}
            activeOpacity={0.6}
            className="flex-row items-center justify-between my-1">
            <Text
              style={[
                styles.langTextStyle,
                {
                  color: lang == 'ar' ? colors.redColor : colors.gray4,
                },
              ]}>
              Arabic
            </Text>
            <Image
              tintColor={lang == 'ar' ? colors.redColor : colors.gray4}
              source={require('../../assets/images/ic_blue_tick.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressLang('urd')}
            activeOpacity={0.6}
            className="flex-row items-center justify-between">
            <Text
              style={[
                styles.langTextStyle,
                {
                  color: lang == 'urd' ? colors.redColor : colors.gray4,
                },
              ]}>
              Urdu
            </Text>
            <Image
              tintColor={lang == 'urd' ? colors.redColor : colors.gray4}
              source={require('../../assets/images/ic_blue_tick.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          className="bg-white p-4"
          style={{minHeight: moderateScale(height / 6)}}>
          <Text className="text-black" style={styles.headingStyle}>
            {strings.CHOOSE_THEME}
          </Text>
          <TouchableOpacity
            onPress={() => onPressTheme(true)}
            activeOpacity={0.6}
            className="flex-row items-center justify-between">
            <Text
              style={[
                styles.langTextStyle,
                {
                  color: isDark == true ? colors.redColor : colors.gray4,
                },
              ]}>
              DARK
            </Text>
            <Image
              tintColor={isDark == true ? colors.redColor : colors.gray4}
              source={require('../../assets/images/moon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPressTheme(false)}
            activeOpacity={0.6}
            className="flex-row items-center justify-between my-2">
            <Text
              style={[
                styles.langTextStyle,
                {
                  color: isDark === false ? colors.redColor : colors.gray4,
                },
              ]}>
              LIGHT
            </Text>
            <Image
              tintColor={isDark == false ? colors.redColor : colors.gray4}
              source={require('../../assets/images/sunImg.png')}
            />
          </TouchableOpacity>
        </View>
      </ModalComponent>
      {/* Modal Component For themes exchange and Language Selection */}
    </WrapperContainer>
  );
};

export default SecondSplashScreen;
const styles = StyleSheet.create({
  headingStyle: {
    fontSize: textScale(16),
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  langTextStyle: {
    fontSize: textScale(14),
    textTransform: 'uppercase',
    color: 'black',
    marginVertical: moderateScaleVertical(8),
    fontWeight: '600',
  },
});
