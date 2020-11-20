import promptly from 'promptly';
import brainEvenLogic from './games/brain-even-logic.js';

export default async (conditions, currentTry, question, correct, isNumber = true) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = await promptly.prompt('Your answer: ');
  console.log(`Hello, ${name}!`);
  const tryQuantity = 3; 
  console.log(brainEvenLogic('conditions'));
  for (let index = 0; index < tryQuantity; index++) {
    
    
  }

  if (currentTry === firstTry) { console.log(conditions); };
  console.log(`Question: ${question}`);
  let answer = await promptly.prompt('Your answer: ');
  if (!isNumber) {
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  } else {
    answer = Number(answer);
  }
  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  if (currentTry === lastTry) {
    console.log(`Congratulations, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
