import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SearchScreen from '../Tabs/SearchScreen';
import CreatePost from '../Tabs/CreatePost';
import NotificationScreen from '../Tabs/NotificationScreen';
import Profile from '../Tabs/Profile';
import Home from './Home';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  return (
    <View className="flex-1">
      {selected == 0 ? (
        <Home />
      ) : selected == 1 ? (
        <SearchScreen />
      ) : selected == 2 ? (
        <NotificationScreen />
      ) : selected == 3 ? (
        <Profile />
      ) : selected == 4 ? (
        <CreatePost />
      ) : null}

      <View style={styles.bottomView}>
        <Pressable
          onPress={() => {
            setSelected(0);
          }}
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 0 ? 2 : 0,
              borderColor: '#F9622E',
            },
          ]}>
          <Foundation
            name="home"
            size={24}
            color={true ? '#F9622E' : '#797979'}
          />
        </Pressable>
        <Pressable
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 1 ? 2 : 0,
              borderColor: '#F9622E',
            },
          ]}
          onPress={() => {
            setSelected(1);
          }}>
          <AntDesign
            name="search1"
            size={24}
            color={selected == 1 ? '#F9622E' : '#797979'}
          />
        </Pressable>
        <TouchableOpacity
          style={styles.bottomTabSeparate}
          onPress={() => {
            setSelected(4);
          }}>
          <Ionicons name={'add-circle-outline'} size={26} color={'white'} />
        </TouchableOpacity>
        <Pressable
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 2 ? 2 : 0,
              borderColor: '#F9622E',
            },
          ]}
          onPress={() => {
            setSelected(2);
          }}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={selected == 2 ? '#F9622E' : '#797979'}
          />
        </Pressable>
        <Pressable
          style={[
            styles.bottomTab,
            {
              borderTopWidth: selected == 3 ? 2 : 0,
              borderColor: '#F9622E',
            },
          ]}
          onPress={() => {
            setSelected(3);
          }}>
          <Feather
            name="user"
            size={24}
            color={selected == 3 ? '#F9622E' : '#797979'}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomTab: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabSeparate: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 24,
    backgroundColor: '#F9622E',
    borderRadius: 30,
    height: 60,
    width: 60,
  },
});
