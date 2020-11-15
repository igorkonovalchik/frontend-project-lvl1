import promptly from 'promptly';

export default async (name, counter, question, correct, isNumber = true) => {
  console.log(`Question: ${question}`);
  let answer = await promptly.prompt('Your answer: ');
  if (!isNumber) {
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    };
  }else{ answer = Number(answer); };
  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};