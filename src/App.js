import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold'
        }
      }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
          
          options = {{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;

