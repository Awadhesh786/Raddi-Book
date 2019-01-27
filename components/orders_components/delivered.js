import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  Button
} from "react-native";
import { Container, Text, Content, Icon, Badge } from "native-base";
import Colors from "../colors";
import { Rating } from "react-native-elements";
import colors from "../colors";

export default class delivered extends React.Component {
  ratingCompleted(rating) {
    ToastAndroid.show(rating.toString(), ToastAndroid.LONG);
  }
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
                  color: Colors.green,
                  fontSize: 10,
                  paddingTop: 2
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.card_text} numberOfLines={1}>
                  Delivered on Sat, Jan 1st '19
                </Text>

                <Text style={styles.card_text} numberOfLines={1}>
                  Return Policy ended on Jan 11th '19
                </Text>
              </View>
            </View>
          </View>

          {/* upper-right */}
          <View>
            <Image
              source={require("../Images/pro3.jpg")}
              style={styles.card_img}
            />
          </View>
        </View>
        {/* bottombar */}
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              borderColor: Colors.blue_grey,
              borderWidth: 0.19,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                hidden: true
              }}
            >
              <Rating
                type="star"
                fractions={1}
                startingValue={0}
                imageSize={30}
                onFinishRating={this.ratingCompleted}
                onStartRating={this.ratingStarted}
                style={{ paddingVertical: 10 }}
              />

              <Button
                title="Review"
                style={{
                  marginLeft: 30
                }}
              />
            </View>
          </View>
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
