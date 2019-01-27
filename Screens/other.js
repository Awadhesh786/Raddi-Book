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
                Novel
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
              Biography
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
                Reasoning
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Mathematics Reasoning
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
              SSC / Banking
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
