import askName from '../cli.js';
import gameEngine from '../index.js';

const gcd = (a, b) => {
  let max = 0;
  if (a === b) {
    return a;
  }
  max = a > b ? b : a;
  while (max >= 0) {
    if (a % max === 0 && b % max === 0) {
      return max;
    }
    max -= 1;
  }
  return NaN;
};

export default async () => {
  const name = await askName();
  console.log('Find the greatest common divisor of given numbers.');
  let attempt = true;
  let counter = 1;
  do {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    const question = `${firstNumber} ${secondNumber}`;
    const correct = gcd(firstNumber, secondNumber);
    attempt = await gameEngine(name, counter, question, correct);
    counter += 1;
  } while (attempt);
};
