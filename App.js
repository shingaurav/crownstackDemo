import 'react-native-gesture-handler';
import * as React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListingScreen from './src/components/views/listingScreen';
import DetailsScreen from './src/components/views/detailsScreen';
import SplashScreen from './src/components/views/splashScreen';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: true}}
          nav
        />
        <Stack.Screen
          name="ListingScreen"
          component={ListingScreen}
          options={
            ({headerShown: true},
            {title: 'SONGS'},
            {
              headerStyle: {
                backgroundColor: '#277dc7',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })
          }
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
