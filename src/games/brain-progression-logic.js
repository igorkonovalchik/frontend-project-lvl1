import askName from '../cli.js';
import gameEngine from '../index.js';

const progression = (a, b) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result[i] = a + i * b;
  }
  return result;
};

export default async () => {
  const name = await askName();
  console.log('What number is missing in the progression?');
  let attempt = true;
  let counter = 1;
  do {
    const hideItem = Math.floor(Math.random() * 10);
    const array = progression(Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1);
    const correct = array[hideItem];
    array[hideItem] = '..';
    const question = `${array.join(' ')}`;
    attempt = await gameEngine(name, counter, question, correct);
    counter += 1;
  } while (attempt);
};
