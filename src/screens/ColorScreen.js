import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [ colors, setColors ] = useState([])
    console.log(colors)
    return (
        <View>
            <Button title="Add" onPress={()=>{
                setColors([...colors, randomColor()])
            }} 
            />
            <FlatList
                keyExtractor={item=> item} 
                data={colors}
                renderItem={( {item} )=> {
                    return <View style={ { width: 100, height: 100, backgroundColor: item } }></View>
                }}
            />
        </View>
    )
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

export default ColorScreen