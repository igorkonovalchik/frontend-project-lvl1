import getRandomNum from '../getRandomNum.js';
import startGameEngine from '../index.js';

const conditionsOfGame = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumb, secondNum) => {
  const min = Math.min(firstNumb, secondNum);
  const max = Math.max(firstNumb, secondNum);
  if (max % min === 0 || max === min) {
    return min;
  }
  let counter = min - 1;
  while (counter > 1) {
    if (min % counter === 0) {
      return getGCD(max, counter);
    }
    counter -= 1;
  }
  return counter;
};

const getBrainGcdData = () => {
  const firstNum = getRandomNum(2, 100);
  const secondNum = getRandomNum(2, 100);
  const question = `${firstNum} ${secondNum}`;
  const correct = String(getGCD(firstNum, secondNum));
  return [question, correct];
};

export const startGame = () => {
  startGameEngine(getBrainGcdData, conditionsOfGame);
};
