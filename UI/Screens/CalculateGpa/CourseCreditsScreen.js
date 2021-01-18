
import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function CourseCredits() {
  const [enteredHours, setEnteredHours] = useState('');

  const HoursInputHandler = (enteredText) => {
    setEnteredHours(enteredText);
  }

  const addNameHandler = () => {
    console.log(enteredHours);
  }
  

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course hours"
          style={styles.input}
          onChangeText={HoursInputHandler}
          value={enteredHours}
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
    padding: 2,
    width: '75%'
  }
});
