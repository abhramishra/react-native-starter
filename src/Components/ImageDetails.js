import React from 'react'
import { View, Image, Text } from 'react-native'

const ImageDetails = (props) => {
    return (
        <View>
            <Text>{ props.title }</Text>
            <Image source={ props.imageSource } />
        </View>
    )
}

export default ImageDetails