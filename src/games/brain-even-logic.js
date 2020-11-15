import askName from '../cli.js';
import gameEngine from '../index.js';

export default async () => {
  const name = await askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attempt = true;
  const even = (n) => !(n % 2);
  let counter = 1;
  do {
    const question = Math.floor(Math.random() * 10);
    const correct = even(question) ? 'yes' : 'no';
    attempt = await gameEngine(name, counter, question, correct, true);
    counter += 1;
  } while (attempt);
};
