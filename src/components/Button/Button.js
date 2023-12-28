import React, {forwardRef, useImperativeHandle} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = forwardRef((props, ref) => {
  const {onPress, textValue} = props;

  function addition() {
    console.log('THIS IS ADDITION');
  }
  function subtraction() {
    console.log('THIS IS SUBTRACTION');
  }
  function customRefFunction() {
    console.log('THIS IS CUSTOM COMPONENT');
  }

  useImperativeHandle(ref, () => ({
    addition,
    subtraction,
    customRefFunction,
  }));

  return (
    <TouchableOpacity onPress={onPress} ref={ref}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{textValue}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  buttonView: {
    height: 40,
    width: 40,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Button;
