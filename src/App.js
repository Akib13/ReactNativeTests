import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      // remove header from all screens
      /*screenOptions={{
        header: () => null
      }}*/
      >
        <Stack.Screen
          name='Screen_A'
          component={ScreenA}
          // to remove the header from a screen
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

