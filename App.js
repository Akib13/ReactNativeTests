import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';


const App = () => {

  const [name, setName] = useState("Hi Akib");
  const [session, setSession] = useState({ number:1, title: "test 1"});
  const [current, setCurrent] = useState (false);
  const [click, setClick] = useState (0);

  const onClickHandler = () => {
    setName ("!!! AKIB AHMED !!!");
    setSession ({ number: 2, title: "test-2" });
    setCurrent (true);
    setClick (click + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> {name} </Text>
      <Text style={styles.text}> take {session.number} and {session.title} </Text>
      <Text style={styles.text}> Boolean Test {current ? " True" : " False"} </Text>
      <Button title='click here' onPress={onClickHandler}> </Button>
      <Text style={styles.text}> initial number : {click * 5} </Text>
      <Text style={styles.text}> Clicked the button {click} times </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10
  }
});

export default App;