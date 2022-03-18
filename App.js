import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  SectionList
} from "react-native";
import { useState, useEffect } from "react";

// const {width, height} = Dimensions.get('window').width;


export default function App() {
  // const [text, setText] = useState("Chanchito feliz");
  // const [submit, setSubmit] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <View style={styles.center}><Text>Cargando ....</Text></View>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users} 
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TouchableOpacity: {
    backgroundColor: "#eee",
  },
  view: {
    height: 40,
    width: 300,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22
  },
  ScrollView: {
    width: Dimensions.get("window").width,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
