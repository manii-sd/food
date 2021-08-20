import {createStackNavigator, createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);
export default createAppContainer(navigator);
