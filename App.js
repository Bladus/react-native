import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen, DefaultScreen } from './screens';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
                header: null
            }
        }, 
        Default: {
            screen: DefaultScreen,
            navigationOptions: {
                title: 'Default',
                header: null
            }
        }

    }, {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}