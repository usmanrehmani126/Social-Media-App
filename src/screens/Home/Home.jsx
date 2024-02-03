import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import strings from '../../constants/lang';

const Home = () => {
  return (
    <View>
      <Text className="font-[Barlow-SemiBold] text-black"> {strings.HOME}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
