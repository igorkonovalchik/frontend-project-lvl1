import promptly from 'promptly';

const progression = (a, b) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result[i] = a + i * b;
  }
  return result;
};

export default async (counter) => {
  if (counter === 1) {
    console.log('What number is missing in the progression?');
  }
  const hideItem = Math.floor(Math.random() * 10);
  const array = progression(Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1);
  const correct = array[hideItem];
  array[hideItem] = '..';

  console.log(`Question: ${array.join(' ')}`);
  const answer = await promptly.prompt('Your answer: ');

  if (Number(answer) !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    return false;
  }
  return true;
};
