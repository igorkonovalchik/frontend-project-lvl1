import promptly from 'promptly';

const gcd = (a, b) => {
  let max = 0;
  if (a === b) {
    return a;
  } else {
    max = a > b ? b : a;
  };
  while (max >= 0) {
    if (a % max === 0 && b % max === 0) {
      return max;
    };
    max -= 1;
  };
};

export default async (counter) => {
  if (counter === 1) {
    console.log('Find the greatest common divisor of given numbers.');
  }
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = await promptly.prompt('Your answer: ');
  const correct = gcd(firstNumber, secondNumber);
  if (Number(answer) !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    return false;
  }
  return true;

};