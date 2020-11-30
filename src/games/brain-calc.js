import gameEngine from '../index.js';
import getRundomNum from '../getRundomNum.js';

const calcByOperator = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return result;
};

const brainCalcLogic = () => {
  const firstNumber = getRundomNum(1, 100);
  const secondNumber = getRundomNum(1, 100);
  const operations = ['+', '-', '*'];
  const operator = operations[getRundomNum(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correct = String(calcByOperator(firstNumber, secondNumber, operator));
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'What is the result of the expression?';
  gameEngine(brainCalcLogic, conditionsOfGame);
};
