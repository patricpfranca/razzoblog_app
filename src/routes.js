import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialIcons } from '@expo/vector-icons';

import Home from '~/pages/Home';

import { colors } from './styles';

const logo = require('../assets/logo.png');

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <MaterialIcons name="menu" size={25} color={colors.echo_blue} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <Image
              source={logo}
              style={{ marginLeft: 15, width: 130, height: 53 }}
            />
          ),
          title: null,
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          height: 100,
        },
      },
    }
  )
);

export default Routes;
