import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';

let qeus =
[
    
    {
        Q: "do you intersted in AI and Machine Learning field?,1",  ///0
        yesIndex :1 ,
        noIndex : 2,
    },
   
    {
        Q: "Did you interested in PL1,DS and Algorithms content?,3",  ///1
        yesIndex : 3 ,
        noIndex : 4,
    },
    {
        Q: "Did you interested in IS,DB1 and OR content?,4",  //////2
        yesIndex : 17 ,
        noIndex : 18,
    },
    {
        Q: "Do you interested in problem solving, coding and gaming?,5",  /////3
        yesIndex : 5,
        noIndex : 6,
    },
    {
        Q: "Did you interested in IS,DB1 and OR content?,6", /////4
        yesIndex : 11 ,
        noIndex : 12,
    },
    {
        Q: "did you like pl2 project that were done with java programming language?,7",  //////5
        yesIndex : 7,
        noIndex : 8,
    },
    {
        Q: "Do you interested in data analysis?,8", ////6
        yesIndex : 9,
        noIndex : 10,
    },
    {
        Q: "do you want to know how the computer translate the code?,9",  /////7
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in robots and feel excited to know more about it?,10",  ////8
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "Did you interested in IS,DB1 and OR content?,11", /////9
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "Do you interested in robots and feel excited to know more about it?,12",///10
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Are you intersted Data analysis?,13",///11
        yesIndex : 13,
        noIndex : 14,
    },
    {
        Q: "did you like pl2 project that were done with java programming language?,14",///12
        yesIndex : 15 ,
        noIndex : 16,
    },
    {
        Q: "Do you interseted in typing queries?,15",///13
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "did you feel comfort when you were making sw1 project diagrams?,16",///14
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in problem solving, coding and gaming?,17",///15
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "do you want to know how the computer translate the code?,18",//16
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interseted in typing queries?,19",///17
        yesIndex : 19 ,
        noIndex : 20,
    },
    {
        Q: "did you like pl2 project that were done with java programming language?,20",///18
        yesIndex : 25 ,
        noIndex : 26,
    },
    {
        Q: "Do you interested in data analysis?,21",///19
        yesIndex : 21 ,
        noIndex : 22,
    },
    {
        Q: "Did you interested in PL1,DS and Algorithms content?,22",///20
        yesIndex : 23,
        noIndex : 24,
    },
    {
        Q: "do you want to gain more experience in how the systems work?,23",///21
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "did you feel comfort when you were making sw1 project diagrams?,24",////22
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you intersted in Problem solving?,25",////23
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "do you want to gain more experience in how the systems work?,26",////24
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in problem solving, coding and gaming?,27",////25
        yesIndex : 27 ,
        noIndex : 28,
    },
    {
        Q: "Do you interseted in typing queries?,28",////26
        yesIndex : 29 ,
        noIndex : 30,
    },
    {
        Q: ",Do you interested in robots and feel excited to know more about it?,29",////27
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "do you want to gain more experience in how the systems work?,30",////28
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "did you feel comfort when you were making sw1 project diagrams?,31",//29
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in data analysis?,32",///30
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "End of questions,33",//////31
        yesIndex : 31 ,
        noIndex : 31,
    },]

export default function Expert () {
    const [started, setStarted] = useState(false)
    const [answers, setAnswers] = useState([])
    const [index, setIndex] = useState(0)
    calculate=()=>{
        console.log(answers)
        fetch('http://192.168.1.4:3000/answer',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
          body:JSON.stringify(
              
  
                  answers
          )
          
      })
      .then((response)=>response.json())
      .then(responsejson=>{
        alert(JSON.stringify(responsejson));
        console.log(responsejson)
      })
      }    
        
   
    
console.log(answers)
    const next = ()=>{
        if(qeus.length - 1 > 0){
        (answers[index])
        if (answers[index] == true)
            setIndex([qeus[index].yesIndex])
        else if(answers[index] == false)
            setIndex([qeus[index].noIndex])

        }
        else{
            console.log('Questions Ended')
        }
    }

    return(
        <ImageBackground source={require('./Images/gpa-calculator.jpg')} style={styles.backgriundImage}>
            
            {!started && 
            <View>
                <View style={styles.Header}>
                    <Text style={styles.text}>Please click on the start button to answer some questions</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.startButton}>
                        <TouchableOpacity
                            onPress={
                            () => { setStarted(true) }
                        }
                        >
                            <Text style={styles.startButtonText}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            }
            {started && (
            <View>
                <View>
                    <Text style={styles.Qtext}>{qeus[index].Q}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => {
                                let newAnswers = answers
                                newAnswers.push(true)
                                setAnswers(newAnswers)
                                next()
                            }}
                        >
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => {
                                let newAnswers = answers
                                newAnswers.push(false)
                                setAnswers(newAnswers)
                                next()
                            }}
                        >
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            )}
             <View style={styles.button}>
        <TouchableOpacity
 onPress={()=>calculate()}        >
          <Text>Calculate</Text>
        </TouchableOpacity>
      </View>
        </ImageBackground>
    );
    
}
const styles = StyleSheet.create({
    backgriundImage: {
        width: "100%",
        height: "100%",
      },
    insideBackground: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        paddingHorizontal: 40
    },
    Header:{
        marginTop:65,
        flexDirection: "row",
        justifyContent: 'space-around', 
        paddingTop: 7,
        paddingBottom: 7,
        justifyContent: "center",
        alignContent: "center"
      },
    text:{
        fontWeight: 'bold',
        fontSize: 24,
        color:'#000',
        fontStyle: 'italic',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:20,
        paddingLeft: 6,
        paddingRight:6,
        textAlignVertical: "center",
        textAlign: "center",
        },
    Qtext:{
        fontWeight: 'bold',
        fontSize: 35,
        color:'#01614E',
        fontStyle: 'italic',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:20,
        textAlignVertical: "center",
        textAlign: "center",
        marginTop: 200
    },
    buttonText:{
        color:'#01614E',
        fontSize: 22,
    },
    button: {
        backgroundColor: '#fff',
        width:"43%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        marginBottom:1
    },
    startButton: {
        backgroundColor: '#009E7F',
        width:"60%",
        borderRadius:25,
        height:80,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        marginBottom: 40,
    },
    startButtonText:{
        color:'#333',
        fontStyle: 'italic',
        fontSize: 35,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        justifyContent: "space-around",
    },
    
  });