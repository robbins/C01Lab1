import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from '../components/AddTask'

const ToDoList = ({ titles }) => {
    const [title, setTitle] = useState(titles.map((value) => ({
        title: value,
        id: uuidv4()
    })))

    function addToDo(newTitle) {
        setTitle((previousTitles) => [
            ...previousTitles,
            { title: newTitle, id: uuidv4() }
        ])
    }

    function removeToDo(id) {
        setTitle(previousTitles => previousTitles.filter((item) => item.id !== id));
    }

    return (
        <View style={styles.todoListContainer}>
            {title.map((item) => (
                <View style={styles.todoItem} key={item.id}>
                    <Text>{item.title}</Text>
                    <Button title=" Remove" onPress={() => removeToDo(item.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {}

const styles = StyleSheet.create({
    todoListContainer: {
        margin: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default ToDoList;
