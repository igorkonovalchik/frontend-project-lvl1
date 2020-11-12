import promptly from 'promptly';

const isNormal = (a) => {
  for (let i = 0; i < a; i += 1) {
    if (a % i === 0 && i !== 1) {
      return false;
    }
  }
  return true;
};

export default async (counter) => {
  if (counter === 1) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
  const number = Math.floor(Math.random() * 10);
  console.log(`Question: ${number}`);
  const answer = await promptly.prompt('Your answer: ');
  if (answer === 'yes' || answer === 'no') {
    const correct = isNormal(number) ? 'yes' : 'no';
    if (answer !== correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      return false;
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(.`);
    return false;
  }
  return true;
};
