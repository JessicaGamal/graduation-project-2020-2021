
import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function CourseName() {
  const [enteredName, setEnteredName] = useState('');

  const NameInputHandler = (enteredText) => {
    setEnteredName(enteredText);
  }

  const addNameHandler = () => {
    console.log(enteredName);
  }
  

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course name"
          style={styles.input}
          onChangeText={NameInputHandler}
          value={enteredName}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: '85%'
  }
});
