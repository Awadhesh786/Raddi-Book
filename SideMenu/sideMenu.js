import React, { Component } from "react";

import {
  Container,
  Content,
  Header,
  Body,
  Text,
  List,
  ListItem,
  Left,
  Icon,
  Thumbnail,
  Right,
  Button
} from "native-base";
import { View } from "react-native";
import Colors from "../components/colors";

export default class sideMenu extends Component {
  render() {
    return (
      <Container>
        {/* header */}
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.sky,
            flexDirection: "row"
            // justifyContent: "space-around"
          }}
        >
          <Thumbnail source={require("../Images/user1.png")} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: Colors.white, fontSize: 22 }}>User Name</Text>
            <Text note style={{color: Colors.white}}>+91 9936169852</Text>
          </View>
        </View>

        {/* list */}
        <Content>
          <List>
            {/* Categories */}
            <ListItem itemDivider>
              <Text>Categories</Text>
            </ListItem>

            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Class6")}
            >
              <Left>
                <Icon
                  name="circle"
                  type="Entypo"
                  style={{ color: Colors.blue_grey, fontSize: 20 }}
                />
              </Left>
              <Body>
                <Text>Class 6 to 10th</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Class11")}
            >
              <Left>
                <Icon
                  name="circle"
                  type="Entypo"
                  style={{ color: Colors.blue_grey, fontSize: 20 }}
                />
              </Left>
              <Body>
                <Text>Class 11 to 12th</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Engineering")}
            >
              <Left>
                <Icon
                  name="circle"
                  type="Entypo"
                  style={{ color: Colors.blue_grey, fontSize: 20 }}
                />
              </Left>
              <Body>
                <Text>Engineering</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Medical")}
            >
              <Left>
                <Icon
                  name="circle"
                  type="Entypo"
                  style={{ color: Colors.blue_grey, fontSize: 20 }}
                />
              </Left>
              <Body>
                <Text>Medical</Text>
              </Body>
              <Right />
            </ListItem>
            
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Other")}
            >
              <Left>
                <Icon
                  name="circle"
                  type="Entypo"
                  style={{ color: Colors.blue_grey, fontSize: 20 }}
                />
              </Left>
              <Body>
                <Text>Other</Text>
              </Body>
              <Right />
            </ListItem>

            {/* buy and sell */}
            <ListItem itemDivider>
              <Text>Buy And Sell</Text>
            </ListItem>

            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Cart")}
            >
              <Left>
                {/* <Button backgroundColor={Colors.orange}> */}
                <Icon
                  name="shopping-cart"
                  type="FontAwesome"
                  style={{ color: Colors.orange }}
                />
                {/* </Button> */}
              </Left>
              <Body>
                <Text>Your Book</Text>
              </Body>
              <Right />
            </ListItem>

            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Orders")}
            >
              <Left>
                {/* <Button backgroundColor={Colors.orange}> */}
                <Icon
                  name="shopping-bag"
                  type="FontAwesome5"
                  style={{ color: Colors.blue }}
                />
                {/* </Button> */}
              </Left>
              <Body>
                <Text>Card</Text>
              </Body>
              <Right />
            </ListItem>

            <ListItem icon>
              <Left>
                {/* <Button backgroundColor={Colors.red}> */}
                <Icon name="heart" style={{ color: Colors.red }} />
                {/* </Button> */}
              </Left>
              <Body>
                <Text>Wish List</Text>
              </Body>
              <Right />
            </ListItem>

            <ListItem itemDivider>
              <Text>Account</Text>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Left>
                {/* <Button backgroundColor={Colors.sky}> */}
                <Icon
                  type="FontAwesome"
                  name="user"
                  style={{ color: Colors.sky }}
                />
                {/* </Button> */}
              </Left>
              <Body>
                <Text>Profile</Text>
              </Body>
              <Right />
            </ListItem>

            <ListItem icon>
              <Left>
                {/* <Button backgroundColor={Colors.blue_grey}> */}
                <Icon type="Ionicons" name="md-happy" />
                {/* </Button> */}
              </Left>
              <Body>
                <Text>Offer Zone</Text>
              </Body>
              <Right />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}