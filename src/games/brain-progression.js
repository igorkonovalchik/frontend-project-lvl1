import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const getArProgSequence = (a, b) => {
  const result = [];
  for (let i = 0; i < getRandomNum(5, 11); i += 1) {
    result[i] = a + i * b;
  }
  return result;
};

const brainPrimeLogic = () => {
  const arProgSequence = getArProgSequence(getRandomNum(1, 10), getRandomNum(1, 10));
  const hideIndex = getRandomNum(1, arProgSequence.length - 1);
  const correct = String(arProgSequence[hideIndex]);
  arProgSequence[hideIndex] = '..';
  const question = arProgSequence.join(' ');
  console.log(correct);
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'What number is missing in the progression?';
  gameEngine(brainPrimeLogic, conditionsOfGame);
};
