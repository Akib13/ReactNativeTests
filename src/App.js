import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
          name='Screen_A'
          component={ScreenA}
          
          options = {{
            header:() => null
          }}
        />
        <Stack.Screen
        name='Screen_B'
        component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

