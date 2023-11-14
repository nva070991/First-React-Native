import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Купить молоко2", key: "2" },
    { text: "Купить молоко2", key: "3" },
    { text: "Купить молоко3", key: "4" },
  ]);

  const handlerAdd = (text) => {
    setListOfItems((state) => [
      ...state,
      { text: text, key: Math.random().toString(35).substring(7)},
    ]);
  };

  const handlerDelete = (key) => {
    console.log(key)
    setListOfItems((state) => {
      return state.filter(el => el.key!==key)
    }
    )
  };

  return (
    <View>
      <Header />
      <Form handlerAdd={handlerAdd} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem handlerDelete={handlerDelete} el={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
