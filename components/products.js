import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, Body, Left, Right, Thumbnail } from "native-base";
import Colors from "../components/colors";

export default class product extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: Colors.white,
          margin: 5
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              // margin: 5,
              // borderRadius: 5,
              // width: 100,
              // height: 100,
              // backgroundColor: "red",
              // backgroundColor: Colors.white,
              borderWidth: 1,
              borderRadius: 3,
              borderColor: "#ddd",
              borderBottomWidth: 0,
              shadowColor: "#ddd",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 0.5,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              marginBottom: 10
            }}
            onPress={() => {
              //props.navigation.navigate("Orders");
              //navigation.navigate("ProductDetails");
              ToastAndroid.show("Click", ToastAndroid.LONG);
            }}
          >
            <Image
              source={require("../Images/pro1.jpg")}
              style={styles.image}
            />
            {/* <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "grey"
              }}
            /> */}
            <Text style={styles.cat_item}>50% OFF</Text>
          </TouchableOpacity>
          <View
            style={{
              // margin: 5,
              // borderRadius: 5,
              // backgroundColor: Colors.white
              borderWidth: 1,
              borderRadius: 3,
              borderColor: "#ddd",
              borderBottomWidth: 0,
              shadowColor: "#ddd",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 0.5,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Image
              source={require("../Images/pro3.jpg")}
              style={styles.image}
            />
            {/* <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "grey"
              }}
            /> */}
            <Text style={styles.cat_item}>70% OFF</Text>
          </View>
          <View
            style={{
              // margin: 5,
              // borderRadius: 5,
              // backgroundColor: Colors.white
              borderWidth: 1,
              borderRadius: 3,
              borderColor: "#ddd",
              borderBottomWidth: 0,
              shadowColor: "#ddd",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 0.5,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Image
              source={require("../Images/pro2.jpg")}
              style={styles.image}
            />
            <Text style={styles.cat_item}>50% OFF</Text>
          </View>
          <View
            style={{
              // margin: 5,
              // borderRadius: 5,
              // backgroundColor: Colors.white
              borderWidth: 1,
              borderRadius: 3,
              borderColor: "#ddd",
              borderBottomWidth: 0,
              shadowColor: "#ddd",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 0.5,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Image
              source={require("../Images/pro2.jpg")}
              style={styles.image}
            />
            <Text style={styles.cat_item}>50% OFF</Text>
          </View>
          <View
            style={{
              // margin: 5,
              // borderRadius: 5,
              // backgroundColor: Colors.white
              borderWidth: 1,
              borderRadius: 3,
              borderColor: "#ddd",
              borderBottomWidth: 0,
              shadowColor: "#ddd",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 0.5,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Image
              source={require("../Images/pro2.jpg")}
              style={styles.image}
            />
            <Text style={styles.cat_item}>50% OFF</Text>
          </View>
        </ScrollView>
      </View>
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
