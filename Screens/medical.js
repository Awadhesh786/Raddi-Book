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
                Master of Medical Science by Research
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                    Bachelor of Medical Science
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Doctor of Medicine
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Postgraduate Cert. Medical Education
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
                Biomedical Engineering
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontSize: 17, color: colors.black, textAlign:"right" }}>
              Ungraduated Foundation 
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
