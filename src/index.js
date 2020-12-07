import promptly from 'promptly';

const tryQuantity = 3;

export default async (getGameData, conditionsOfGame) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = await promptly.prompt('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log(conditionsOfGame);
  for (let i = 1; i <= tryQuantity; i += 1) {
    const [question, correct] = getGameData();
    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
