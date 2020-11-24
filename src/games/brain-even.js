import gameEngine from '../index.js';
import getRundomNum from '../getRundomNum.js';

const brainEvenLogic = () => {
  const even = (n) => !(n % 2);
  const question = getRundomNum(10);
  const correct = even(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(brainEvenLogic, conditionsOfGame);
};
