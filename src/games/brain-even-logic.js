import gameEngine from '../index.js';

export const startGame = () => {
  gameEngine('brain-even');
};

export const brainEvenLogic = (request, answer = '') => {
  let result; 
  switch (request) {
    case 'conditions':
      result = 'Answer "yes" if the number is even, otherwise answer "no".';
    break;
    case 'answer':
      if (answer !== 'yes' && answer !== 'no') {
        result = false;
      };
      result = true;
    break;
    default:
      const question = Math.floor(Math.random() * 10);
      const correct = even(question) ? 'yes' : 'no';
      result = [question, correct]; 
    break;
  };
  return result; 
};
