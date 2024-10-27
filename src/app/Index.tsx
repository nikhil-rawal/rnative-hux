import { Text, View, Button, Image, StyleSheet, FlatList } from "react-native";
import Field from "../components/Field";

function Index() {
  const listData = ["apple", "banana", "orange"];
  const locationData = [
    { id: 1, name: "Delhi" },
    { id: 2, name: "Mumbai" },
    { id: 3, name: "Kolkata" },
  ];
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Hello</Text>
      <Again />
      <Field fname="Nikhil" lname="Rawal" />
      <Button title="Click Me" color="black" onPress={() => alert("Clicked")} />
      <Image
        source={{
          uri: "https://images.pexels.com/photos/27893233/pexels-photo-27893233/free-photo-of-woman-in-shirt-photographing-with-digital-camera.jpeg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>List Data</Text>
      <FlatList
        data={listData}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Text>Location data</Text>
      {/* Flatlist */}
      <FlatList
        style={{ margin: 5 }}
        data={locationData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

function Again() {
  return <Text style={newStyle.textOnly}>Nikhil</Text>;
}

const newStyle = StyleSheet.create({
  textOnly: {
    color: "red",
    margin: 20,
    padding: 5,
    fontSize: 40,
  },
});
export default Index;
