import React, {useReducer} from 'react'
import {View, Text, Button} from 'react-native'

const NUMBER_COUNT = 1

const reducer = (state, action) => {
    console.log("Inside Reducer --- ", state, action)
    switch (action.type) {
        case "increase": 
            return {...state, count: state.count + action.payload}
        case "decrease": 
            return {...state, count: state.count + action.payload} 
        default: return state;
    }
}

const CounterScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    console.log("State - ", state)
    return (
        <View>
            <Text>Counter Screen </Text>
            <Button
                title="Increase +"
                onPress={()=> dispatch({ type: "increase", payload: NUMBER_COUNT })}
            />
            <Button
                title="Decrease -"
                onPress={()=> dispatch({ type: "decrease", payload: -1 * NUMBER_COUNT })}
            />
            <Text>Current Changes - { state.count } </Text>
        </View>
    )
}

export default CounterScreenReducer