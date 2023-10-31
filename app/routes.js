import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';

const stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{headerShown: true}}
          initialRouteName="home">
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="about" component={About} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
