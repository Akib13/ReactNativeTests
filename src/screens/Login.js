import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  Alert
} from 'react-native';
import CustomButton from '../utils/CustomButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions';


const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => {},
    error => {console.log(error)},
);

export default function Login ({navigation}) {

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        createTable();
        getData();
    }, []);

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    };

    const getData = () => {
        try {
            /*AsyncStorage.getItem("UserData")
            .then(value => {
                if (value != null) {
                    navigation.navigate('Home');
                }
            })*/
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('Home');
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    };

    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert("Warning!", "Please provide your name");
        }
        else {
            try {
                dispatch(setName(name));
                dispatch(setAge(age));

                /*var user = {
                    Name: name,
                    Age: age
                };
                await AsyncStorage.setItem('UserData', JSON.stringify(user));*/

                await db.transaction( async (tx) => {
                    /*await db.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES ('"+name+"', "+age+")"
                    );*/
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?,?)",
                        [name, age]
                    );
                })

                navigation.navigate("Home");
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../../assets/redux_logo.png')}
            />

            <Text style={styles.text}>
                Redux
            </Text>

            <TextInput 
                style={styles.input} 
                placeholder="Enter your name"
                onChangeText={(value) => dispatch(setName(value))}
            />

            <TextInput 
                style={styles.input} 
                placeholder="Enter your Age"
                onChangeText={(value) => dispatch(setAge(value))}
            />

            <CustomButton 
                title = 'login'
                color = '#1eb900'
                onPressFunction = {setData}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 100,
    },
    input: {
        width: 300,
        backgroundColor: '#ffffff',
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 20,
    }
});
