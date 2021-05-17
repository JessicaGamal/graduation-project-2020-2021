import React, { useState } from 'react';
import { StyleSheet,Linking  , View, Image, TouchableOpacity, Text, TextInput,FlatList, ScrollView, TouchableWithoutFeedback, Animated, Easing, LogBox  } from 'react-native';
import { Rating } from "react-native-rating-element";

export default class AddScreen extends React.Component {
 
  state = {
    firstRate: 2,
    secondRate: 1,
    courselink:'',
    data:[],

   };
 
   componentDidMount(){
    fetch('http://192.168.1.11:3000/viewcourse',{
    method:'GET',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    }}).then(res=>res.json()).
    then(results=>{
      this.setState(results)
    })

  } 

render() {
    return (
      <ScrollView style={styles.container}> 
      
          <Image source={{}} style={styles.backgriundImage}>
          </Image>
          <View style={styles.Header}>
            <Text style={styles.text}>About Artificial Intelligence Course</Text>    
          </View>
          <View style={styles.inputTwo}>
          <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Course Description</Text>    
          </View>
          </View>
          <View >
            <Text >Artificial Intelligence (AI) is a rapidly advancing technology, 
              Made possible by the Internet, that may soon have significant impacts on our everyday lives. 
              AI traditionally refers to an artificial creation of human-like intelligence that can learn, R
              eason, plan, perceive, or process natural language[1] . 
              These traits allow AI to bring immense socioeconomic opportunities, 
              while also posing ethical and socio-economic challenges.
              As AI is an Internet enabled technology</Text>
          
          </View>
         
          
          <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Course Tutorials</Text>    
          </View>
          </View>
        
          <FlatList

         keyExtractor={(item,index) => index.toString()}
         data={this.state.data}

         renderItem={
           ({item})=>(

    <View styles={styles.item}><Text onPress={() => Linking.openURL(item)} style={styles.Link}>{item}</Text>
    </View>
           ) }  
           
       />  
        <View style={styles.courseNameComponent}>
              <View>
                <TextInput
                  placeholder="Tutorial                                                            "
                  style={styles.input}
                  onChangeText={(courselink)=>this.setState({courselink})}
                  value={this.state.courselink}
                />
              </View>
            </View>
          <View style={styles.button}>
            <TouchableOpacity
             onPress={this.add} >
              <Text>Add tutorial</Text>
            </TouchableOpacity>
          </View>   
          </View>
          
          <View style={styles.Header}>
            <Text style={styles.text}>About Artificial Intelligence's Project</Text>    
          </View>
          <View style={styles.inputTwo}>
          <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Project Description</Text>    
          </View>
          </View>
          <View >
            <Text >Artificial Intelligence (AI) is a rapidly advancing technology, 
              Made possible by the Internet, that may soon have significant impacts on our everyday lives. 
              AI traditionally refers to an artificial creation of human-like intelligence that can learn, R
              eason, plan, perceive, or process natural language[1] . 
              These traits allow AI to bring immense socioeconomic opportunities, 
              while also posing ethical and socio-economic challenges.
              As AI is an Internet enabled technology</Text>
          
          </View>
         
          
          <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Project Tutorials</Text>    
          </View>
          </View>
          <View >
          <Text style={styles.Link}>Second Link</Text>
          </View>
          <View style={styles.containerr}>
          <Rating
            rated={this.state.secondRate}
            totalCount={5}
            ratingColor="#f1c644"
            ratingBackgroundColor="#d4d4d4"
            size={24}
            onIconTap={(rate)=>this.setState({secondRate: rate})}
            icon="ios-star"
            direction="row"
          />
          </View>
          <View style={styles.courseNameComponent}>
              <View>
                <TextInput
                  placeholder="Tutorial                                                            "
                  style={styles.input}
                />
              </View>
            </View>
          <View style={styles.button}>
            <TouchableOpacity >
              <Text>Add tutorial</Text>
            </TouchableOpacity>
          </View>   
          </View>
        
        </ScrollView>
    );}

constructor(props){
  super()
  this.state={courselink:'',data:[]
     
  };
} 
add=()=>{
          
      
  fetch('http://192.168.1.11:3000/addcourse',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
      body:JSON.stringify({
        courselink:this.state.courselink,
       
      })
  })
  .then((response)=>response.json())
  .then((res)=>{
    alert("link uplode")

  })
  .done()
}
 

}
const styles = StyleSheet.create({
  container: {
    flex: 5, 
    paddingLeft:5,
    paddingRight:5,
    //backgroundColor: '#89E1C4',
    
  },
  containerr: {
    flex: 1, 
   marginHorizontal: 1,

    
  },
  FlatList:{
   height:"10"
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
  backgriundImage: {
    flex: 10,
    marginTop:10,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'flex-end',
  },
  
 button: {
   backgroundColor: '#BFF0E6',
   width:"30%",
   borderRadius:25,
   height:40,
 
   alignItems:'center',
   justifyContent:'center',
   marginTop:20,
   marginBottom:30,
 },
input: {
  flexDirection: 'column',
  borderRadius: 5,
  width: 300, 
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
inputThree: {
  flexDirection: 'column',
  borderRadius: 10,
  width: '100%', 
 
  padding: 7 ,
  alignItems:"flex-start",
  justifyContent:"flex-start",
  marginTop:10,
  marginBottom:5,
  backgroundColor:'#D1F2EB',
 
},

text:{
  fontWeight: 'bold',
  fontSize: 20,
  color:'#11927F',
  textDecorationLine: 'underline',
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
scroll:{
  margin:10
} 
});