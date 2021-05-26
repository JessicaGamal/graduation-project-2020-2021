import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Entypo, MaterialCommunityIcons, } from '@expo/vector-icons';
import Picker from './Picker';
import Picker2 from './Picker2';
import Picker3 from './Picker3';
export default class EditprofileScreen extends Component {
  
  render() {
  
    return (
        <View style={styles.BG}>
      <View style={styles.container}>
      




        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <MaterialCommunityIcons name='mail' size={20}	color='#94C2CB'/>
        </View>
          <TextInput style={styles.inputText}  placeholder="Current e-mail"   placeholderTextColor="#003f5c"  />
        </View>





        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <MaterialCommunityIcons name='mailbox' size={20}	color='#94C2CB'/>
        </View>
          <TextInput style={styles.inputText}  placeholder="New e-mail"   placeholderTextColor="#003f5c"  />
        </View>



        <View style={styles.inputView} >
        <View style={styles.Icon}>
            <Entypo name='user' size={20} color='#94C2CB' 	/>
        </View>
          <TextInput style={styles.inputText}  placeholder="New username"   placeholderTextColor="#003f5c"  />
        </View>
        

        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <MaterialCommunityIcons name='form-textbox-password' size={20}	color='#94C2CB'/>
        </View>
          <TextInput style={styles.inputText}  placeholder="New password"   placeholderTextColor="#003f5c"  />
        </View>

       


        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <Entypo name='old-phone' size={20} color='#94C2CB' />
        </View>
          <TextInput style={styles.inputText}  placeholder="Phone"   placeholderTextColor="#003f5c"  />
        </View>


        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <Entypo name='location' size={20} color='#94C2CB' />
        </View>
          <TextInput style={styles.inputText}  placeholder="Address"   placeholderTextColor="#003f5c"  />
        </View>

        

        <View style={styles.row}>
        <View style={styles.column}> 
        <Text style={styles.ppText}>Gender :</Text>
        <View style={ styles.pick}>
        <Picker /> 
        </View>
        </View>
        <View style={styles.column}> 
        <Text style={styles.ppText}>Level :</Text>
        <View style={ styles.pick}>
        <Picker2 /> 
        </View>
        </View>

        <View style={styles.column}> 
        <Text style={styles.ppText}>Department :</Text>
        <View style={ styles.pick}>
        <Picker3 /> 
        </View>
        </View>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Edit</Text>
        </TouchableOpacity>
       
      </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
    BG: {
        flex: 1,
        backgroundColor: '#BFF0E6',
      
      },
  container: {
    flex: 1,
    margin:20,
  },
  tinyLogo: {
    width: 240,
    height: 80,
    marginBottom: 20

  },
  inputView: {
    width: "90%",
    backgroundColor: "#F0F3F4",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    flexDirection:"row",
  },
  inputText: {
    height: 50,
    color: "black"
  },
  loginBtn: {
    width: "40%",
    backgroundColor: "#1A6F4E",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:50,
    marginLeft:100,
  },
  loginText: {
    color: "white",
    fontSize:18,
  },
Icon:{
     margin:15,
  },
  ppText:{
    fontSize: 18,
    color: "#333",
    fontWeight:'bold',
    marginLeft:2,
    marginBottom:3,
  },
  pick:
  {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333",
    width:"90%",
    backgroundColor:"#fff",

  },
row:
{
    flexDirection:"row",
},
column:
{
    flexDirection:"column",
    marginRight:5,
},
});
