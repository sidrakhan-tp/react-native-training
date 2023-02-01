import React, {useState} from 'react'
import {View, StyleSheet, Button, FlatList} from 'react-native'

const ColorScreen = () => {
   
    const [colors, setColors]= useState([])

    return (
        <View>
            <Button title='Add a color' onPress ={()=>{ setColors([...colors, randomColors()]) }} />
             <FlatList
              keyExtractor = {(color)=> color} 
              data={colors} 
              renderItem={({item}) => {
               return(
                <View>
            <View style={{height: 100, width:100, backgroundColor: item}} ></View>
                 {/* <Text style={styles.textStyle} >{item.Age}</Text> */}
                 </View>);
              }}/>
        </View>
       
    )
}

const randomColors = () => {
  const red = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)

  return `rgb(${red},${blue},${green})`

}

const styles = StyleSheet.create({})

export default ColorScreen;
