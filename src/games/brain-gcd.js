import getRandomNum from '../getRandomNum.js';
import startGameEngine from '../index.js';

const conditionsOfGame = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumb, secondNum) => {
  const modulo = firstNumb % secondNum;
  if (modulo === firstNumb) {
    return getGCD(secondNum, firstNumb);
  }
  if (modulo === 0) {
    return secondNum;
  }
  return getGCD(secondNum, modulo);
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
