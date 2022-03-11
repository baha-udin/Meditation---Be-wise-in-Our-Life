import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';
import {ResHeight, ResWidth} from '../../utils/responsive';

const InputPrimary = props => {
  return (
    <View style={styles.wrapInputEmail}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.inputEmail}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={'black'}
      />
    </View>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  wrapInputEmail: {
    backgroundColor: 'white',
    paddingVertical: ResHeight(3),
    paddingHorizontal: ResWidth(16),
    borderRadius: 15,
  },
  inputEmail: {
    color: 'black',
    fontWeight: '400',
    fontSize: ResWidth(14),
  },
});
