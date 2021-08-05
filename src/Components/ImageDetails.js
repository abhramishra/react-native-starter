import React from 'react'
import { View, Image, Text } from 'react-native'

const ImageDetails = ({ title, desc, imageSource }) => {
    return (
        <View>
            <Text>{ title }</Text>
            <Text>{ desc }</Text>
            <Image source={ imageSource } />
        </View>
    )
}

export default ImageDetails