import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor : '#f0f',
          tabBarInactiveTintColor: '#555',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Screen_A') {
              iconName = 'atlassian';
              size = focused ? 30:20;
              // color = focused ? '#f0f' : '#555';
            }
            else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 30:20;
              // color = focused ? '#f0f' : '#555';
            }
            return (
              <FontAwesome5
                name = {iconName}
                size = {size}
                color = {color}
              />
            );
        }
      })}
      
      >
        <Tab.Screen
          name='Screen_A'
          component={ScreenA}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen
        name='Screen_B'
        component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

