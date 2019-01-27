import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import ImageSlider from "react-native-image-slider";

export default class s extends Component {
  render() {
    return (
      <View style={{ marginBottom: 1 }}>
        <ImageSlider
          style={{ height: 200 }}
          autoPlayWithInterval={3000}
          images={[
            require("../Images/banner3.jpg"),
            require("../Images/banner2.jpg"),
            require("../Images/banner4.jpg"),
            require("../Images/banner7.jpg"),
            require("../Images/blog-banner.gif")
          ]}
        />
      </View>
    );
  }
}
