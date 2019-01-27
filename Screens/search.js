import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import {
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Thumbnail,
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
        {/* <TouchableOpacity
          style={{
            backgroundColor: Colors.white,
            width: "100%",
            height: 60,
            elevation: 1,
            borderRadius: 3
          }}
        >
          <TextInput
            placeholder="Enter Product Name"
            style={{ alignSelf: "flex-start", top: 5, padding: 15 }}
          />
        </TouchableOpacity> */}
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
