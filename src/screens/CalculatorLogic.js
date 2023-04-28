const CalculatorLogic = (currentNumber, trigonometricFunction, aritmetica) => {
    console.log(currentNumber);
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
          case '^':
            newNumber = Math.pow(newNumber, actualNumber);
            break;
          case '%':
            newNumber = (newNumber / 100) * actualNumber;
            break;
        }
  
        index = index + 2;
      } else {
        return;
      }
    }
  
    newNumber = handleTrigonometric(newNumber);
  
    return handleAritmetica(newNumber);
  
    function handleTrigonometric(numberReceive) {
      switch (trigonometricFunction) {
        case 'SIN':
          return (numberReceive = Math.sin(numberReceive));
        case 'COS':
          return (numberReceive = Math.cos(numberReceive));
        case 'TG':
          return (numberReceive = Math.tan(numberReceive));
        default:
          return numberReceive;
      }
    }
  
    function handleAritmetica(numberReceive) {
      switch (aritmetica) {
        case 'DEC':
          return numberReceive.toString();
        case 'BIN':
          return numberReceive.toString(2);
        case 'OCT':
          return numberReceive.toString(8);
        case 'HEX':
          return numberReceive.toString(16);
      }
    }
  };
  
  export default CalculatorLogic;
  