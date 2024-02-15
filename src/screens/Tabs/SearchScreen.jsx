import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import WrapperContainer from '../../components/WrapperComponent';
import TextinputComponent from '../../components/TextinputComponent';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../constants/responsiveSize';
import {FlashList} from '@shopify/flash-list';
import FastImageComponent from '../../components/FastImageComponent';
import colors from '../../utlis/colors';
import SerachBar from '../../components/SearchBar';

const SearchScreen = ({navigation}) => {
  const {isDark, lang} = useSelector(state => state.appSetting);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          marginTop: index % 2 == 0 ? moderateScaleVertical(16) : 0,
        }}>
        <FastImageComponent
          url={
            'https://plus.unsplash.com/premium_photo-1705421623622-7157fbeec959?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          imageStyle={styles.imageStyle}
        />
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <View>
        {/* <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          className="py-2">
          <MaterialIcons
            name="arrow-back"
            color={isDark == true ? 'white' : 'black'}
            size={26}
          />
        </TouchableOpacity> */}
        <SerachBar
          isSearch={true}
          placeholder="Search...."
          inputStyle={{marginHorizontal: moderateScale(8)}}
        />
        <FlatList
          data={[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ]}
          numColumns={2}
          renderItem={renderItem}
          estimatedItemSize={width / 2}
          ItemSeparatorComponent={() => (
            <View style={{height: moderateScale(20)}} />
          )}
        />
      </View>
    </WrapperContainer>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  imageStyle: {
    width: width / 2.2,
    height: height / 3,
    borderWidth: 0.5,
    borderRadius: moderateScale(10),
    marginLeft: 12,
  },
});
