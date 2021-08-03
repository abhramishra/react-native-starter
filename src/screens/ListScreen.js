import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 22 },
        { name: "Friend #3", age: 21 },
        { name: "Friend #4", age: 25 },
        { name: "Friend #5", age: 22 },
        { name: "Friend #6", age: 23 },
        { name: "Friend #7", age: 24 },
        { name: "Friend #8", age: 28 },
        { name: "Friend #9", age: 20 },
        { name: "Friend #10", age: 19 },
    ]
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={ ( {item} )=> {     // we are destructing item using es6 feature from element
                // element === { item: { name: "Friend #1", age: 20 }, index: 0 }
                return <Text style={styles.textStyle}>{ item.name } - Age { item.age }</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
})

export default ListScreen