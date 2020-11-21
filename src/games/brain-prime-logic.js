import gameEngine from '../index.js';

const isNormal = (a) => {
  for (let i = 0; i < a; i += 1) {
    if (a % i === 0 && i !== 1) {
      return false;
    }
  }
  return true;
};

const brainPrimeLogic = () => {
  const question = Math.floor(Math.random() * 10);
  const correct = isNormal(question) ? 'yes' : 'no';
  return [question, correct];
};

export const startGame = () => {
  const conditionsOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(brainPrimeLogic, conditionsOfGame);
};
