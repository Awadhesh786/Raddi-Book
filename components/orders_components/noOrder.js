import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Container, Text, Content, Icon, Badge } from "native-base";
import Colors from "../colors";
import { Rating } from "react-native-elements";

export default class cancled extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          elevation: 2,
          backgroundColor: Colors.white,
          marginTop: 8,
          alignItems: "flex-start"
        }}
      >
        {/* <StatusBar backgroundColor={Color.theme_grey} barStyle="default" /> */}
        <StatusBar hidden={false} backgroundColor={Colors.theme_grey} />

        {/* upper */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: Colors.white,
            padding: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.card_text}>No More</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pin_card: {
    elevation: 1,
    backgroundColor: Colors.white,
    marginBottom: 6
  },
  card: {
    flexDirection: "row",
    width: "100%",
    elevation: 2,
    backgroundColor: Colors.white,
    marginTop: 8,
    padding: 10,
    alignItems: "flex-start"
  },
  card_img: {
    // alignSelf: "flex-end",
    padding: 5,
    width: 80,
    height: 80
  },
  card_title: {
    // alignSelf: "flex-start",
    fontSize: 20,
    color: Colors.black,
    padding: 5
  },
  card_oos: {
    color: Colors.red,
    padding: 5,
    fontSize: 20
  },
  card_money: {
    padding: 5,
    fontWeight: "bold",
    color: Colors.black,
    fontSize: 18
  },
  card_text: {
    paddingLeft: 5,
    fontSize: 15,
    color: "gray"
  }
});
