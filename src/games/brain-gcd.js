import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  const min = a > b ? b : a;
  const max = a === min ? b : a;
  if (max % min === 0) {
    return min;
  }
  return gcd(max, min - 1);
};

const brainGcdLogic = () => {
  const firstNumber = getRandomNum(1, 100) + 1;
  const secondNumber = getRandomNum(1, 100) + 1;
  const question = `${firstNumber} ${secondNumber}`;
  const correct = String(gcd(firstNumber, secondNumber));
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Find the greatest common divisor of given numbers.';
  gameEngine(brainGcdLogic, conditionsOfGame);
};
