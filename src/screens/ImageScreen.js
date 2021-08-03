import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../Components/ImageDetails'

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Image Screen</Text>
            <ImageDetails title="Forest" imageSource={ require('../../assets/forest.jpg') } />
            <ImageDetails title="Beach" imageSource={ require('../../assets/beach.jpg') } />
            <ImageDetails title="Mountainm" imageSource={ require('../../assets/mountain.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default ImageScreen