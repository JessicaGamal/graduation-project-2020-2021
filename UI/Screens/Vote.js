import {Entypo, MaterialCommunityIcons, } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, StyleSheet,ImageBackground,TextInput ,_ScrollView } from "react-native";
import React from 'react';
import CustomMultiPicker from "react-native-multiple-select-list";

export default class PostScreen extends React.Component {

    userlist ={
        "123":"V1",
        "124":"V2",
      }
  render() {

      return (
        
        <ScrollView>
           
       <ImageBackground source={require("./Images/w3.jpg")}  style={styles.backgriundImage} >
       <View style={styles.Row2}>
           <View style={styles.searchView}>
                <TextInput placeholder="write Your question" multiline  style={styles.searchtext}/>
                <View style={styles.Row}>
                <Text style={{marginLeft:10,fontSize:15,}}>V1:</Text>
                <TextInput placeholder="write Your first choice" multiline  style={styles.votetext}/>
                </View>
                <View style={styles.Row}>
                <Text style={{marginLeft:10,fontSize:15,}}>V1:</Text>
                <TextInput placeholder="write Your second choice" multiline  style={styles.votetext}/>
                </View>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
            <View style={styles.column}>
            <View style={styles.Icon}>
								<MaterialCommunityIcons	name='arrow-right-bold-circle-outline' size={25}	color='#333'/>
							</View>
							<Text style={styles.Textblack}>Post</Text>
						</View>
            </TouchableOpacity>
        </View>
				<View style={styles.Divider}/>


        <View style={styles.Container}>
				<View style={styles.Header}>
        <View style={styles.Row}>
          <Image source={require('./Images/4.jpg')} style={styles.Profile}/>
						<View style={{ paddingLeft: 10 }}>
            <View style={styles.User}>
            <Text style={styles.ppText}>Nourhan Magdy</Text></View>
            <View style={styles.Row}>
            <View style={styles.ppTime}>
            <Text style={styles.ppText}>1/13/2021</Text></View>
							</View>
						</View>
					</View>

				</View>

		<View style={styles.Post}>
            <Text style={styles.Text}>
            Artificial intelligence (AI) . 
            </Text>
		</View>
       <View style={{width:"70%"}}>
                <CustomMultiPicker
                options={this.userlist}
                search={false} 
                multiple={false} 
                multiline
                placeholder={"Vote"}
                placeholderTextColor={'#757575'}
                returnValue={"label"} // label or value
                callback={(res)=>{ console.log(res) }} // callback, array of selected items
                rowBackgroundColor={"#eee"}
                rowHeight={40}
                rowRadius={5}
                iconColor={"#53D6BB"}
                iconSize={30}
                selectedIconName={"checkbox"}
                unselectedIconName={"ios-checkbox-outline"}
               
            />
		</View>	
        <View style={styles.BottomDivider}/>
			</View>
      </ImageBackground> 
          </ScrollView>
      
      );
    }
  }


  const styles = StyleSheet.create({
  backgriundImage: {
    width: "100%",
    height: "100%",
  },
  Container:{
    flex: 1,  
  },
  Header:{
    height: 50,
    flexDirection: "row",
    alignItems:"center",
   justifyContent:'space-between',
   marginTop: 30,
   padding: 11,
  },
  Profile:{
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    marginHorizontal: 5,
    marginVertical:5,
   },
  Row:{
    alignItems:"center",
    flexDirection: "row",
  },
  column:{
    alignItems:"center",
    flexDirection: "column",
    marginHorizontal:10,
  },
  User:{
    fontSize: 12,
    fontWeight: 'bold',
    color: "#05A7A4",
  },
 
  Post:{
    fontSize: 12,
    color: "#fff",
    lineHeight:16,
    padding: 11,
  },
  Footer:{
    padding: 11,
  },
  FooterCount:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },

 
  FooterMenu2:{
    flexDirection: "row",
   padding:15,
   paddingHorizontal:140,
  
  },
 
  Icon:{
    marginRight: 6,
  },
  Text:{
    fontSize: 14,
    color: "#fff",
  },
  ppText:{
    fontSize: 14,
    color: "#fff",
    fontWeight:'bold',
  },
  Textblack:{
    fontSize: 15,
    color: "#333",
    marginLeft:-5,
  },
 BottomDivider:{
    width: '100%',
    height:10,
    backgroundColor: "#fff",
 },

Divider:{
	width: "100%",
	height: 0.5,
	backgroundColor: "#f0f0f0",
  marginTop:15,
  },
  Row2:{
	flexDirection: "row",
	backgroundColor: "#ffffff",
	width: "100%",
	alignItems: "center",

  },
 
  searchView:{
    
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: '#333', 
    borderWidth: 3, 
    marginLeft:20,
    marginBottom:20,
    marginTop:20,
    width: '80%',
  },

  searchtext:{
    paddingHorizontal: 20, 
    paddingVertical:7,
    fontSize: 18, 
    color: "#ccccef"
  },
  votetext:{
    paddingHorizontal: 5, 
    paddingVertical:7,
    fontSize: 15, 
    color: "#ccccef"
  },
userlist:{
width:"30%",
fontSize:10,
color:"#fff"
},
  });



