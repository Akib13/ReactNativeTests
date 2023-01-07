import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, Header } from '@react-navigation/stack';
import Splash from './screens/Splash';
import ToDo from './screens/ToDo';
import Done from './screens/Done';
import Task from './screens/Task';
import Map from './screens/Map';
import Camera from './screens/Camera';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={
      ({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'clipboard-list';
            size = focused ? 25: 20;
          } else if (route.name === 'Done') {
            iconName = 'clipboard-check';
            size = focused ? 25: 20;
          }
          return(
            <FontAwesome5 
              name = {iconName}
              color = {color}
              size = {size}
            />
          );
        },
        tabBarActiveTintColor: '#0080ff',
        tabBarInactiveTintColor: '#777777',
        tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
      })
    }
    >
      <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  )
}

const RootStack = createStackNavigator();

const App = () => {

  return (
    <Provider store={Store}>
    <NavigationContainer>
      <RootStack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold'
        },
      }}
      >
        <RootStack.Screen
          name='Splash'
          component={Splash}
          options = {{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name='My Tasks'
          component={HomeTabs}
        />
        <RootStack.Screen
          name='Task'
          component={Task}
        />
        <RootStack.Screen
          name='Camera'
          component={Camera}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;

