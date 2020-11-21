import gameEngine from '../index.js';

const brainEvenLogic = () => {
  const even = (n) => !(n % 2);
  const question = Math.floor(Math.random() * 10);
  const correct = even(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(brainEvenLogic, conditionsOfGame);
};
