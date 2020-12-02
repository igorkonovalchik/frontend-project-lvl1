import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

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
  const firstNumber = getRandomNum(1, 100);
  const secondNumber = getRandomNum(1, 100);
  const operations = ['+', '-', '*'];
  const operator = operations[getRandomNum(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correct = String(calcByOperator(firstNumber, secondNumber, operator));
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'What is the result of the expression?';
  gameEngine(brainCalcLogic, conditionsOfGame);
};
