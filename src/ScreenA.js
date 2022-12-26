import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';

export default function ScreenA ({navigation}) {

    const onPressHandler = () => {
        navigation.navigate("Screen_B");
        //navigation.replace("Screen_B");
    }

    return(
        <View style={styles.body} >
        <Text style = {styles.text}> 
            This is screen A
        </Text>
        <Pressable
            onPress={onPressHandler}
            style = {({pressed}) => ({ backgroundColor: pressed ? "#ddd": "#0f0" })}
        >
            <Text style = {styles.text}> 
            Go to screen B
            </Text>
        </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
}
});
