import {StyleSheet, Platform, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../assets/Colors';
import {ResHeight, ResWidth} from '../../utils/responsive';

const InputPrimary = props => {
  const [border, setBorder] = useState('gray');
  const onFocusForm = () => {
    setBorder('#0066CB');
  };
  const onBlurForm = () => {
    setBorder('white');
  };

  return (
    <View style={styles.wrapInputEmail(border)}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.inputEmail}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={'black'}
        onChangeText={props.onChangeText}
        value={props.value}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  wrapInputEmail: border => ({
    backgroundColor: 'white',
    paddingHorizontal: ResHeight(16),
    borderRadius: 15,
    borderColor: border,
    borderWidth: 1,
  }),
  inputEmail: {
    color: 'black',
    fontWeight: '400',
    fontSize: ResWidth(14),
    paddingVertical: 15,
  },
});
