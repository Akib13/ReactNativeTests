import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='Screen_A'
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerPosition: 'right',
        overlayColor: '#f0f'
      }}
      >
        <Drawer.Screen
          name='Screen_A'
          component={ScreenA}
          options={{
            title: "Screen A",
            drawerIcon: ({focused}) => (
              <FontAwesome5 
                name = "atlassian"
                color={ focused ? "#ff0" : "#555" }
                size= { focused ? 25:20 }
              />
            )
          }}
        />
        <Drawer.Screen
          name='Screen_B'
          component={ScreenB}
          options={{
            title: "Screen A",
            drawerIcon: ({focused}) => (
              <FontAwesome5 
                name = "btc"
                color={ focused ? "#ff0" : "#555" }
                size= { focused ? 25:20 }
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

