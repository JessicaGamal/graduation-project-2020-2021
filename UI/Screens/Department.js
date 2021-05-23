import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground,  StyleSheet } from "react-native";


export default class  DepartmentScreen extends React.Component {
    render() {
      return (
        
        <ImageBackground
        source={require("./Images/18.jpg")}
        style={styles.backgriundImage}
      >
         
          <ScrollView>
        
      <View style={styles.titlestyle}>
            <Text style={styles.titletextstyle}>
              Departments 
            </Text>
            </View>
            
      <View style={styles.header}>
        
           
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Cs")}
                style={styles.button } >
                <Text style={styles.text}>Computer science</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Cs")}
                style={styles.button} >
                <Text style={styles.text}>Information system</Text>
              </TouchableOpacity>
              
              </View>
             
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Cs")}
                style={styles.button} >
                <Text style={styles.text}>Software</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Cs")}
                style={styles.button} >
                <Text style={styles.text}>Medical</Text>
              </TouchableOpacity>
              
              </View>
            </View>
            
            </ScrollView>
            </ImageBackground>
         
        
      );
    }
  }


  const styles = StyleSheet.create({

    backgriundImage: {
        width: "100%",
        height: "100%",
      },
    ////////////////////////////
  
    ////////////////////////////
    header:{
      paddingHorizontal: 100, 
      justifyContent:'center',
      alignContent:'center',
    },
   text:
   {
     fontSize:20,color:"#333",
   fontWeight:'bold',
   fontStyle:'italic'
  },
    ////////////////////////////
    button:{
      alignItems: "center", 
      justifyContent: "center",  
      height: 66, 
      width: 200, 
      borderRadius: 15, 
      backgroundColor: "#A1DED2",
      marginHorizontal:8,
       marginVertical:20 
    },
    
    titlestyle:
    {
      flexDirection: 'column',
      borderRadius: 10,
      width: '100%', 
      padding:10 ,
      marginTop:20,
      marginHorizontal:80,
      
     
    },
    ////////////////////
    titletextstyle:
    {
      fontWeight: 'bold',
      fontSize: 40,
      color:'#fff',
      textDecorationLine: 'underline',
      
    },
    

    
    
  });