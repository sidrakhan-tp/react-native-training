import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail   from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
        <ImageDetail title='Forest' imageSrc={require('../../assets/beach.jpg')} />
        <ImageDetail title='Mountain'  imageSrc={require('../../assets/forest.jpg')}  />
        <ImageDetail title='Beach'  imageSrc={require('../../assets/mountain.jpg')}  />
        <ImageDetail title='test'  imageSrc={require('../../assets/splash.png')}  />
        </View>
    )
}

const styles= StyleSheet.create({});

export default ImageScreen