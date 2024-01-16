import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState("")

    const handleAddTask = () => {
        if (title.trim() !== "") {
            onAddTask(title)
            setTitle("")
        }
    }

    return (
        <View>
            <TextInput style={styles.input} value={title} onChangeText={(newText) => setTitle(newText)} />
            <Button title="Add" onPress={handleAddTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    addTodoForm: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddTask
