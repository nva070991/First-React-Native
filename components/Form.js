import React, { useState } from "react";
import { StyleSheet, TextInput, Button, Text, View } from "react-native";

export default function Form({ handlerAdd }) {
  const [text, setText] = useState("");

  const handlerOnChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handlerOnChange}
        placeholder="Опишите задачу"
      />
      <Button
       color="green"
        onPress={() => {
          handlerAdd(text);
        }}
        title="Добавить задачу"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
  button: {
   
  },
});
