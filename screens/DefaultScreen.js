import React from 'react';
import {
    StyleSheet, Text, View, Image, SafeAreaView, Alert,
    ScrollView, FlatList,
    TouchableOpacity
} from 'react-native';
import SideMenu from 'react-native-side-menu';

const menu_items = [
    {
        "title": "Главная",
        "screen": 'Home'
    },
    {
        "title": "Default",
        "screen": 'Default'
    }
];

export default class DefaultScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            side_menu_open: false
        }
        this.request = this.request.bind(this);
        this.onPress = this.onPress.bind(this);
    }
    async request() {
        try {
            let data = await fetch(url);
            let items = await data.json();
            this.setState({items})
        } catch(err) {
            return [];
        }
    }
    onPress() {
        //Alert.alert('You tapped the button!');
        this.setState({
            side_menu_open: true
        });
    }
    componentDidMount() {
        this.request();
    }
    render() {
        let {items, side_menu_open} = this.state;
        return (
            <SafeAreaView style={styles.safe_area}>
                <View style={styles.wrapper}>
                    <SideMenu menu={<Menu navigation={this.props.navigation} />} isOpen={side_menu_open} >
                        <View style={styles.container_menu} >
                            <TouchableOpacity
                                onPress={this.onPress}
                            >
                                <Image
                                    style={styles.menu}
                                    source={require('../assets/menu.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.title} >Заголовок</Text>
                        </View>
                        <View style={styles.container} >
                            <Text> Страница Default</Text>
                        </View>
                        <View style={styles.footer} >
                            <Text style={{color: '#fff'}} >тестовый проект 2019</Text>
                        </View>
                    </SideMenu>
                </View>
            </SafeAreaView>
        )
    };
}

const Menu = (props) => {
    let {navigation} = props;
    return(
        <View style={styles.sidemenu} >
            <FlatList
                data={menu_items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={styles.menu_items} >
                        <Text onPress={() => navigation.navigate(item.screen)} >{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    safe_area: {flex: 1, backgroundColor: 'powderblue'},
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    container_menu: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'powderblue',
        paddingTop: 10,
        paddingLeft: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    footer: {
        height: 60,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 4.5,
        fontSize: 25,
    },
    menu: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    images: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    response: {
        padding: 10,
        alignItems: 'center'
    },
    response_text: {
        marginTop: 10,
        color: '#205065',
        fontSize: 15
    },
    sidemenu: {
        flex: 1,
        backgroundColor: '#22aade'
    },
    menu_items: {
        padding: 10,
        fontSize: 20
    }
});