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

