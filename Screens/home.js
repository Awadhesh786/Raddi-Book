import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Text,
  Button,
  Left,
  Icon,
  Body,
  Right,
  Item,
  Input,
  Thumbnail,
  Toast
} from "native-base";

import { View, StatusBar, Image, TouchableOpacity } from "react-native";
import Color from "../components/colors";
import BookList from './BookList';

export default class home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "RADDI",
    headerStyle: {
      backgroundColor: Color.sky,
      elevation: 0
    },

    headerTitleStyle: {
      fontFamily: "forte"
    },
    headerTintColor: "#fff",
    headerRight: (
      <View style={{ flexDirection: "row" }}>
        <Button transparent onPress={() => navigation.navigate("Notification")}>
          <Icon
            name="ios-notifications"
            type="Ionicons"
            style={{
              color: Color.white
            }}
          />
        </Button>
        <Button transparent onPress={() => navigation.navigate("Orders")}>
          <Icon
            name="cart"
            style={{
              color: Color.white
            }}
          />
        </Button>
      </View>
    ),
    headerLeft: (
      <View>
        <Button
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
          transparent
          onPress={() => navigation.openDrawer()}
        >
          <Icon
            style={{
              color: Color.white
            }}
            name="menu"
          />
        </Button>
      </View>
    )
  });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <Header
          androidStatusBarColor={Color.black}
          searchBar
          rounded
          onPress={() => this.props.navigation.navigate("Orders")}
          style={{
            elevation: 0,
            backgroundColor: Color.sky
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                top: 10,
                height: 37,
                width: "100%",
                backgroundColor: "white",

                borderRadius: 3,
                shadowColor: "#000",
                elevation: 2,

                flexDirection: "row"
              }}
              onPress={() => this.props.navigation.navigate("Search")}
            >
              <Icon
                name="ios-search"
                style={{ paddingTop: 6, paddingLeft: 8 }}
                color="yellow"
              />
              <Text
                style={{
                  flexDirection: "row",
                  fontSize: 17,
                  color: "black",
                  padding: 8,
                  marginLeft: 9
                }}
              >
                Search for Any Books
              </Text>
            </TouchableOpacity>
          </View>
        </Header>

        <Content>

        <BookList/>
        </Content>
      </View>
    );
  }
}
