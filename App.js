import {createStackNavigator, createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResultShowScreen from './src/screens/ResultShoeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Home: HomeScreen,
    ResultsShow: ResultShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);
export default createAppContainer(navigator);
