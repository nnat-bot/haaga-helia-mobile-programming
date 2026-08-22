import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(0);

  const toNumber = (text) => {
    return Number(text.replace(',', '.'));
  };
  const sum = () => {
    setResult(toNumber(number1) + toNumber(number2));
  };
  const minus = () => {
    setResult(toNumber(number1) - toNumber(number2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result: {result} </Text>
      <TextInput style={styles.input} placeholder="Input number 1 here ...." 
                  keyboardType = "numeric"  
                  value={number1} 
                  onChangeText={text => setNumber1(text)} />
      <TextInput style={styles.input} placeholder="Input number 2 here ...." 
                  keyboardType = "numeric"  
                  value={number2} 
                  onChangeText={text => setNumber2(text)} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Button title="+" onPress={sum} color="white"/>
        </View>
        <View style={styles.buttonBox}>
          <Button title="-" onPress={minus} color="white"/>
        </View>
      </View>
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
  }
});
