import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';


const CONTENT = [
  {
    title: 'First Question',
    content: 'NOURHAN',
  },
  {
    title: 'Second Question',
    content: 'DALIA',
  },
  {
    title: 'Third Question',
    content: 'SARA',
  },
  {
    title: 'Fourth Question',
    content: 'JESSICA',
  },
  {
    title: 'Fifth Question',
    content: 'MIRA',
  },
];



export default class Questions extends Component {
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
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View style={styles.inputThree}>
        <Text style={styles.headerText}>{section.title}</Text>
        
        </View>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
        
        <Image source={require('./Images/11.jpg')} style={styles.backgriundImage}>
          </Image>
          
       
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    
  },
 
  backgriundImage: {
    flex: 1,
   
    marginRight:0,
    marginLeft:10,
    resizeMode: 'cover',
    width: '95%',
    justifyContent: 'center',
    borderRadius:5,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    color:"#15908E",
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
  fontWeight: 'bold',
  fontSize: 20,
  color:'#11927F',
  padding:10,
  
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
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
    flexDirection:'row',
   
  },
  });