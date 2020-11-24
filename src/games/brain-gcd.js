import gameEngine from '../index.js';
import getRundomNum from '../getRundomNum.js';

const gcd = (a, b) => {
  let max = 0;
  if (a === b) {
    return a;
  }
  max = a > b ? b : a;
  while (max >= 0) {
    if (a % max === 0 && b % max === 0) {
      return max;
    }
    max -= 1;
  }
  return NaN;
};

const brainGcdLogic = () => {
  const firstNumber = getRundomNum(100) + 1;
  const secondNumber = getRundomNum(100) + 1;
  const question = `${firstNumber} ${secondNumber}`;
  const correct = String(gcd(firstNumber, secondNumber));
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Find the greatest common divisor of given numbers.';
  gameEngine(brainGcdLogic, conditionsOfGame);
};
