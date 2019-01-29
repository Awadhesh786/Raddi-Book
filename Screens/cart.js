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
  Thumbnail,
  Col,
  Left,
  Card,
  CardItem,
  Form,
  Picker
} from "native-base";
import Colors from "../components/colors";
import colors from "../components/colors";

export default class cart extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Book Post",
    headerStyle: {
      backgroundColor: colors.sky,
      elevation: 0
    },
    headerTintColor: colors.white
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
                  width: "50%",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="pencil"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Edit</Text>
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
                  name="circle"
                  type="FontAwesome"
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
                  width: "50%",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="pencil"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Edit</Text>
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
                  name="circle"
                  type="FontAwesome"
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
                  width: "50%",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="pencil"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Edit</Text>
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
                  name="circle"
                  type="FontAwesome"
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
                  width: "50%",
                  borderColor: Colors.blue_grey,
                  borderWidth: 0.2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  name="pencil"
                  type="FontAwesome"
                  style={{ padding: 10, color: "gray" }}
                />
                <Text style={{ color: Colors.black }}>Edit</Text>
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
