import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';

export default function ScreenB ({navigation}) {

    const onPressHandler = () => {
      //navigation.navigate("Screen_B");
      navigation.goBack();
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