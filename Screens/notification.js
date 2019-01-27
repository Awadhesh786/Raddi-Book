import React, { Component } from "react";
import { View, Text } from "react-native";
import colors from "../components/colors";
import { Thumbnail } from "native-base";

export default class notification extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Notification",
    headerStyle: {
      backgroundColor: colors.sky,
      elevation: 0
    },
    headerTintColor: colors.white
  });

  render() {
    return (
      <View>
        <View
          style={{
            padding: 5,
            width: "100%",
            backgroundColor: colors.white,
            flexDirection: "row",
            marginBottom: 1
          }}
        >
          <View style={{ flexDirection: "column", padding: 3 }}>
            <Text style={{ fontSize: 20, color: colors.black }}>
            New Book Tracking
            </Text>
            <Text>* A free new book tracking and notification service 
            by which you can track new book by author, 400+ subjects,
             or keywords of your choice. </Text>
          </View>
        </View>

        <View
          style={{
            padding: 5,
            width: "100%",
            backgroundColor: colors.white,
            flexDirection: "row",
            marginBottom: 1
          }}
        >
          <View style={{ flexDirection: "column", padding: 3 }}>
            <Text style={{ fontSize: 20, color: colors.black }}>
            New Book Tracking
            </Text>
            <Text>* A free new book tracking and notification service 
            by which you can track new book by author, 400+ subjects,
             or keywords of your choice. </Text>
          </View>
        </View>
      </View>
    );
  }
}
