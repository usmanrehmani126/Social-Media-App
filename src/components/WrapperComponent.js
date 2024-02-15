import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const WrapperContainer = ({style = {}, children}) => {
  const isDark = useSelector(state => state.appSetting.isDark);
  return (
    <>
      <View
        style={{
          ...styles.container,
          ...style,
          backgroundColor: isDark ? 'black' : 'white',
        }}>
        {children}
      </View>
    </>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
