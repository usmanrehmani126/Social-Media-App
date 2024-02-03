import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
export default function CustomHeader({title}) {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center">
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" color={'white'} size={26} />
      </TouchableOpacity>
      <Text className="text-white text-md ml-28">Hello{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
