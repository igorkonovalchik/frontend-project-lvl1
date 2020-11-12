import getName from './cli.js';
import brainEven from './games/brain-even-logic.js';
import brainCalc from './games/brain-calc-logic.js';
import brainGcd from './games/brain-gcd-logic.js';
import brainProgression from './games/brain-progression-logic.js';
import brainPrime from './games/brain-prime-logic.js';

export default async (nameGame) => {
  const name = await getName();
  let result = true;
  let counter = 1;
  while (counter <= 3 && result) {
    switch (nameGame) {
      case 'brain-even':
        result = await brainEven(counter);
        break;
      case 'brain-calc':
        result = await brainCalc(counter);
        break;
      case 'brain-gcd':
        result = await brainGcd(counter);
        break;
      case 'brain-progression':
        result = await brainProgression(counter);
        break;
      case 'brain-prime':
        result = await brainPrime(counter);
        break;
      default:
        break;
    }
    if (result) {
      console.log('Correct!');
    }
    if (counter === 3 && result) {
      console.log(`Congratulations, ${name}!`);
    }
    counter += 1;
  }
  if (!result) {
    console.log(`Let's try again, ${name}!`);
  }
};
