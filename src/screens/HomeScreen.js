import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi Abhra..</Text>
      <Button
        onPress={()=>props.navigation.navigate("Components")}
        title="Go to Component"
      />
      {/* <TouchableOpacity onPress={()=> props.navigation.navigate("List")}>
        <Text>Go to List screen</Text>
      </TouchableOpacity> */}
      <Button
        onPress={()=>props.navigation.navigate("List")}
        title="Go to List screen"
      />
      <Button
        onPress={()=>props.navigation.navigate("Image")}
        title="Go to Image screen"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
