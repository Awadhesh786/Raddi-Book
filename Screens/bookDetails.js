import React, { Component } from "react";
import { View, Text, ScrollView,StyleSheet, Button } from "react-native";
import { Thumbnail, Icon } from "native-base";
import colors from "../components/colors";
import Colors from "../components/colors";
export default class productList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Book Details",
    headerStyle: {
      backgroundColor: Colors.sky,
      elevation: 0
    },
    headerTintColor: "#fff",
    headerRight: (
      <View>
        <Icon
            name="share"
            type="Entypo"
            style={{
              color: Colors.white,
              marginRight:20
            }}
          />
      </View>
    )
  });

  render() {
    return (
      <View>
        <Thumbnail
        large
        square
        source={require("../Images/pro4.jpg")}
        style={{ alignSelf:"center", marginTop:20}} />
            <View style={{flexDirection:"row"}}>
            <Thumbnail
            large
            square
            source={require("../Images/pro4.jpg")}
            style={{marginLeft: 60, marginTop:10}} />
            <Thumbnail
            large
            square
            source={require("../Images/pro4.jpg")}
            style={{marginLeft:30, marginTop:10}}  />
            <Thumbnail
            large
            square
            source={require("../Images/pro4.jpg")}
            style={{marginLeft: 30, marginTop:10}}  />
            </View>
          
        <Text style={{fontSize:25, fontWeight:"bold", color:"black", textAlign:"center", marginTop:25}}>Opreating System</Text>
        <ScrollView style={{marginTop:10}}>
          <View style={styles.card}>
              <Text style={styles.head}>Writer  : </Text>
              <Text style={styles.name}>Shalni Sharma</Text>
          </View>
          <View style={styles.card}>
              <Text style={styles.head}>Publication  : </Text>
              <Text style={styles.name}>Evergreen</Text>
          </View><View style={styles.card}>
              <Text style={styles.head}>Ratig  : </Text>
              <Text style={styles.name}>3/5</Text>
          </View>
          <View style={styles.card}>
              <Text style={styles.head}>Description : </Text>
              <Text style={styles.name}>Good Condition</Text>
          </View>
          <View style={styles.card}>
              <Text style={styles.head}>Address  : </Text>
              <Text style={styles.name}>Mohammadabad Chakia</Text>
              <Icon
                  name="location-pin"
                  type="SimpleLineIcons"
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    padding: 5,
                    marginLeft:50,
                    
                  }}
                />
          </View>
          <View style={styles.card}>
              <Text style={styles.head}>Mobile No.  : </Text>
              <Text style={styles.name}>9936169852</Text>
              <Icon
                  name="phone"
                  type="AntDesign"
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    padding: 5,
                    marginLeft:120
                  }}
                />
          </View>
        </ScrollView>
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
    flexDirection:"row"
      },

    head: {
      fontWeight:"bold",
      fontSize:18, 
      marginLeft:10
    },
    name: {
      fontSize:18,
      marginLeft:15
    }

  })