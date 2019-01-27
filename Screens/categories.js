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
              <Text style={{ fontSize: 17, color: colors.black }}>
                Television
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black }}>
                Washing Machines
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black }}>
                Kitchen Appliances
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black }}>
                Small Home Appliances
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black }}>
                Television
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black }}>
                Washing Machines
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black }}>
                Kitchen Appliances
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black }}>
                Small Home Appliances
              </Text>
            </Body>
          </ListItem>
        </List>
      </View>
    );
  }
}
