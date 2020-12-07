import getRandomNum from '../getRandomNum.js';
import startGameEngine from '../index.js';

const conditionsOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (a) => {
  if (a === 1) { return false; }
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const getBrainPrimeData = () => {
  const question = getRandomNum(1, 10);
  const correct = isPrimeNum(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  startGameEngine(getBrainPrimeData, conditionsOfGame);
};
