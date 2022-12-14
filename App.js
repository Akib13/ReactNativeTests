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


/*
const App = () => {

  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.big_row}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big_row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#0fff0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
*/


/*
const App = () => {

  const [item, setItem] = useState([
    {key: 1, value: 1},
    {key: 2, value: 2},
    {key: 3, value: 3},
    {key: 4, value: 4},
    {key: 5, value: 5},
    {key: 6, value: 6},
    {key: 7, value: 7},
    {key: 8, value: 8},
    {key: 9, value: 9},
    {key: 10, value: 10},
  ]);

  const [refresh, setRefresh] = useState (false);

  const onRefresh = () => {
    setRefresh(true);
    setItem([...item, {key: 11, value: 11}]);
    setRefresh(false);
  }

  return (
    <ScrollView 
      style={styles.body}
      refreshControl = {
        <RefreshControl
          refreshing = {refresh}
          onRefresh = {onRefresh}
          colors= {['#ff00ff']}
        />
      }
      >
      {
        item.map((object) => {
          return (
            <View style = {styles.item} key = {object.key}>
              <Text style={styles.text}> {object.key} </Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#fab',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10
  }
});

export default App;
*/
