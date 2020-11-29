import gameEngine from '../index.js';
import getRundomNum from '../getRundomNum.js';

const brainEvenLogic = () => {
  const isEven = (n) => !(n % 2);
  const question = getRundomNum(1, 10);
  const correct = isEven(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(brainEvenLogic, conditionsOfGame);
};
