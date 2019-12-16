import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenA from './NearbyArticles/ScreenA';
import ScreenB from './Locations/ScreenB';
import ScreenC from './ReadingList/ScreenC';


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Articles') {
    iconName = `md-map`;
  } else if (routeName === 'Locations') {
    iconName = `md-pin`;
  } else if (routeName === 'ReadingList') {
    iconName = `ios-book`;
  }
  return <IconComponent name={iconName} size={30} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Articles: { screen: ScreenA },
      Locations: { screen: ScreenB },
      ReadingList: { screen: ScreenC },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#762F2F',
        inactiveTintColor: '#565656',
        style: {  
          backgroundColor:'#202020'  
        }
      },
    }
  )
);

