import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import React from 'react';

export default function Map({ route }) {

    const {city} = route.params;

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                {city}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },

});