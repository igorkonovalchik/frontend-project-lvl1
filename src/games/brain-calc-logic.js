import promptly from 'promptly';

const calc = (a, b, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return result;
};

export default async (counter) => {
  if (counter === 1) {
    console.log('What is the result of the expression?');
  }
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const operationArray = ['+', '-', '*'];
  const operation = Math.floor(Math.random() * 3);
  console.log(`Question: ${firstNumber} ${operationArray[operation]} ${secondNumber}`);
  const correct = calc(firstNumber, secondNumber, operationArray[operation]);
  const answer = await promptly.prompt('Your answer: ');
  if (Number(answer) !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    return false;
  }
  return true;
};
