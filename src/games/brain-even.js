import startGameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const conditionsOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => !(n % 2);

const getBrainEvenData = () => {
  const question = getRandomNum(1, 10);
  const correct = isEven(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  startGameEngine(getBrainEvenData, conditionsOfGame);
};
