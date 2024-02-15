import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperComponent';
import strings from '../../constants/lang';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePost = () => {
  const navigation = useNavigation();

  const [isPostImage, setIsPostImage] = useState('');

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
      // multiple:true
    }).then(image => {
      if (image) {
        setIsPostImage('data:image/jpeg;base64,' + image.data);
        console.log(isPostImage)
        // setTimeout(() => {
         navigation.navigate('AddPost', { isPostImage:[image]});
        // }, 2000);
      } else {
        alert('Issue while picking image');
      }
    });
  };
  // const onPressCamera = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //   })
  //     .then(img => {
  //       setIsPostImage('data:image/jpeg;base64,' + img.data);
  //       navigation.navigate('AddPost', {isPostImage});
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  return (
    <WrapperContainer>
      <View className=" flex-row items-center justify-between mt-2 px-4 ">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center ">
          <MaterialIcons name="arrow-back" color={'black'} size={22} />
        </TouchableOpacity>
        <Text className="font-[Poppins-SemiBold] text-black text-lg">
          {strings.ADD_POST}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center ">
          <MaterialIcons name="arrow-right" color={'black'} size={22} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="mt-8 "
        activeOpacity={0.6}
        onPress={() => uploadImage()}>
        <Image
          source={{
            uri: isPostImage
              ? isPostImage
              : 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
          }}
          className="w-full h-60"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        className="w-20 h-20 rounded-full bg-[#F9622E] items-center justify-center absolute bottom-32 right-12 ">
        <Feather name="camera" color={'white'} size={22} />
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
