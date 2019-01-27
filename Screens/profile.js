import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import colors from "../components/colors";
import { Thumbnail, Icon } from "native-base";

export default class profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "My Profile",
    headerStyle: {
      backgroundColor: colors.sky,
      elevation: 0
    },
    headerTintColor: "#fff"
  });
  render() {
    return (
      <View>
        <ScrollView>
          {/* userDataName */}
          <View
            style={{
              flexDirection: "row",
              height: 120,
              backgroundColor: colors.sky,
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Thumbnail large source={require("../Images/user3.jpg")} />
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: colors.white }}>Awadhesh Chaurasia</Text>
              <Text style={{ fontSize: 15, color: colors.white }}>
                +91 9936169852
              </Text>
              
            </View>
          </View>

          {/* money card */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.card_title}>Awadhesh Chaurasia</Text>
              <Icon
                  name="pencil"
                  type="FontAwesome"
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    padding: 5,
                  }}
                />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.card_title}>+91 9936169852</Text>
              <Icon
                  name="pencil"
                  type="FontAwesome"
                  style={{
                    color: colors.black,
                    fontSize: 20,
                    padding: 5,
                  }}
                />
            </View>
          </TouchableOpacity>

          {/* wallets */}

          {/* Reviews */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.card_title}>Total Book Post</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ alignSelf: "center", color: colors.blue }}>
                  12
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* address */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.card_title}>My Address</Text>
            </View>

            <View style={{ padding: 5 }}>
              <Text numberOfLines={2}>
                House No. 72, Mohammadabad Chakia Chandauli, 232103
              </Text>
            </View>
          </TouchableOpacity>

          {/* bottom_list */}
          <View
            style={{
              width: "100%",
              backgroundColor: colors.white,
              padding: 5
            }}
          >
            {/* item 1 */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 2,
                alignItems: "center"
              }}
            >
              <Icon
                name="bell-o"
                type="FontAwesome"
                style={{
                  fontSize: 15,
                  margin: 5
                }}
              />
              <Text
                style={{
                  margin: 5
                }}
              >
                Notification Preferences
              </Text>
            </TouchableOpacity>
            {/* item 2 */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 2,
                alignItems: "center"
              }}
            >
              <Icon
                name="lock"
                type="AntDesign"
                style={{
                  fontSize: 15,
                  margin: 5
                }}
              />
              <Text
                style={{
                  margin: 5
                }}
              >
                Privacy
              </Text>
            </TouchableOpacity>
            {/* item 3 */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 2,
                alignItems: "center"
              }}
            >
              <Icon
                name="logout"
                type="SimpleLineIcons"
                style={{
                  fontSize: 15,
                  margin: 5
                }}
              />
              <Text
                style={{
                  margin: 5
                }}
              >
                Logout of this app
              </Text>
            </TouchableOpacity>

            {/* item 4   */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 2,
                alignItems: "center"
              }}
            >
              <Icon
                name="logout"
                type="SimpleLineIcons"
                style={{
                  fontSize: 15,
                  margin: 5
                }}
              />
              <Text
                style={{
                  margin: 5
                }}
              >
                Logout of all devices
              </Text>
            </TouchableOpacity>
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
    elevation: 1,
    padding: 10,
    borderRadius: 2
  },
  card_header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  card_title: {
    color: colors.black,
    alignSelf: "center",
    padding: 5
  }
});
