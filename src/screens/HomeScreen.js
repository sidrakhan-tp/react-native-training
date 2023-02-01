import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {

  return (
  <View>
  <Text style={styles.text}>HomeScreen Edited</Text>
  <Button 
  title="Go to component screen" 
  onPress={()=> navigation.navigate('Components') }  
  />
  <TouchableOpacity   onPress={()=> navigation.navigate('ListScreen') }  
 >
    <Text>Go to List DEMO</Text>
  </TouchableOpacity>
  <Button 
  title="Go to image screen" 
  onPress={()=> navigation.navigate('ImageScreen') }  
  />
  <Button 
  title="Go to counter screen" 
  onPress={()=> navigation.navigate('CounterScreen') }  
  />
   <Button 
  title="Go to color screen" 
  onPress={()=> navigation.navigate('ColorScreen') }  
  />
   <Button 
  title="Go to square screen" 
  onPress={()=> navigation.navigate('SquareScreen') }  
  />
  </View> 
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
