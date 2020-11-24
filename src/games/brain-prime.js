import gameEngine from '../index.js';
import getRundomNum from '../getRundomNum.js';

const isNormalNum = (a) => {
  for (let i = 0; i < a; i += 1) {
    if (a % i === 0 && i !== 1) {
      return false;
    }
  }
  return true;
};

const brainPrimeLogic = () => {
  const question = getRundomNum(10);
  const correct = isNormalNum(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(brainPrimeLogic, conditionsOfGame);
};
