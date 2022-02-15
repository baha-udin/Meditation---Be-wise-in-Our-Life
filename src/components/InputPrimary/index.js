import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Colors from '../../assets/Colors';

const InputPrimary = props => {
  return (
    <View style={styles.wrapInputEmail}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.inputEmail}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  wrapInputEmail: {
    marginTop: '10%',
    backgroundColor: 'white',
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  inputEmail: {
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
  },
});
