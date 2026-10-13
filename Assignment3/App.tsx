import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState<string>('');
  const [number2, setNumber2] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  const toNumber = (text: string): number => {
    return Number(text.replace(',', '.'));
  };

  const sum = () => {
    const value = toNumber(number1) + toNumber(number2);
    setResult(value);
    setHistory([...history, `${number1} + ${number2} = ${value}`]);
  };

  const minus = () => {
    const value = toNumber(number1) - toNumber(number2);
    setResult(value);
    setHistory([...history, `${number1} - ${number2} = ${value}`]);
  };

  const [history, setHistory] = useState<string[]>([]);

  return (
    <View style ={styles.container}>
      <Text style = {styles.result}>Result: {result}</Text>
      <TextInput
      style={styles.input}
      placeholder="Input number 1 here..."
      keyboardType="numeric"
      value={number1}
      onChangeText={setNumber1}
    />
    <TextInput
      style={styles.input}
      placeholder="Input number 2 here..."
      keyboardType="numeric"
      value={number2}
      onChangeText={setNumber2}
    />
    <View style = {styles.buttonContainer}>
      <View style={styles.buttonBox}>
        <Button title = "+" onPress={sum} color="white"/>
      </View>
      <View style={styles.buttonBox}>
        <Button title = "-" onPress={minus} color="white"/>
      </View>
    </View>
    <Text style={styles.historyTitle}>History</Text>
    <FlatList
    data={history}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => <Text>{item}</Text>}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginBottom: 5,
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 15,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonBox: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  historyTitle: {
  marginTop: 30,
  marginBottom: 10,
  fontSize: 16,
},
});