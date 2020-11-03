import promptly from 'promptly';

export default async () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = await promptly.prompt('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 1;
  let number = Math.floor(Math.random() * 10);
  const even = (n) => !(n % 2);
  while (counter <= 3) {
    console.log(`Question: ${number}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === 'yes' || answer === 'no') {
      const correct = even(number) ? 'yes' : 'no';
      if (answer !== correct) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
      console.log('Correct!');
      number = Math.floor(Math.random() * 10);
    } else {
      console.log(`'${answer}' is wrong answer ;(.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
    counter += 1;
  }
};
