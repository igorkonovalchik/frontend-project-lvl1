import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const getArithmeticProgressionSequence = (a, b) => {
  const result = [];
  for (let i = 0; i < getRandomNum(5, 11); i += 1) {
    result[i] = a + i * b;
  }
  return result;
};

const brainPrimeLogic = () => {
  const hideIndex = getRandomNum(1, 9);
  const array = getArithmeticProgressionSequence(getRandomNum(1, 10), getRandomNum(1, 10));
  const correct = array[hideIndex];
  array[hideIndex] = '..';
  const question = array.join(' ');
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'What number is missing in the progression?';
  gameEngine(brainPrimeLogic, conditionsOfGame);
};
