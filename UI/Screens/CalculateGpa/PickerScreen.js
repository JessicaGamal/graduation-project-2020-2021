import React, { Component } from 'react';
import { View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class picker extends Component {
    state = {
        grade: 'java',
    };
  
  render() {
    return (
        <View>
            <Picker
                selectedValue={
                    this.state.grade
                }
                style={
                    {height: 50, width: 100}
                }
                onValueChange = {
                    (itemValue, itemIndex) =>
                    this.setState({grade: itemValue})
                }>
                <Picker.Item label="A+" value="a" />
                <Picker.Item label="A" value="b" />
                <Picker.Item label="B+" value="c" />
                <Picker.Item label="B" value="d" />
                <Picker.Item label="C+" value="e" />
                <Picker.Item label="C" value="f" />
                <Picker.Item label="D+" value="g" />
                <Picker.Item label="D" value="h" />
                <Picker.Item label="F" value="i" />
              </Picker> 
        </View>
    );
  }
}
