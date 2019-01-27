import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import {
  Container,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Icon
} from "native-base";
import { Avatar } from "react-native-elements";
import colors from "./colors";

export default class recom extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            padding: 6,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View>
            <Image source={require("../Images/men.jpg")} style={styles.image} />
            <Text style={styles.cat_item}>Men</Text>
          </View>
          <View>
            <Image
              source={require("../Images/women.jpg")}
              style={styles.image}
            />
            <Text style={styles.cat_item}>Women</Text>
          </View>
          <View>
            <Image
              source={require("../Images/home.jpg")}
              style={styles.image}
            />
            <Text style={styles.cat_item}>Appliance</Text>
          </View>
          <View>
            <Image source={require("../Images/mo.jpg")} style={styles.image} />
            <Text style={styles.cat_item}>Electronics</Text>
          </View>
          <View>
            <Image source={require("../Images/k1.jpg")} style={styles.image} />
            <Text style={styles.cat_item}>Kitchen</Text>
          </View>
          <View>
            <Image source={require("../Images/s1.png")} style={styles.image} />
            <Text style={styles.cat_item}>Sport</Text>
          </View>
          <View>
            <Image source={require("../Images/b1.jpg")} style={styles.image} />
            <Text style={styles.cat_item}>Beauty</Text>
          </View>

          <View>
            <Image source={require("../Images/t1.jpg")} style={styles.image} />
            <Text style={styles.cat_item}>Toy</Text>
          </View>

          <View>
            <Image source={require("../Images/tr.jpg")} style={styles.image} />
            <Text style={styles.cat_item}>Travel</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 61,
    width: 61,
    margin: 2
  },
  cat_item: {
    textAlign: "center",
    fontSize: 10,
    margin: 2
  }
});
