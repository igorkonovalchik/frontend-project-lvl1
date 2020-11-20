import gameEngine from '../index.js';

const isNormal = (a) => {
  for (let i = 0; i < a; i += 1) {
    if (a % i === 0 && i !== 1) {
      return false;
    }
  }
  return true;
};

export default async () => {
  const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let attempt = true;
  let counter = 1;
  do {
    const question = Math.floor(Math.random() * 10);
    const correct = isNormal(question) ? 'yes' : 'no';
    attempt = await gameEngine(conditions, counter, question, correct, false);
    counter += 1;
  } while (attempt);
};
