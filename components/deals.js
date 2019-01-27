import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Card, CardItem, Grid, Row, Col, Thumbnail } from "native-base";
import colors from "./colors";

export default class slider extends Component {
  render() {
    return (
      <View style={page.page}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={page.deal_Text}>Deals Of the Day</Text>
          <Text style={page.deal_Text}>View All</Text>
        </View>

        <View style={page.item}>
          <Thumbnail
            square
            large
            resizeMode="stretch"
            resizeMethod="resize"
            source={require("../Images/bnew2.jpg")}
            style={{ width: 400, height: 250 }}
          />
          {/* <Thumbnail
            resizeMode="stretch"
            square
            resizeMethod="auto"
            style={{}}
            source={require("../Images/bnew2.jpg")}
          /> */}
        </View>
      </View>
    );
  }
}

const page = StyleSheet.create({
  deal: {
    flex: 1,
    width: null
  },
  page: {
    backgroundColor: colors.blue,
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10
  },
  deal_Text: {
    marginBottom: 10,
    fontFamily: "Cochin",
    fontSize: 20,
    color: "#fff"
  },
  item: {
    elevation: 2,
    borderRadius: 2,
    alignItems: "center"
  }
});
