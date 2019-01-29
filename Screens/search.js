import React, { Component } from "react";
import {
  Text,
  StyleSheet
} from "react-native";
import {
  Item,
  Icon,
  Input,
  Button
} from "native-base";
import Colors from "../components/colors";
import { Container, Header } from "native-base";

export default class product extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Search Books",
    headerStyle: {
      backgroundColor: Colors.sky,
      elevation: 0
    },
    headerTintColor: "#fff"
  });

  render() {
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: Colors.sky }}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search for Any Books" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    margin: 1.5
  },
  cat_item: {
    color: Colors.blue,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    margin: 2
  }
});
