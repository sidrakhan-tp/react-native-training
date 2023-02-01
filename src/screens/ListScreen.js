import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend1", Age:20},
    { name: "friend3", Age:21 },
    { name: "friend4", Age:22 },
    { name: "friend2", Age:23 },
    { name: "friend5", Age:24},
    { name: "friend6", Age:25 },
    { name: "friend7", Age:26 },
    { name: "friend8", Age:28 },
    { name: "friend9", Age:20 },
    { name: "friend10", Age:20 },
  ];

  return ( 
  <FlatList
  keyExtractor = {(friend)=> friend.name} 
  data={friends} 
  renderItem={({item}) => {
   return(
    <View>
     <Text style={styles.textStyle} >{item.name}-{item.Age}</Text>
     {/* <Text style={styles.textStyle} >{item.Age}</Text> */}
     </View>);
  }}
  />
  );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
