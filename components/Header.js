import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
    container_menu: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'powderblue',
        paddingTop: 10,
        paddingLeft: 20,
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 20
    },

    title: {
        marginTop: 4.5,
        fontSize: 25,
    },
});

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.container_menu} >
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <Image
                        style={styles.image}
                        source={require('../assets/menu.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.title} >{this.props.title}</Text>
            </View>
        )
    }
};