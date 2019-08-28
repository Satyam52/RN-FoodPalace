import { createAppContainer, createStackNavigator } from "react-navigation";
import SearchScreen from "./src/screens/searchScreen";
import ResultShow from "./src/screens/ResultShowScreen";
const App = createStackNavigator(
  {
    search: SearchScreen,
    ResultShow: ResultShow
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "FoodPalace"
    }
  }
);

export default createAppContainer(App);
