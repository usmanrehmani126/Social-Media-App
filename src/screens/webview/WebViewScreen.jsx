import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WrapperContainer from '../../components/WrapperComponent';

const WebViewScreen = ({navigation}) => {
  const isDarKTheme = useSelector(state => state.appSetting.isDark);

  return (
    <WrapperContainer>
      <View className="flex-1">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          className="py-2 px-2">
          <MaterialIcons
            name="arrow-back"
            color={isDarKTheme == true ? 'white' : 'black'}
            size={26}
          />
        </TouchableOpacity>
        <WebView source={{uri: 'https://reactnative.dev/'}} />
      </View>
    </WrapperContainer>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({});
