import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Container,Thumbnail, Text, Content, Icon, Badge } from "native-base";
import Colors from "../components/colors";
import { Rating } from "react-native-elements";
import colors from "../components/colors";

import Delivered from "../components/orders_components/delivered";
import Canceled from "../components/orders_components/cancled";
import Refund from "../components/orders_components/refund";
import NoOder from "../components/orders_components/noOrder";

export default class orders extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "My Card",
    headerStyle: {
      backgroundColor: Colors.sky,
      elevation: 0
    },
    headerTintColor: Colors.white
  });
  render() {
    return (
      <View>
        <View style={styles.card}>
                
                <View style={{flexDirection: 'row', marginTop:10}}>
                <View >
                <Thumbnail
                large
                square
                source={require("../Images/pro4.jpg")} style={{marginLeft:10}} />
                <Text style={styles.price}>Rs. 240</Text>
                </View>
                <View >
                <Text style={styles.bookName}>Opreating System</Text>
                <Text style={styles.writer}>Writer : Sanjay Singh</Text>
                <Text style={{fontWeight:'bold', fontSize:20, marginLeft:80}}>Engineerings</Text>

                <View style={{flexDirection:"row"}}>
                <Icon
                  name="location-pin"
                  type="SimpleLineIcons"
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    padding: 5,
                    marginLeft:80,
                    marginTop:10
                  }}
                />
                <Text style={{fontWeight:'bold', fontSize:20, marginLeft:7, marginTop:10}}>Agra</Text>
                </View>

                </View>
                </View>
               

              <View style={{ flexDirection: "row", marginTop:20}}>
              
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  width: "100%",
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
        <NoOder />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    margin: 8,
    backgroundColor: colors.white,
    elevation: 3,
    padding: 10,
      },
  bookName : {
      marginLeft: 80,
      color: "black",
      fontSize: 25,
      fontWeight: "bold"
  },
  price: {
      fontSize: 15,
      marginTop: 8,
      marginLeft: 25
  },
  userName: {
      fontWeight:'bold',
      fontSize: 25,
      marginLeft: 5,
      marginTop:7,
      color:"red",
      alignItems: 'center',
  },
  writer: {
      fontWeight: "normal",
      fontSize: 10,
      marginLeft: 200
  }
});
