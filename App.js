import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/Reducers/index';
 
import CameraScreen from './src/components/CameraScreen';
import DetailsScreen from './src/components/DetailsScreen';
import FrontEnd from './src/components/FrontEnd';
import HomeScreen from './src/components/HomeScreen';
import InputData from './src/components/InputData';
import Login from './src/components/Login';
import Maps from './src/components/Maps';
import MapsLocation from './src/components/MapsLocation';
import NewScreen from './src/components/NewScreen';
import ViewDetails from './src/components/ViewDetails';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    MapsLocation: MapsLocation,
    Maps: Maps,
    Login: Login,
    Input: InputData,
    New: NewScreen,
    View: ViewDetails,
    Front: {
      screen: FrontEnd,
      navigationOptions: {
        header: null,
      }
    },
    New: {
      screen: NewScreen,
      navigationOptions: {
        header: null,
      }
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        header: null,
      }
    },

  },
  {
    initialRouteName: 'Front'
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
    <AppContainer />
</Provider>
  }
}
