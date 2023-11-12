import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Form = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <Text style={styles.title}> Crea </Text>
      <TextInput
        style={styles.input}
        placeholder="nome"
        placeholderTextColor={"grey"}
        onChangeText={onChangeText}
        value={text}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    paddingTop: 4,
    paddingLeft: 12,
  },
});
export default Form;
