import gameEngine from '../index.js';
import getRundomNum from '../getRundomNum.js';

const progression = (a, b) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result[i] = a + i * b;
  }
  return result;
};

const brainPrimeLogic = () => {
  const hideItem = getRundomNum(10);
  const array = progression(getRundomNum(9) + 1, getRundomNum(9) + 1);
  const correct = array[hideItem];
  array[hideItem] = '..';
  const question = `${array.join(' ')}`;
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'What number is missing in the progression?';
  gameEngine(brainPrimeLogic, conditionsOfGame);
};
