import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';


const App = () => {

  const [Item, setItem] = useState([
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'},
    {name: 'item 6'},
    {name: 'item 7'},
    {name: 'item 8'},
    {name: 'item 9'},
    {name: 'item 10'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]

  const [refresh, setRefresh] = useState (false);

  const onRefresh = () => {
    setRefresh(true);
    setItem([...Item, {name: '11'}]);
    setRefresh(false);
  }

  return (
    
    // SECTION LIST
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
  
 
    // FLAT LIST 
    /*
    <FlatList
    keyExtractor={(item, index) => index.toString()}
       data={Item}
       renderItem={({ item }) => (
         <View style={styles.item}>
           <Text style={styles.text}>{item.name}</Text>
         </View>
       )}
       refreshControl = {
        <RefreshControl
          refreshing = {refresh}
          onRefresh = {onRefresh}
          colors= {['#ff00ff']}
        />
      }
     />
    */
  );
};


// Scroll view component
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
*/

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

