import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialIcons } from '@expo/vector-icons';

import Drawer from '~/components/Drawer';
import Home from '~/pages/Home';

import { colors } from './styles';

const logo = require('../assets/logo.png');

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Home: createStackNavigator(
        {
          Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }>
                  <MaterialIcons
                    name="menu"
                    size={25}
                    color={colors.echo_blue}
                  />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <Image
                  source={logo}
                  style={{ marginLeft: 15, width: 130, height: 53 }}
                />
              ),
              title: null,
            }),
          },
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              height: 100,
            },
          },
        }
      ),
    },
    { contentComponent: Drawer }
  )
);

export default Routes;
