import React, {useState} from 'react';
import {Text, View} from 'react-native';
import ImageAdjust from '../Components/ImageAdjust'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    console.log("Red ", red)
    const setColor = (color, change) => {
        // color === "red || green || blue"
        // change === +15 || -15
        console.log("color ", color, change)
        switch (color) {
            case "red": 
                red + change > 256 || red + change < 0 ? null : setRed( red + change )
                return;
            case "green": 
                green + change > 256 || green + change < 0 ? null : setGreen( green + change )
                return;
            case "blue":
                blue + change > 256 || blue + change < 0 ? null : setBlue( blue + change )
                return;
        }
    }

    return (
        <View>
            <Text>Square Screen!!</Text>
            <ImageAdjust color="Red" 
                onIncrease={()=> setColor('red', COLOR_INCREMENT)} 
                onDecrease={()=> setColor('red', -1 * COLOR_INCREMENT)}
            />
            <ImageAdjust color="Green" 
                onIncrease={()=> setGreen( green + COLOR_INCREMENT )}
                onDecrease={()=> setGreen( green -1 * COLOR_INCREMENT)}
            />
            <ImageAdjust color="Blue" 
                onIncrease={()=> setBlue( blue + COLOR_INCREMENT)}
                onDecrease={()=> setBlue(blue -1 * COLOR_INCREMENT)}
            />

            <View style={{ height:150, width:150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    )
}

export default SquareScreen