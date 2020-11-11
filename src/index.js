import getName from './cli.js';
import brainEven from './games/brain-even-logic.js';
import brainCalc from './games/brain-calc-logic.js';

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
