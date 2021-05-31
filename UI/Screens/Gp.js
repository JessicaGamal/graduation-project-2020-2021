import { Entypo, MaterialCommunityIcons, } from '@expo/vector-icons';
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ImageBackground, TextInput, _ScrollView } from "react-native";
import React from 'react';
import { Video } from 'expo-av';
import * as ImagePicker from "expo-image-picker";
export default class PostScreen extends React.Component {

  state = {
    desc: '',
    image: null,
    uploading: false,
  };
  _maybeRenderUploadingIndicator = () => {
    if (this.state.uploading) {
      return <ActivityIndicator animating size="large" />;
    }
  };


  _askPermission = async (failureMessage) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "denied") {
      alert(failureMessage);
    }
  };

  _pickImage = async () => {
    await this._askPermission(
      "We need the camera-roll permission to read pictures from your phone..."
    );

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'Videos',

      aspect: [4, 3],
    });

    this._handleImagePicked(pickerResult);
  };




  _handleImagePicked = async (pickerResult) => {
    let uploadResponse;

    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: pickerResult.uri });

      }
    } catch (e) {

      console.log({ e });
    } finally {
      this.setState({ uploading: false });
    }
  };
  componentDidMount() {
    fetch('http://192.168.1.5:3000/viewvideo', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).
      then(results => {
        this.setState({ data: results.data })
        console.log(results.data)
      })

  }


  render() {
    return (

      <ScrollView>

        <ImageBackground source={require("./Images/w3.jpg")} style={styles.backgriundImage} >
          <View style={styles.Row2}>
            <Image source={require('./Images/p1.jpg')} style={styles.Profile} />
            <View style={styles.searchView}>

              <Video
                source={{ uri: this.state.image }}
                shouldPlay
                resizeMode="cover"
                style={{ width: 200, height: 200 }}
              />

            </View>
            <View style={styles.column}>
              <View style={styles.Icon}>
                <MaterialCommunityIcons name='postage-stamp' size={35} color='#333' onPress={this._pickImage} />

              </View>
            </View>
            {/* <TextInput placeholder="write your GP idea" multiline style={styles.searchtext}
                onChangeText={(desc) => this.setState({ desc })}
                value={this.state.desc}
              /> */}



            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>


            </TouchableOpacity>
          </View>



          <View style={styles.Divider} />


          <View style={styles.Container}>
            <View style={styles.Post}>

              <FlatList

                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}

                renderItem={
                  ({ item }) => (

                    <View styles={styles.item}>
                      <View style={styles.Header}>
                        <View style={styles.Row}>
                          <Image source={require('./Images/4.jpg')} style={styles.Profile} />

                        </View>

                      </View>
                      <View style={{ paddingLeft: 10 }}>
                        <View style={styles.User}>
                          <Text style={styles.ppText}>Nourhan Magdy</Text>
                        </View>

                      </View>
                      <View style={styles.Row}>
                        <View style={styles.ppTime}>
                          <Text style={styles.ppText}>1/13/2021</Text></View>
                      </View>
                      <Video
                        source={{ uri: item }}
                        shouldPlay="false"
                        resizeMode="cover"
                        style={{ width: 500, height: 200 }}
                      />


                    </View>
                  )}


              />
            </View>
            <View style={styles.Footer}>
              <View style={styles.FooterCount}>
                <View style={styles.Row}>


                </View>
              </View>
            </View>

            <View style={styles.BottomDivider} />
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
  Container: {
    flex: 1,
  },
  Header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 11,
  },
  Profile: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  Row: {
    alignItems: "center",
    flexDirection: "row",
  },
  column: {
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: 10,
  },
  User: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#05A7A4",
  },

  Post: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 16,
    padding: 11,
  },
  Footer: {
    padding: 11,
  },
  FooterCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },


  FooterMenu2: {
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 140,

  },

  Icon: {
    marginRight: 6,
  },
  Text: {
    fontSize: 14,
    color: "#fff",
  },
  ppText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: 'bold',
  },
  Textblack: {
    fontSize: 14,
    color: "#fff",
    marginLeft: -5,
  },
  BottomDivider: {
    width: '100%',
    height: 10,
    backgroundColor: "#fff",
  },

  Divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#f0f0f0",
    marginTop: 15,
  },
  Row2: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "100%",
    alignItems: "center",

  },

  searchView: {

    backgroundColor: "#FFF",
    borderRadius: 40,
    borderColor: '#333',
    borderWidth: 3,
    width: '70%',
  },

  searchtext: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    fontSize: 15,
    color: "#ccccef"
  },


});


async function uploadImageAsync(uri) {
  let apiUrl = "http://192.168.1.5:3000/video"
  let uriArray = uri.split(".");
  let fileType = uriArray[uriArray.length - 1];

  let formData = new FormData();

  formData.append("video", {

    uri,
    name: `video.${fileType}`,
    type: `video/${fileType}`,
  });
  // formData.append('desc', desc);

  console.log(uri)

  let options = {
    method: "POST",
    body: formData,
    mode: 'cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  return fetch(apiUrl, options);
}

