import React from 'react';
import {
    StyleSheet, Text, View, Image, SafeAreaView, Alert,
    ScrollView, FlatList,
    TouchableOpacity
} from 'react-native';

const url = 'https://picsum.photos/v2/list?limit=10';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.request = this.request.bind(this);
    }
    request() {
        try {
            (async () => {
                let data = await fetch(url);
                let items = await data.json();
                this.setState({items})
            })();
        } catch(err) {
            return [];
        }
    }
    componentDidMount() {
        this.request();
    }
    render() {
        let {items} = this.state;
        return (
            <SafeAreaView style={styles.safe_area}>
                <View style={styles.wrapper}>
                    <View style={styles.container_menu} >
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert('You tapped the button!');
                            }}
                        >
                            <Image
                                style={styles.menu}
                                source={require('./assets/menu.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title} >Заголовок</Text>
                    </View>
                    <View style={styles.container} >
                        <FlatList
                            data={items}
                            keyExtractor={(item, index) => index}
                            numColumns={2}
                            renderItem={({item}) => (
                                <View style={styles.response}>
                                    <Image 
                                        style={{width: 150, height: 150}}
                                        source={{uri: item.download_url}}
                                    />
                                    <Text>{item.author}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.footer} >
                        <Text style={{color: '#fff'}} >тестовый проект 2019</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    };
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
        marginTop: 5,
        fontSize: 25,
    },
    menu: {
        width: 40,
        height: 40,
        marginRight: 20
    },
    response: {
        padding: 10,
    }
});