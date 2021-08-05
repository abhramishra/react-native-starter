import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../Components/ImageDetails'

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Image Screen</Text>
            <ImageDetails title="Forest" desc="Image Score - 9" imageSource={ require('../../assets/forest.jpg') } />
            <ImageDetails title="Beach" desc="Image Score - 8" imageSource={ require('../../assets/beach.jpg') } />
            <ImageDetails title="Mountainm" desc="Image Score - 10" imageSource={ require('../../assets/mountain.jpg')} />
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