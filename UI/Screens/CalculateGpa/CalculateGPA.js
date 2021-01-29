import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import PickerScreeen from './PickerScreen';
import CourseNameScreen from './CourseNameScreen';
import CourseCreditsScreen from './CourseCreditsScreen';

export default class CalculateGPA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Cource Name', 'Grade', 'Credits'],
      tableData: [
        [<CourseNameScreen/>, <PickerScreeen/> , <CourseCreditsScreen/>],
        [<CourseNameScreen/>, <PickerScreeen/> , <CourseCreditsScreen/>],
        [<CourseNameScreen/>, <PickerScreeen/> , <CourseCreditsScreen/>],
        [<CourseNameScreen/>, <PickerScreeen/> , <CourseCreditsScreen/>],
        [<CourseNameScreen/>, <PickerScreeen/> , <CourseCreditsScreen/>]
      ]
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={require('./gpa-calculator.jpg')} style={styles.backgriundImage}>
          </ImageBackground>
        
          <View style={styles.subContainer}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#A1DED2'}}>
                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={this.state.tableData} textStyle={styles.text}/>
              </Table>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <TouchableOpacity>
                    <Text>+ Add Course</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Current GPA"
                  style={styles.input}
                  />
                <TextInput
                  placeholder="Total Credits"
                  style={styles.input}
                  />
                </View>
                <View style={styles.button}>
                  <TouchableOpacity
                  //onPress={}
                  >
                    <Text>Calculate GPA</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  subContainer: {
    flex:1,
    padding: 12, 
    paddingTop: 50, 
    backgroundColor: '#fff', 
    justifyContent:'center' 
   },
  backgriundImage: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center'
  },
  head: {
    height: 40, backgroundColor: '#BFF0E6' 
   },
 text: {
    margin: 6 
   },
 buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10
 },
 button: {
   backgroundColor: '#BFF0E6',
   width:"40%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:20,
   marginBottom:1
 },
 inputContainer: {
  flexDirection: 'row',
  paddingTop:20
},
input: {
  flexDirection: 'column',
  width: '50%', 
  borderColor: '#A1DED2', 
  borderWidth: 2, 
  padding: 7 
}
});
