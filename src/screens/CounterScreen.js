import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [count, setCount] = useState(0)
    return (
        <View>
            <Button title="Increase" onPress={()=> {
                setCount(count + 1)
            }} />
            <Button title="Decrease" onPress={()=> {
                setCount(count - 1)
            }} />
            <Text style={styles.textStyle}>Current Changes : { count }</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default CounterScreen