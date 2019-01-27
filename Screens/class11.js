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
                Math
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Physics
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Chemistry
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Biology
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                English Grammar
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Hindi Grammar
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                General Knowledge
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
