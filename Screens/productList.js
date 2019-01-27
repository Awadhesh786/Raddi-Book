import React, { Component } from "react";
import { View, Text } from "react-native";
import { Grid, Col, Row, Thumbnail } from "native-base";
import colors from "../components/colors";
export default class productList extends Component {
  render() {
    return (
      <View style={{}}>
        {/* productList */}
        <Grid style={{ backgroundColor: colors.red, flex: 1 }}>
          <Col
            style={{
              backgroundColor: colors.orange,
              height: 200,
              margin: 1,
              justifyContent: "center"
            }}
          >
            <Thumbnail
              square
              large
              source={require("../Images/pro3.jpg")}
              style={{ resizeMode: "stretch", width: "100%", height: "85%" }}
            />
            <Text>100</Text>
          </Col>
          <Col style={{ backgroundColor: colors.red, height: 200, margin: 1 }}>
            <Thumbnail
              square
              large
              source={require("../Images/pro2.jpg")}
              style={{ resizeMode: "stretch", width: "100%", height: "85%" }}
            />
          </Col>
        </Grid>
      </View>
    );
  }
}
