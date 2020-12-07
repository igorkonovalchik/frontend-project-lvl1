import startGameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const conditionsOfGame = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calcByOperator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getBrainCalcData = () => {
  const firstNumber = getRandomNum(1, 100);
  const secondNumber = getRandomNum(1, 100);
  const operator = operations[getRandomNum(0, operations.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correct = String(calcByOperator(firstNumber, secondNumber, operator));
  return [question, correct];
};

export const startGame = () => {
  startGameEngine(getBrainCalcData, conditionsOfGame);
};
