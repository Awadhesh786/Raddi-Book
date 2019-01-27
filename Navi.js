import { createStackNavigator } from "react-navigation";
import Home from "./Screens/home";

const Navi = createStackNavigator({
  Home: { screen: Home }
});
export default Navi;
