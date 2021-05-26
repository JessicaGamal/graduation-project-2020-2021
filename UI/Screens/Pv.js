import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput,ScrollView, } from 'react-native';


export default class AiScreen extends React.Component {

render() {
    return (
      <ScrollView style={styles.container}> 



       <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Description</Text>    
          </View>
        </View>




          <View style={styles.Header}>
            <Text style={styles.text}>Artificial Intelligence (AI) is a rapidly advancing technology, 
              Made possible by the Internet.</Text>    
          </View>




          <View style={styles.inputTwo}>
          
              <View style={styles.HeaderTwo}>
                <Text style={styles.textTwo}>Step 1 : Photography</Text>    
              </View>
              


              <View styles={styles.item}>
                <Text style={styles.Link}>First link</Text>
              </View>
          
              <View styles={styles.item}>
                <Text style={styles.Link}>Second link</Text>
              </View>


              <View style={{flexDirection:"row",alignItems:'center'}}>

                  <View style={styles.courseNameComponent}>
                        <View>
                           <TextInput placeholder="Link" multiline  style={styles.input}/>
                        </View>
                  </View>

                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.add} >
                      <Text>Add tutorial</Text>
                    </TouchableOpacity>
                  </View>   
              </View>
          </View>
         




          <View style={styles.inputTwo}>
          
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Step 2 : Video production</Text>    
          </View>
          


          <View styles={styles.item}>
            <Text style={styles.Link}>First link</Text>
          </View>
      
          <View styles={styles.item}>
            <Text style={styles.Link}>Second link</Text>
          </View>


          <View style={{flexDirection:"row",alignItems:'center'}}>

              <View style={styles.courseNameComponent}>
                    <View>
                       <TextInput placeholder="Link" multiline  style={styles.input}/>
                    </View>
              </View>

              <View style={styles.button}>
                <TouchableOpacity onPress={this.add} >
                  <Text>Add tutorial</Text>
                </TouchableOpacity>
              </View>   
          </View>
      </View>
        
        </ScrollView>
    );}

}
const styles = StyleSheet.create({
  container: {
    flex: 5, 
    paddingLeft:5,
    paddingRight:5,
    //backgroundColor: '#89E1C4',
    
  },
  Header:{
    flexDirection: "row",
    justifyContent: "center", 
    paddingTop: 7,
    paddingBottom: 7
  },
  HeaderTwo:{
    flexDirection: "row",
    justifyContent: 'flex-start', 
    paddingTop: 7,
    paddingBottom: 7
  },
  inputThree: {
  
    padding: 7 ,
    borderRadius:5,
    marginTop:10,
    marginBottom:5,
    backgroundColor:'#D1F2EB',
   
  },

 button: {
   backgroundColor: '#BFF0E6',
   width:"30%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   marginTop:5,
   marginLeft:20,
  
 },
input: {
  flexDirection: 'column',
  borderRadius: 5,
  width: 240, 
  borderColor: '#A1DED2', 
  borderWidth: 2, 
  padding: 7 ,
  alignItems:"center",
  justifyContent:"center",
  marginTop:10,
  marginBottom:1,
 
},
inputTwo: {
  flexDirection: 'column',
  borderRadius: 5,
  width: '100%', 
  borderColor: '#15908E', 
  borderWidth: 2, 
  padding: 7 ,
  alignItems:"flex-start",
  justifyContent:"flex-start",
  marginTop:10,
  marginBottom:5,
},


text:{
  fontWeight: 'bold',
  fontSize: 15,
  color:'#11927F',
  textShadowOffset:{width: 6, height: 6},

},
textTwo:{
  fontWeight: 'bold',

  fontSize: 20,
  color:'#33BBC1',
  textDecorationLine: 'underline',
  textShadowOffset:{width: 6, height: 6},

},

Link:{
  fontSize: 15,
  color:'blue',
  textDecorationLine: 'underline',
  marginTop:10,
  alignItems: 'flex-start',
},
courseNameComponent: {
  alignItems: 'flex-start',

},
});