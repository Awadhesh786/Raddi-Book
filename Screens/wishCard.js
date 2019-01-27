import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Container,
  Content,
  Body,
  Icon,
  Col,
  Left,
  Card,
  CardItem,
  Form,
  Picker
} from "native-base";

import Rupee from "../components/Symbols";
import Colors from "../components/colors";

export default class cart extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "My Cart",
    headerStyle: {
      backgroundColor: Colors.blue,
      elevation: 0
    },
    headerTintColor: Colors.white
  });

  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <View>
        <ScrollView>
          {/* Pincode */}
          <View style={styles.pin_card}>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Icon
                name="map-marker"
                type="FontAwesome"
                style={{ paddingTop: 5, color: Colors.blue }}
              />
              <Text
                style={{
                  padding: 5,
                  fontSize: 20,
                  color: Colors.black,
                  alignSelf: "stretch",
                  marginLeft: 10
                }}
              >
                Pincode
              </Text>
              <Text
                style={{
                  padding: 5,
                  fontSize: 20,
                  color: Colors.blue,
                  alignSelf: "stretch"
                }}
              >
                282005
              </Text>
              <TouchableOpacity
                style={{
                  // backgroundColor: Colors.,
                  borderRadius: 5,
                  elevation: 1,
                  justifyContent: "center",
                  padding: 5,
                  marginLeft: 10
                }}
              >
                <Text>Change</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* out of stock card */}
          <View style={styles.card}>
            <View style={{ width: "70%" }}>
              <Text numberOfLines={1} style={styles.card_title}>
                Puma Ceres IDP Running
              </Text>
              <Text style={styles.card_oos}>Out of Stock</Text>
            </View>
            <Image
              style={styles.card_img}
              source={require("../Images/pro3.jpg")}
            />
          </View>

          {/* available product
        <View>
          <View style={styles.card}>
            <View style={{ width: "60%" }}>
              <Text style={styles.card_title}>Honor X</Text>
              <Text style={styles.card_text}>Seller: I Com</Text>
              <Text style={styles.card_money}>$ 100</Text>
            </View>
            <Image
              source={require("../Images/pro2.jpg")}
              style={styles.card_img}
            />
          </View>
          <View style={{ backgroundColor: "yellow", height: 10 }} />
        </View> */}

          {/* main_card */}
          <View
            style={{
              flexDirection: "column",
              elevation: 2,
              backgroundColor: Colors.white,
              marginTop: 8,
              alignItems: "flex-start"
            }}
          >
            {/* upper */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                backgroundColor: Colors.white,
                padding: 10,
                alignItems: "flex-start"
              }}
            >
              {/* upper-left */}
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: Colors.black,
                    padding: 5
                  }}
                  numberOfLines={1}
                >
                  Honor X
                </Text>
                <Text style={styles.card_text} numberOfLines={1}>
                  Seller: XYZ
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.card_money} numberOfLines={1}>
                    {Rupee.indian_Rupee} 10999
                  </Text>
                  <Text style={styles.card_money_discount} numberOfLines={1}>
                    {Rupee.indian_Rupee} 12999
                  </Text>
                  <Text
                    style={{ color: "green", alignSelf: "center" }}
                    numberOfLines={1}
                  >
                    10% OFF
                  </Text>
                </View>
                <Text style={styles.card_text} numberOfLines={1}>
                  1 Offer available
                </Text>
                <Text style={styles.card_text} numberOfLines={1}>
                  Delivery in 2 Days, Sat | {Rupee.indian_Rupee} 36
                </Text>
              </View>

              {/* upper-right */}
              <View>
                <Image
                  source={require("../Images/pro2.jpg")}
                  style={styles.card_img}
                />

                <Form>
                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: 120 }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Qty: 1" value="1" />
                    <Picker.Item label="Qty: 2" value="2" />
                    <Picker.Item label="Qty: 3" value="3" />
                  </Picker>
                </Form>
              </View>
            </View>
            {/* bottombar */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "50%",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="cart-arrow-down"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Save for later</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="trash"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* main-card-ends */}

          {/* main_card_with_discount */}
          <View
            style={{
              flexDirection: "column",
              elevation: 2,
              backgroundColor: Colors.white,
              marginTop: 8,
              alignItems: "flex-start"
            }}
          >
            {/* upper */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                backgroundColor: Colors.white,
                padding: 10,
                alignItems: "flex-start"
              }}
            >
              {/* upper-left */}
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: Colors.black,
                    padding: 5
                  }}
                  numberOfLines={1}
                >
                  Lenovo ideapad 330s
                </Text>
                <Text style={styles.card_text} numberOfLines={1}>
                  Seller: XYZ
                </Text>
                <Text style={styles.card_money} numberOfLines={1}>
                  {Rupee.indian_Rupee} 149
                </Text>
                
                <Text style={styles.card_text} numberOfLines={1}>
                  Delivery in 2 Days, Sat | {Rupee.indian_Rupee} 36
                </Text>
              </View>

              {/* upper-right */}
              <View>
                <Image
                  source={require("../Images/pro4.jpg")}
                  style={styles.card_img}
                />

                <Form>
                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: 120 }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Qty: 1" value="1" />
                    <Picker.Item label="Qty: 2" value="2" />
                    <Picker.Item label="Qty: 3" value="3" />
                  </Picker>
                </Form>
              </View>
            </View>
            {/* bottombar */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "50%",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="cart-arrow-down"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Save for later</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="trash"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* main-card-with-discount-ends */}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pin_card: {
    elevation: 1,
    backgroundColor: Colors.white,
    marginBottom: 6
  },
  card: {
    flexDirection: "row",
    width: "100%",
    elevation: 2,
    backgroundColor: Colors.white,
    marginTop: 8,
    padding: 10,
    alignItems: "flex-start"
  },
  card_img: {
    // alignSelf: "flex-end",
    padding: 5,
    width: 100,
    height: 100
  },
  card_title: {
    // alignSelf: "flex-start",
    fontSize: 20,
    color: Colors.black,
    padding: 5
  },
  card_oos: {
    color: Colors.red,
    padding: 5,
    fontSize: 20
  },
  card_money: {
    padding: 5,
    fontWeight: "bold",
    color: Colors.black,
    fontSize: 18
  },
  card_text: {
    paddingTop: 5,
    paddingLeft: 5
  },
  card_money_discount: {
    padding: 6,
    alignSelf: "center",
    color: Colors.theme_grey,
    fontSize: 14,
    textDecorationLine: "line-through"
  }
});
