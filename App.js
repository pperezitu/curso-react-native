import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const Texto = ({style}) => {
  // const Texto = (props) => {
  const [texto, setTexto] = useState("Hola Mundo");
  const actualizaTexto = () => {
    setTexto('Chao Mundo!!!')
  };
  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}>{texto}</Text>
  )
  // const {texto} = props;
  // const {children} = props;
  // return (
  //   // <Text>{texto}</Text>
  //   <Text>{children}</Text>
  // )
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}/>
      <Texto style={styles.green}/>
      <Texto style={styles.blue}/> 
       {/* <Texto texto={'Hola Mundo!!!!!'} />
       <Texto texto={'Adios buena gente!!!!!'} /> */}
       {/* <Texto>Hola Mundo</Texto>
       <Texto>Adios Mundo!</Texto> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
    height: 100,
    width: 100,
    padding: 10
  },
  red: {
    backgroundColor: 'red',
    // flex: 1
  },
  green: {
    backgroundColor: 'green',
    // flex: 2
  },
  blue: {
    backgroundColor: 'blue',
    // flex: 3
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
