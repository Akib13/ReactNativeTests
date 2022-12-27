import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TextInput
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import GlobalStyle from '../utils/GlobalStyle';

export default function Home ({navigation}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem("UserData")
            .then(value => {
                if (value != null) {
                    var user = JSON.parse(value);
                    setName(user.Name);
                    setAge(user.Age);
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert("Warning!", "Please provide your name");
        }
        else {
            try {
                var user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert("Success!", "Your data has been updated.");
                
            } catch (error) {
                console.log(error);
            }
        }
    };

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem("UserData");
            //await AsyncStorage.clear();
            navigation.navigate("Login");
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <View style={styles.body} >
            <Text style={[GlobalStyle.CustomFont, styles.text]}>
                Welcome {name}!
            </Text>
            <Text style={[GlobalStyle.CustomFont, styles.text]}>
                You are: {age}!
            </Text>
            <TextInput 
                style={styles.input} 
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <CustomButton 
                title = 'Update'
                color = '#f0f'
                onPressFunction = {updateData}
            />
            <CustomButton 
                title = 'Remove'
                color = '#f41'
                onPressFunction = {removeData}
                style={{ marginTop: 10 }}
            />
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
        fontSize: 30,
    },
    input: {
        width: 300,
        backgroundColor: '#ffffff',
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 120,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 20,
    },
});
