/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './src/components/AuthenScreen/loadingScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RootScreen from './src/components/AuthenScreen/rootScreen';
import { Provider } from 'react-redux';
import createReduxStore from './src/redux/store/store';

const RootContainer = createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen: {
        screen: LoadingScreen
      },
      RootScreen: {
        screen: RootScreen
      }
    },
    {
      initialRouteName: 'LoadingScreen'
    }
  )
);
class App extends React.Component {
  render() {
    return (
      <Provider store={createReduxStore}>
        <NavigationContainer>
          <RootContainer />
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App;