import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground,  StyleSheet } from "react-native";


export default class  DepartmentScreen extends React.Component {
    render() {
      return (
        
        <ImageBackground
        source={require("./Images/w2.jpg")}
        style={styles.backgriundImage}
      >
         
          <ScrollView>
        
      <View style={styles.titlestyle}>
            <Text style={styles.titletextstyle}>
              Summer Time
            </Text>
            </View>
            
      <View style={styles.header}>
        
           
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button } >
                <Text style={styles.text}>P&V</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button} >
                <Text style={styles.text}>Graphics</Text>
              </TouchableOpacity>
              
              </View>
             
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button} >
                <Text style={styles.text}>Programming</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button} >
                <Text style={styles.text}>DB admin.</Text>
              </TouchableOpacity>
              
              </View>

              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button } >
                <Text style={styles.text}>P&V</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button} >
                <Text style={styles.text}>Graphics</Text>
              </TouchableOpacity>
              
              </View>
             
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button} >
                <Text style={styles.text}>Programming</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pv")}
                style={styles.button} >
                <Text style={styles.text}>DB admin.</Text>
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
     paddingHorizontal: 20, 
    
    },
   text:
   {
     fontSize:14,
     color:"#333",
   fontWeight:'bold',
   fontStyle:'italic'
  },
    ////////////////////////////
    button:{
      alignItems: "center", 
      justifyContent: "center",  
      height: 40, 
      width: 120, 
      borderRadius: 15, 
      backgroundColor: "#A1DED2",
      marginHorizontal:1,
      marginVertical:5, 
    },
    
    titlestyle:
    {
      flexDirection: 'column',
      borderRadius: 10,
      width: '100%', 
      padding:10 ,
      marginTop:20,
      marginHorizontal:10,
      
     
    },
    ////////////////////
    titletextstyle:
    {
      fontWeight: 'bold',
      fontSize: 30,
      color:'#fff',
      textDecorationLine: 'underline',
      
    },
    

    
    
  });