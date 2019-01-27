import React, { Component } from "react";
import { View, Text } from "react-native";
import { List, ListItem, Body } from "native-base";
import colors from "../components/colors";

export default class categories extends Component {
  render() {
    return (
      <View>
        <List>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Computer Science Engineering
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
              Electrical Engineering
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
              Mechanical Engineering
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Electronic & Communication Engineering
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
              Civil Engineering
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
              Chemical Engineering
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Other
              </Text>
            </Body>
          </ListItem>
        </List>
      </View>
    );
  }
}
