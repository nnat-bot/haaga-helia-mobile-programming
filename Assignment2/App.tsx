import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const randomNumber = (): number => Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [guess, setGuess] = useState<string>('');
  const [secret, setSecret] = useState<number>(randomNumber());
  const [message, setMessage] = useState<string>('Guess a number between 1-100');
  const [count, setCount] = useState<number>(0);

  const newGame = () => {
  setSecret(randomNumber());
  setGuess('');
  setCount(0);
  setMessage('Guess a number between 1-100');
  };

  const makeGuess = () => {
    const number = Number(guess);

    if (!guess || isNaN(number)) {
      setMessage('Please type a number between 1-100');
      return;
    }

    const tries = count + 1;
    setCount(tries);

    if (number < secret) {
      setMessage(`Your guess ${number} is too low`);
    } else if (number > secret) {
      setMessage(`Your guess ${number} is too high`);
    } else {
      Alert.alert(
        `You guessed the number in ${tries} guesses`,
        '',
        [{ text: 'OK', onPress: newGame }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="MAKE GUESS" onPress={makeGuess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#009688',
    width: 80,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});