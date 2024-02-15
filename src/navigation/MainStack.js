import AddPost from '../screens/AddPost/AddPost';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import EditProfileScreen from '../screens/Edit/EditProfileScreen';
import Main from '../screens/Home/Main';
import SettingScreen from '../screens/Settings/SettingScreen';
import CreatePost from '../screens/Tabs/CreatePost';
import AddLinksForProfile from '../screens/links/AddLinksForProfile';

import FirstSplashScreen from '../screens/onBoarding/FirstSplashScreen';
import SecondSplashScreen from '../screens/onBoarding/SecondSplashScreen';
import OtpScreen from '../screens/otpScreen/OtpScreen';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={'FirstSplashScreen'}
        component={FirstSplashScreen}
        options={{headerShown: false}}
      />
    
      <Stack.Screen
        name={'Main'}
        component={Main}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'SettingScreen'}
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'EditProfileScreen'}
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'AddLinksForProfile'}
        component={AddLinksForProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'CreatePost'}
        component={CreatePost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'AddPost'}
        component={AddPost}
        options={{headerShown: false}}
      />
    </>
  );
}
