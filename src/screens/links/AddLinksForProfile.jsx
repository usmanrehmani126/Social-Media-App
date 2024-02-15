import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperComponent';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import strings from '../../constants/lang';
import ModalComponent from '../../components/ModalComponent';
import TextinputComponent from '../../components/TextinputComponent';
import CustomButton from '../../components/CustomButton';

const AddLinksForProfile = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  return (
    <WrapperContainer>
      <View className="px-4">
        <View className=" flex-row items-center mt-2 ">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center ">
            <MaterialIcons name="arrow-back" color={'black'} size={22} />
          </TouchableOpacity>
          <Text className="font-[Poppins-SemiBold] text-black text-lg ml-20">
            {strings.ADD_LINKS}
          </Text>
        </View>
      </View>

      <View className="px-4 mt-10">
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          activeOpacity={0.6}
          className="flex-row items-center ">
          <AntDesign name="pluscircleo" color={'#F9622E'} size={22} />
          <Text className="text-black font-[Poppins-SemiBold] ml-8">
            Add eternal Links
          </Text>
        </TouchableOpacity>
        <View
          style={{borderWidth: 0.3, borderColor: '#D3D3D3', marginVertical: 6}}
        />

        <FlatList
          data={[{}, {}]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                className="flex-1 my-3 flex-row items-center">
                <View style={{flex: 0.1}}>
                  <Feather name="link-2" color={'#F9622E'} size={22} />
                </View>
                <View style={{flex: 0.8}}>
                  <Text
                    className="text-blue-400 text-sm font-[Poppins-Regular]"
                    numberOfLines={1}>
                    https://www.youtube.com/channel/UCsCUMYE_MPUEjVysgoWnSOQ
                  </Text>
                </View>
                <View style={{flex: 0.1}}>
                  <Entypo name="chevron-right" color={'#F9622E'} size={26} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <ModalComponent
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}>
        <View>
          <TextinputComponent
            placeholder={strings.TITLE}
            onChangeText={txt => setTitle(txt)}
            value={title}
          />
          <TextinputComponent
            placeholder={strings.LINKS}
            onChangeText={txt => setUrl(txt)}
            value={url}
          />
          <CustomButton text={strings.SAVE} />
        </View>
      </ModalComponent>
    </WrapperContainer>
  );
};

export default AddLinksForProfile;

const styles = StyleSheet.create({});
