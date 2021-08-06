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
      <Button
        onPress={()=>props.navigation.navigate("Counter")}
        title="Go to Counter App"
      />
      <Button
        onPress={()=>props.navigation.navigate("Color")}
        title="Go to Color screen !"
      />
      <Button
        onPress={()=>props.navigation.navigate("Square")}
        title="Go to Square screen"
      />
      <Text style={styles.text}>Example using Reducer</Text>
      <Button
        onPress={()=>props.navigation.navigate("ModifySquare")}
        title="Go to square screen-reducer"
      />
      <Button
        onPress={()=>props.navigation.navigate("ModifyCounter")}
        title="Go to Counter Screen - Reducer"
      />
      <Text style={styles.text}>Example for Text Input</Text>
      <Button
        onPress={()=>props.navigation.navigate("Text")}
        title="Go to Input Text"
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
