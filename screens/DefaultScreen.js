import React from 'react';
import {
    StyleSheet, Text, View, Image, SafeAreaView, Alert,
    ScrollView, FlatList,
    TouchableOpacity
} from 'react-native';

export default class DefaultScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container} >
                <Text> Страница Default</Text>
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
});