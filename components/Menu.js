import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

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

const styles = StyleSheet.create({
    sidemenu: {
        flex: 1,
        backgroundColor: '#22aade'
    },
    menu_items: {
        padding: 10,
        fontSize: 20
    }
});

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View style={styles.sidemenu} >
                <FlatList
                    data={menu_items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={styles.menu_items} >
                            <Text onPress={() => this.props.navigation(item.screen)} >{item.title}</Text>
                            {/*<Text >{item.title}</Text>*/}
                        </View>
                    )}
                />
            </View>
        )
    }
};