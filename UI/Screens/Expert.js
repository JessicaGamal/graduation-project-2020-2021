import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';


let qes = ['Do you like Blue?', 'Do you like Red?', 'Do you like yellow?', 'Do you like green?']


export default function Expert () {
    const [started, setStarted] = useState(false)
    const [answers, setAnswers] = useState([])
    const [index, setIndex] = useState(0)


    const next = ()=>{
        if(qes.length - 1 > index){
        (answers[index])
        setIndex(index + 1)
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
                    <Text style={styles.Qtext}>{qes[index]}</Text>
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
        color:'#ffffff',
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