import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/pages/Home';

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {},
    },
  })
);

export default Routes;
