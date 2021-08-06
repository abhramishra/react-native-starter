import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>User Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize={false}
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue) }
            />
            <Text style={styles.textStyle}>User name is - { name }</Text>
            <Text>Enter Password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize={false}
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue) }
            />
            {
                password.length < 5 && <Text style={{color: 'red'}}>Password length must be 5 characters</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
    }
})

export default TextScreen