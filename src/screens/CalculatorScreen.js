import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './ScreenStyle';
import Basica from '../components/Basica/Basica';
import Trigonometria from '../components/Trigonometria/Trigonometria';
import Aritmetica from '../components/Aritmetica/Aritmetica';
import  CalculatorLogic  from './CalculatorLogic';
export default ({ orientation }) => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [trigonometricFunction, setTrigonometricFunction] = useState('');
  const [aritmetica, setAritmetica] = useState('DEC');

  function handleInputBasic(buttonPressed) {
    switch (buttonPressed) {
      case '+':
      case '-':
      case 'x':
      case '/':
        setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
        return;
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        setAritmetica('DEC');
        setTrigonometricFunction('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        setCurrentNumber(
          CalculatorLogic(
            currentNumber,
            trigonometricFunction,
            aritmetica
          )
        );
        return;
      case '+/-':
        setCurrentNumber((-1 * currentNumber).toString());
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  function handleInputTrigonometrica(buttonPressed) {
    if (buttonPressed != trigonometricFunction)
      setTrigonometricFunction(buttonPressed);
    else setTrigonometricFunction('');
  }

  function handleInputArtimetica(buttonPressed) {
    setAritmetica(buttonPressed);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.results}>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.resultText}>{currentNumber}</Text>
          <Text style={styles.historyText}>
            {trigonometricFunction} {aritmetica}
          </Text>
        </View>
        <Aritmetica action={handleInputArtimetica} />
        <Trigonometria action={handleInputTrigonometrica} />
        <Basica action={handleInputBasic} />
      </View>
    </>
  );
};
