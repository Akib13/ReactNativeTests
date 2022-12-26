import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';

export default function ScreenB ({navigation, route}) {

  const { Message, Id } = route.params;

    const onPressHandler = () => {
      navigation.navigate("Screen_A", {msg:"From Screen B"} );
      // navigation.goBack();
    }
  
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          This is screen B
        </Text>
        <Pressable
          onPress={onPressHandler}
          style = {({pressed}) => ({ backgroundColor: pressed ? "#ddd": "#0f0" })}
        >
          <Text style = {styles.text}> 
            Go back to screen A
          </Text>
        </Pressable>
        <Text style = {styles.text}> {Message} </Text>
        <Text style = {styles.text}> ID: {Id} </Text>
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