import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer_text: {
        color: '#fff'
    }
});

const Footer = (props) => {
    return(
        <View style={styles.footer} >
            <Text style={styles.footer_text} >тестовый проект 2019</Text>
        </View>
    )
};

export default Footer;