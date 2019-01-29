import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Easing, Animated } from "react-native";
import Home from "./Screens/home";
import SideMenu from "./SideMenu/sideMenu";
import Setting from "./Screens/setting";
import Orders from "./Screens/oders";
import Cart from "./Screens/cart";
import Search from "./Screens/search";
import Profile from "./Screens/profile";
import Notification from "./Screens/notification";
import Class6 from "./Screens/class6";
import Class11 from "./Screens/class11";
import Engineering from "./Screens/engineering";
import Medical from "./Screens/medical";
import Other from "./Screens/other";
import BookDetails from './Screens/bookDetails';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(10)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      return { transform: [{ translateX }] };
    }
  };
};

const AppNavigator = createStackNavigator(
  {
    

    Home: { screen: Home },
    Setting: { screen: Setting },
    Orders: { screen: Orders },
    Profile: { screen: Profile },
    Cart: { screen: Cart },
    Search: { screen: Search },
    
    Notification: { screen: Notification },

    Class6 : { screen : Class6},
    Class11 : { screen :Class11},
    Engineering : { screen : Engineering},
    Medical : { screen : Medical},
    Other : {screen : Other},

    BookDetails : { screen : BookDetails},
  },
  {
    transitionConfig
  }
);
const Drawer = createDrawerNavigator(
  {
    AppNavigator: { screen: AppNavigator }
  },
  {
    contentComponent: SideMenu,
    gestureEnabled: true,
    drawerWidth: 250
  }
);
export default Drawer;
