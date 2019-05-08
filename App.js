import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { HomeScreen, DefaultScreen } from './screens';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

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
    constructor(props) {
        super(props);
        this.state = {
            side_menu_open: false
        };
        this.onPress = this.onPress.bind(this);
        this.pushRoute = this.pushRoute.bind(this);
    }
    onPress() {
        //Alert.alert('You tapped the button!');
        this.setState({
            side_menu_open: true
        });
    }
    pushRoute(route) {
        this.navigator && this.navigator._navigation.navigate(route)
        this.setState({
            side_menu_open: false
        });
    }

    render() {
        
        let {side_menu_open} = this.state;
        return (
            <SafeAreaView style={styles.safe_area}>
                <View style={styles.wrapper}>
                    <SideMenu menu={<Menu navigation={(route) => this.pushRoute(route)} />} isOpen={side_menu_open} >
                        <Header onPress={() => this.onPress()} title="Заголовок" />
                        <AppContainer 
                            ref={nav => {
                              this.navigator = nav;
                            }}
                        />
                        <Footer/>
                    </SideMenu>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safe_area: {flex: 1, backgroundColor: 'powderblue'},
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
});