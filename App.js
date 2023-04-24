import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './src/Style';
import Basica from './src/Basica/Basica';
import Trigonometria from './src/Trigonometria/Trigonometria';
import Aritmetica from './src/Aritmetica/Aritmetica';

export default function App() {

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [trigonometricFunction, setTrigonometricFunction] = useState('');
  const [aritmetica, setAritmetica] = useState('DEC');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    let operator = ' ';
    let actualNumber = 0;
    let newNumber = parseFloat(splitNumbers[0].toString(10));
    let index = 1;
    while (index <= splitNumbers.length - 1) {
      operator = splitNumbers[index];
      actualNumber = parseFloat(splitNumbers[index + 1]);

      //Verifica se o número é um número
      if (!isNaN(actualNumber)) {
        // Faz ação referente tecla pressionada
        switch (operator) {
          case '+':
            newNumber = newNumber + actualNumber;
            break;
          case '-':
            newNumber = newNumber - actualNumber;
            break;
          case 'x':
            newNumber = newNumber * actualNumber;
            break;
          case '/':
            newNumber = newNumber / actualNumber;
            break;
        }

        index = index + 2;
      } else {
        return;
      }
    }
    
    newNumber = handleTrigonometric(newNumber)

    setCurrentNumber(handleAritmetica(newNumber));
  }

  function handleTrigonometric(numberReceive){
    switch(trigonometricFunction){
      case 'SIN':
      return numberReceive = Math.sin(numberReceive)
      case 'COS':
      return numberReceive = Math.cos(numberReceive)
      case 'TG':
      return numberReceive = Math.tan(numberReceive)
      default:
      return numberReceive;
    }
    
  }

   function handleAritmetica(numberReceive){
    switch(aritmetica){
      case 'DEC':
        return numberReceive.toString()
       case 'BIN':
       return numberReceive.toString(2) 
       case 'OCT':
       return numberReceive.toString(8) 
       case 'HEX':
       return numberReceive.toString(16)   
    }
  }

  function handleInput(buttonPressed) {
    switch (buttonPressed) {
      case '+': case '-': case 'x': case '/':
        setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
        return;
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
      case '+/-':
        setCurrentNumber((-1 * currentNumber).toString());
        return;
       case 'SIN': case 'COS': case 'TG':
       if(buttonPressed != trigonometricFunction)
          setTrigonometricFunction(buttonPressed);
          else
          setTrigonometricFunction('');
       return; 
       case 'DEC': case 'HEX': case 'BIN': case 'OCT':
          setAritmetica(buttonPressed);
       return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
        <Text style={styles.historyText}>{trigonometricFunction}  {aritmetica}</Text>
      </View>

    <Aritmetica action={handleInput}/>
    <Trigonometria action={handleInput}/>
    <Basica action = {handleInput}/>
    </View>
  );
}
