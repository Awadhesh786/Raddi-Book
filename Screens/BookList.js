import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ToastAndroid
} from "react-native";
import { Thumbnail, Icon } from "native-base";
import colors from "../components/colors";
export default class BookList extends Component {
  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <TouchableOpacity
                
                onPress={()=> ToastAndroid.show("HEY", ToastAndroid.SHORT)}
               // onPress={() => this.props.navigation.navigate("Search")}
                >
                <View style={{flexDirection:'row',borderBottomColor: 'black', borderBottomWidth : 1.5}}>
                    <Thumbnail small 
                    style={{marginBottom:6, marginLeft:25}}
                    source={require("../Images/user3.jpg")} />
                    <Text
                    onPress={() => this.props.navigation.navigate("Search")}
                    style={styles.userName}>Awadhesh Chaurasia</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop:10}}>
                <View >
                <Thumbnail
                large
                square
                source={require("../Images/pro4.jpg")} style={{marginLeft:10}} />
                <Text style={styles.price}>Rs. 120</Text>
                </View>
                <View >
                <Text onPress={() => this.props.navigation.navigate("BookDetails")} 
                style={styles.bookName}>Mathematics</Text>
                <Text style={styles.writer}>Writer : Shalni Sharma</Text>
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
                <Text style={{fontWeight:'bold', fontSize:20, marginLeft:7, marginTop:10}}>Chakia</Text>
                </View>

                </View>
                </View>
                </TouchableOpacity>
            </View>
        
            <View style={styles.card} >
                <View style={{flexDirection:'row',borderBottomColor: 'black', borderBottomWidth : 1.5}}>
                    <Thumbnail small 
                    style={{marginBottom:6, marginLeft:25}}
                    source={require("../Images/user3.jpg")} />
                    <Text style={styles.userName}
                    style={{marginBottom:6, marginLeft:25}}
                    onPress={() => this.props.navigation.navigate("Cart")}
                    
                    >Ray Sk</Text>
                </View>

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
            </View>
        
            <View style={styles.card}>
                <View style={{flexDirection:'row',borderBottomColor: 'black', borderBottomWidth : 1.5}}>
                    <Thumbnail small 
                    style={{marginBottom:6, marginLeft:25}}
                    source={require("../Images/user3.jpg")} />
                    <Text style={styles.userName}>Himanshu Maurya</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop:10}}>
                <View >
                <Thumbnail
                large
                square
                source={require("../Images/pro4.jpg")} style={{marginLeft:10}} />
                <Text style={styles.price}>Rs. 310</Text>
                </View>
                <View >
                <Text style={styles.bookName}
                onPress={()=>this.props.navigation.navigate('Cart')}>General Knowledge </Text>
                <Text style={styles.writer}>Writer : Mukesh Singh</Text>
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
                <Text style={{fontWeight:'bold', fontSize:20, marginLeft:7, marginTop:10}}>Chakia</Text>
                </View>

                </View>
                </View>
            </View>
            
            <View style={styles.card}>
                <View style={{flexDirection:'row',borderBottomColor: 'black', borderBottomWidth : 1.5}}>
                    <Thumbnail small 
                    style={{marginBottom:6, marginLeft:25}}
                    source={require("../Images/user3.jpg")} />
                    <Text style={styles.userName}>Awadhesh Chaurasia</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop:10}}>
                <View >
                <Thumbnail
                large
                square
                source={require("../Images/pro4.jpg")} style={{marginLeft:10}} />
                <Text style={styles.price}>Rs. 120</Text>
                </View>
                <View >
                <Text style={styles.bookName}>Mathematics</Text>
                <Text style={styles.writer}>Writer : Shalni Sharma</Text>
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
                <Text style={{fontWeight:'bold', fontSize:20, marginLeft:7, marginTop:10}}>Chakia</Text>
                </View>

                </View>
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
        fontSize:15,
        marginTop: 8,
        marginLeft: 25
    },
    userName: {
        fontWeight:'bold',
        fontSize: 20,
        marginLeft: 80,
        borderBottomColor:'red',
    },
    writer: {
        fontWeight: "normal",
        fontSize: 10,
        //textAlign:'right',
        marginRight: 0,
        alignItems:"baseline",
    }
})