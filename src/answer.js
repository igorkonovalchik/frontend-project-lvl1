import promptly from 'promptly';

export default async () => {
  const answer = await promptly.prompt('Your answer: ');  
  return answer;
};
