import { View, Text, Button, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FIREBASE_DB } from "../../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { StyleSheet } from "react-native";

const List = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    const todoRef = collection(FIREBASE_DB, "todo");
    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        const todos = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc.data);
          todos.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTodos(todos);
      },
    });
  }, []);

  const addTodo = async () => {
    const docRef = await addDoc(collection(FIREBASE_DB, "todo"), {
      title: todo,
    });
    setTodo("");
  };

  const renderTodo = ({ item }) => {
    return <Text>{item.title}</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add New Todo"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button onPress={addTodo} title="Add Todo" disabled={todo === ""} />
      </View>
      <View>
        <FlatList data={todos} renderItem={renderTodo} keyExtractor={(todo) => todo.id} />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
