import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  FlatList,
  Modal,
} from "react-native";
import Form from "./Form";

export default function Dashboard() {
  const DATA = require("../data.json").DATA;
  const [text, onChangeText] = React.useState("");
  const [showForm, setShowForm] = React.useState(false); // Nuovo stato per gestire la visibilità del form
  const toggleForm = () => {
    setShowForm(!showForm); // Imposta lo stato per mostrare il form
  };
  const filteredData = DATA.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );
  var i = 0;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cerca tra i tuoi file"
        placeholderTextColor={"grey"}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        clearButtonMode="always"
      />
      {text.length > 0 && (
        <Pressable onPress={() => onChangeText("")} style={styles.buttonClear}>
          <Text style={styles.buttonClearText}>×</Text>
        </Pressable>
      )}
      <FlatList
        style={styles.list}
        data={filteredData}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.title}</Text>
        )}
        keyExtractor={() => i++}
      />
      <Modal transparent={true} visible={showForm}>
        <View style={styles.form}>
          <Form />
          <View style={styles.formButtons}>
            <Pressable style={{ marginRight: 10 }}>
              <Text style={{ color: "green" }}>Aggiungi</Text>
            </Pressable>
            <Pressable style={{ marginLeft: 10 }} onPress={toggleForm}>
              <Text style={{ color: "red" }}>Chiudi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={toggleForm} style={styles.buttonPlus}>
        <Text style={styles.buttonPlusText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: 300,
    position: "absolute",
    left: "20%",
    top: "40%",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "blue",
  },
  formButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 12,
    alignContent: "center",
  },
  list: {
    borderRadius: 10,
    padding: 2,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonClearText: {
    color: "white",
    fontSize: 15,
  },
  buttonPlusText: {
    color: "white",
    fontSize: 30,
  },
  listItem: {
    backgroundColor: "#0af",
    borderRadius: 100,
    marginBottom: 5,
    padding: 8,
    //height: 30,
    //paddingTop: 4,
    //paddingLeft: 12,
    color: "white",
    fontSize: 15,
  },
  buttonPlus: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: 100,
    backgroundColor: "blue",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  buttonClear: {
    position: "absolute",
    right: 9,
    top: 9,
    borderRadius: 100,
    backgroundColor: "lightgrey",
    alignItems: "center",
    width: 22,
    height: 22,
  },
});
