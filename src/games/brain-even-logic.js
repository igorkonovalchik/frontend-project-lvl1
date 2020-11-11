import promptly from 'promptly';

export default async (counter) => {
  if (counter === 1) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  const number = Math.floor(Math.random() * 10);
  const even = (n) => !(n % 2);
  console.log(`Question: ${number}`);
  const answer = await promptly.prompt('Your answer: ');
  if (answer === 'yes' || answer === 'no') {
    const correct = even(number) ? 'yes' : 'no';
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
