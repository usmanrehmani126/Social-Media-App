import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
const ModalComponent = ({
  children,
  onBackdropPress = () => {},
  style = {},
  isVisible,
}) => {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={{...styles.style, ...style}}>
        {children}
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
    style:{

    }
});
