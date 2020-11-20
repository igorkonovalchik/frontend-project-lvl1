import promptly from 'promptly';

const tryQuantity = 3;

const greeting = async () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = await promptly.prompt('Your answer: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const checkAnswer = (answer, correct) => {
  if (correct == 'yes' || correct == 'no') {
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was "yes" or "no"! `);
      return false;
    };
  } else {
    answer = +answer;
    if (answer === NaN) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer must be a number! `);
      return false;
    };
  };
  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    return false;
  };
  return true;
};

export default async (gameData, conditionsOfGame = '') => {

  const name = await greeting();

  console.log(conditionsOfGame);

  for (let i = 1; i <= tryQuantity; i += 1) {
    const data = gameData();
    const question = data[0];
    const correct = data[1];
    console.log(`Question: ${question}`);
    let answer = await promptly.prompt('Your answer: ');
    if (checkAnswer(answer, correct)) {
      console.log('Correct!');
      if (i == tryQuantity) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    };
  };

};