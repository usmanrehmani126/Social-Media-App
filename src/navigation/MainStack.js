import LoginScreen from '../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import Main from '../screens/Home/Main';

import FirstSplashScreen from '../screens/onBoarding/FirstSplashScreen';
import SecondSplashScreen from '../screens/onBoarding/SecondSplashScreen';
import OtpScreen from '../screens/otpScreen/OtpScreen';

export default function (Stack) {
  return (
    <>
      {/* <Stack.Screen
        name={'FirstSplash'}
        component={FirstSplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SecondSplash'}
        component={SecondSplashScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name={'Main'}
        component={Main}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={'RegisterScreen'}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={'OtpScreen'}
        component={OtpScreen}
        options={{headerShown: false}}
      />  */}
    </>
  );
}
