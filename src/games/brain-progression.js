import getRandomNum from '../getRandomNum.js';
import startGameEngine from '../index.js';

const conditionsOfGame = 'What number is missing in the progression?';

const getSequence = (firstMember, diff, lengthProg) => {
  const progression = [];
  for (let n = 0; n < lengthProg; n += 1) {
    progression[n] = firstMember + n * diff;
  }
  return progression;
};

const getBrainPrimeData = () => {
  const firstMember = getRandomNum(1, 10);
  const diff = getRandomNum(1, 10);
  const lengthProg = getRandomNum(5, 11);
  const sequence = getSequence(firstMember, diff, lengthProg);
  const hideIndex = getRandomNum(1, sequence.length - 1);
  const correct = String(sequence[hideIndex]);
  sequence[hideIndex] = '..';
  const question = sequence.join(' ');
  return [question, correct];
};

export const startGame = () => {
  startGameEngine(getBrainPrimeData, conditionsOfGame);
};
