import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';

let qeus =
[
    {
        Q: "Are you intersted in creating mobile and web apps?,0",
        yesIndex : 1 ,
        noIndex : 1,
    },
    {
        Q: "Are you intersted in AI and ML field?,1",
        yesIndex : 2 ,
        noIndex : 2,
    },
    {
        Q: "Do you think that you have analytical skills?,2",
        yesIndex : 3 ,
        noIndex : 4,
    },
    {
        Q: "Do you intersted in PL&DB?,3",
        yesIndex : 5 ,
        noIndex : 6,
    },
    {
        Q: "Do you intersted in DB1?,4",
        yesIndex : 19 ,
        noIndex : 20,
    },
    {
        Q: "Do you intersted in Problem solving?,5",
        yesIndex : 7 ,
        noIndex : 8,
    },
    {
        Q: "Do you intersted in DB1?,6",
        yesIndex : 13 ,
        noIndex : 14,
    },
    {
        Q: "Do you intersted in Java?,7",
        yesIndex : 9,
        noIndex : 10,
    },
    {
        Q: "Do you intersted in Data analysis?,8",
        yesIndex : 11,
        noIndex : 12,
    },
    {
        Q: "Do you intersted in Translate?,9",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in robote?,10",
        yesIndex : 33,
        noIndex : 33,
    },
    {
        Q: "Are you intersted in DB1?,11",
        yesIndex : 33,
        noIndex : 33,
    },
    {
        Q: "Are you intersted Robote?,12",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Are you intersted Data analysis?,13",
        yesIndex : 15,
        noIndex : 16,
    },
    {
        Q: "Do you intersted in Java?,14",
        yesIndex : 17 ,
        noIndex : 18,
    },
    {
        Q: "Do you intersted in Queries?,15",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in SW1?,16",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in Gaming?,17",
        yesIndex : 33,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in Translate?,18",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in Query?,19",
        yesIndex : 21 ,
        noIndex : 22,
    },
    {
        Q: "Do you intersted in Java?,20",
        yesIndex : 27 ,
        noIndex : 28,
    },
    {
        Q: "Do you intersted in Analysis?,21",
        yesIndex : 23 ,
        noIndex : 24,
    },
    {
        Q: "Are you intersted in Algorithm?,22",
        yesIndex : 25 ,
        noIndex : 26,
    },
    {
        Q: "Are you intersted system work?,23",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Are you intersted SW1?,24",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in Problem solving?,25",
        yesIndex : 33,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in system work?,26",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted in Code?,27",
        yesIndex : 29 ,
        noIndex : 30,
    },
    {
        Q: "Do you intersted in Queries?,28",
        yesIndex : 31 ,
        noIndex : 32,
    },
    {
        Q: "Do you intersted Robote?,29",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted System work?,30",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted SW1?,31",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "Do you intersted Analysis?,32",
        yesIndex : 33 ,
        noIndex : 33,
    },
    {
        Q: "End of questions,33",
        yesIndex : 33 ,
        noIndex : 33,
    },
]


export default function Expert () {
    const [started, setStarted] = useState(false)
    const [answers, setAnswers] = useState([])
    const [index, setIndex] = useState(0)


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