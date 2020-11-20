import gameEngine from '../index.js';

const calc = (a, b, operation) => {
  let result;
  switch (operation) {
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

export default async () => {
  const conditions = 'What is the result of the expression?';
  let attempt = true;
  let counter = 1;
  do {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const operationArray = ['+', '-', '*'];
    const operation = Math.floor(Math.random() * 3);
    const question = `${firstNumber} ${operationArray[operation]} ${secondNumber}`;
    const correct = calc(firstNumber, secondNumber, operationArray[operation]);
    attempt = await gameEngine(conditions, counter, question, correct);
    counter += 1;
  } while (attempt);
};
