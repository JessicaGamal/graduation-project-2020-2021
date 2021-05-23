import {Entypo, MaterialCommunityIcons, } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, StyleSheet,ImageBackground,TextInput ,_ScrollView } from "react-native";
import React from 'react';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';

const CONTENT = [
  {
    title: 'comment',
  },
];
export default class PostScreen extends React.Component {
    state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View duration={40} style={[styles.header2, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <View style={styles.FooterMenu2}>
          <View style={styles.Icon}>
                  <MaterialCommunityIcons name='comment-outline'	size={20}	color='#fff'/>
          </View>
        <Text style={styles.headerText}>Comments</Text>
        
        </View>
      </Animatable.View>
    );
  };

  render() {

      return (
        
        <ScrollView>
           
       <ImageBackground source={require("./Images/w3.jpg")}  style={styles.backgriundImage} >
           <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
        <View style={styles.Row2}>
           <Image source={require('./Images/p1.jpg')} style={styles.Profile}/>
           <View style={styles.searchView}>
            <TextInput placeholder="write a comment" multiline  style={styles.searchtext}/>
            </View>
            <View style={styles.column}>
            <View style={styles.Icon}>
								<MaterialCommunityIcons	name='postage-stamp'	size={22}	color='#333'/>
							</View>
							<Text style={styles.Textblack}>Post</Text>
						</View>
        </View>
        </TouchableOpacity>
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
        Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving. 
          </Text>
				</View>
			
        <View style={styles.Footer}>
				<View style={styles.FooterCount}>
        <View style={styles.Row}>
      
       
						</View>
					</View>
				</View>
      
        <View style={styles.BottomDivider}/>
			</View>

            <View style={styles.Container}>
				<View style={styles.Header}>
        <View style={styles.Row}>
          <Image source={require('./Images/dd.jpg')} style={styles.Profile}/>
						<View style={{ paddingLeft: 10 }}>
            <View style={styles.User}>
            <Text style={styles.ppText}>Dalia Mohamed</Text></View>
            <View style={styles.Row}>
            <View style={styles.ppTime}>
            <Text style={styles.ppText}>5/14/2020</Text></View>
							</View>
						</View>
					</View>

				</View>

				<View style={styles.Post}>
        <Text style={styles.Text}>
        Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving. 
          </Text>
				</View>
			
        <View style={styles.Footer}>
				<View style={styles.FooterCount}>
        <View style={styles.Row}>
      
       
						</View>
					</View>
				</View>
      
        <View style={styles.BottomDivider}/>
			</View>
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
        Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving. 
          </Text>
				</View>
			
        <View style={styles.Footer}>
				<View style={styles.FooterCount}>
        <View style={styles.Row}>
      
       
						</View>
					</View>
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
  Time:{
    fontSize: 9,
    color: "#fff",
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
  TextCount:{
    fontSize: 11,
    color: "#fff",
    marginHorizontal:40,
  },
  Separator:{
    width: '100%',
    height: 1,
    backgroundColor: "#fff",
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
    fontSize: 14,
    color: "#fff",
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
  Row3:{
    flexDirection: "row",
    width: "100%",
    alignItems: "center",

  
    },
  searchView:{
    
    backgroundColor: "#FFF",
    borderRadius: 40,
    borderColor: '#333', 
    borderWidth: 3, 
    width: '70%',
  },
  commentView:{
    
    backgroundColor: "#FFF",
    borderRadius: 40,
    borderColor: '#333', 
    borderWidth: 3, 
    width: '90%',
  },
  searchtext:{
    paddingHorizontal: 20, 
    paddingVertical:7,
    fontSize: 15, 
    color: "#ccccef"
  },
  commenttext:{
    paddingHorizontal: 20, 
    paddingVertical:7,
    fontSize: 15, 
    color: "#333"
  },
  header2: {
    padding: 0,
  },
  headerText: {
    fontSize: 14,
    color: "#fff",
  
  },
  content: {
    padding: 0,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: "transparent",
  },
  inactive: {
    backgroundColor: "transparent",
  },
  inputwrapper:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    backgroundColor:"#2e64e515",
  },
  inputfield:{
      justifyContent:"center",
      alignItems:"center",
      fontSize:12,
      width:"90%"
  },

  });



