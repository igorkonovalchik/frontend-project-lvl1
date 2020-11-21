import gameEngine from '../index.js';

const progression = (a, b) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result[i] = a + i * b;
  }
  return result;
};

const brainPrimeLogic = () => {
  const hideItem = Math.floor(Math.random() * 10);
  const array = progression(Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1);
  const correct = array[hideItem];
  array[hideItem] = '..';
  const question = `${array.join(' ')}`;
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'What number is missing in the progression?';
  gameEngine(brainPrimeLogic, conditionsOfGame);
};
