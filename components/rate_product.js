import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "./colors";
class rate_product extends Component {
  render() {
    return (
      <View style={styles.Page}>
        <Text>Rate Your Purchase!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Page: {
    backgroundColor: colors.white
  }
});
