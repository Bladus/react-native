import React from 'react';
import {
    StyleSheet, Text, View, Image, SafeAreaView, Alert,
    ScrollView, FlatList,
    TouchableOpacity
} from 'react-native';

const url = 'https://picsum.photos/v2/list?limit=10';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        this.request = this.request.bind(this);
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
    componentDidMount() {
        this.request();
    }
    render() {
        let {items} = this.state;
        return (
            <View style={styles.container} >
                <FlatList
                    data={items}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={styles.response}>
                                <Image 
                                style={styles.images}
                                source={{uri: item.download_url}}
                            />
                            <Text style={styles.response_text}>{item.author}</Text>
                        </View>
                    )}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'center'
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
    }
});