import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Button
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
            alignItems: "flex-start"
          }}
        >
          {/* upper-left */}
          <View style={{ width: "70%" }}>
            <Text
              style={{
                fontSize: 20,
                color: Colors.black,
                padding: 5
              }}
              numberOfLines={2}
            >
              Lenovo ideapad 330s
            </Text>
            <View flexDirection="row">
              <Icon
                name="circle"
                type="FontAwesome"
                style={{
                  color: Colors.orange,
                  fontSize: 10,
                  paddingTop: 2
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.card_text} numberOfLines={1}>
                  Refund
                </Text>
              </View>
            </View>
          </View>

          {/* upper-right */}
          <View>
            <Image
              source={require("../Images/pro4.jpg")}
              style={styles.card_img}
            />
          </View>
        </View>
        {/* bottombar */}
        <View
          style={{
            borderColor: Colors.blue_grey,
            borderWidth: 0.2,
            width: "100%",
            padding: 5
          }}
        >
          <Text style={{ color: Colors.green, fontSize: 20 }}>
            Refund Complete
          </Text>
          <Text style={styles.card_text}>asdasdasdasdasdasd</Text>
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
    fontSize: 12,
    color: "gray"
  }
});
