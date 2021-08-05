import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const ImageAdjust = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={()=> onIncrease() } />
            <Button title={`Decrease ${color}`} onPress={()=> onDecrease()} />
            <View style={{ width: 100, height: 100 }}></View>
        </View>
    )
} 

export default ImageAdjust