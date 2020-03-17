import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialIcons } from '@expo/vector-icons';

import Drawer from '~/components/Drawer';
import { widthPercentageToDP, heightPercentageToDP } from '~/config/PixelRatio';
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
                  style={styles.menu}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }>
                  <MaterialIcons
                    name="menu"
                    size={heightPercentageToDP('3.8%')}
                    color={colors.echo_blue}
                  />
                </TouchableOpacity>
              ),
              headerLeft: () => <Image source={logo} style={styles.logo} />,
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

const styles = StyleSheet.create({
  logo: {
    marginLeft: widthPercentageToDP('3.8%'),
    width: widthPercentageToDP('36%'),
    height: heightPercentageToDP('8%'),
  },
  menu: {
    marginRight: widthPercentageToDP('3.8%'),
  },
});

export default Routes;
