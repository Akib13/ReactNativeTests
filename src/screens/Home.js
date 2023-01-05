// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import GlobalStyle from '../utils/GlobalStyle';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge, getCities } from '../redux/actions';
import PushNotification from "react-native-push-notification";

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => {},
    error => {console.log(error)},
);

export default function Home ({navigation}) {

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    const { name, age, cities } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
        dispatch(getCities());
    }, []);

    const getData = () => {
        try {
            /*AsyncStorage.getItem("UserData")
            .then(value => {
                if (value != null) {
                    var user = JSON.parse(value);
                    setName(user.Name);
                    setAge(user.Age);
                }
            })*/
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userAge = results.rows.item(0).Age;

                            dispatch(setName(userName));
                            dispatch(setAge(userAge));
                        }
                    }
                )
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
                /*var user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert("Success!", "Your data has been updated.");*/
                db.transaction((tx)=> {
                    tx.executeSql(
                        "UPDATE Users SET Name=?",
                        [name],
                        () => {Alert.alert("Success!", "Your data has been updated.")},
                        error => {console.log(error)}
                    )
                })
                
            } catch (error) {
                console.log(error);
            }
        }
    };

    const removeData = async () => {
        try {
            //await AsyncStorage.removeItem("UserData");
            //await AsyncStorage.clear();
            db.transaction((tx) => {
                tx.executeSql(
                    "DELETE FROM Users",
                    [],
                    () => { navigation.navigate("Login") },
                    error => {console.log(error)}
                )
            })
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleNotification = (item, index) => {

        PushNotification.cancelAllLocalNotifications();

        PushNotification.localNotification({
            channelId: "test-channel",
            title: "You clicked on " + item.country,
            message: item.city,
            bigText: item.city + " is one of the largest and most beatiful cities in " + item.country,
            color: "red",
            id: index
        });

        // This part is not implemented yet
        /*PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Alarm",
            message: "You clicked on " + item.country + " 20 seconds ago",
            date: new Date(Date.now() + 20 * 1000),
            allowWhileIdle: true,
        });*/
    };

    return(
        <View style={styles.body} >
            <Text style={[GlobalStyle.CustomFont, styles.text]}>
                Welcome {name}!
            </Text>

            <CustomButton 
                title="Open Camera"
                color="#0080ff"
                onPressFunction={() => { navigation.navigate('Camera') }}
            />

            <FlatList 
                data={cities}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        onPress={() => { 
                            handleNotification(item, index);
                            navigation.navigate('Map', {
                                city: item.city,
                                lat: item.lat,
                                lng: item.lng,
                            });
                        }}
                    >
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.country}</Text>
                            <Text style={styles.subtitle}>{item.city}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />


            { /*<Text style={[GlobalStyle.CustomFont, styles.text]}>
                You are: {age}!
            </Text>
            <TextInput 
                style={styles.input} 
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
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
            <CustomButton 
                title = 'Add Age'
                color = '#0080ff'
                onPressFunction = {() => {dispatch(increaseAge())}}
                style={{ marginTop: 10 }}
    />*/}
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
    item: {
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderColor: "#cccccc",
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        margin:10,
    },
    subtitle: {
        fontSize: 20,
        margin: 10,
        color: "#999999",
    },
});
