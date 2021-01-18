import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomMultiPicker from "react-native-multiple-select-list";

export default function App() {
  const userList = {
    "123":"DS                                                ",
    "124":"Pl                                                ",
    "125":"Hr                                                ",
    "127":"PL1                                                ",
    "128":"CS                                                ",
    "129":"AI                                                ",
    "130":"IA                                                ",
    "131":"Math1                                                ",
    "132":"Math2                                                ",
    "133":"English                                                ",
    "134":"Quality                                                ",
    "135":"DW                                                ",
    "136":"Statistics                                                ",
    "137":"Ethics                                                ",
    "138":"Security                                                ",
    "139":"SW1                                                ",
    "140":"SW2                                                "
  }
  return (
    <View style={styles.container}>
      <CustomMultiPicker
        options={userList}
        search={true} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(res)=>{ console.log(res) }} // callback, array of selected items
        rowBackgroundColor={"#eee"}
        rowHeight={40}
        rowRadius={10}
        iconColor={"#00a2dd"}
        iconSize={30}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-add-circle"}
        scrollViewHeight={130}
        selected={[]} // list of options which are selected by default
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80
  },
});
