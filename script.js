const btn = document.querySelector('button');
const divResult = document.querySelector('.result');
const divCounter = document.querySelector('.counter');

const choices = ['orzeł', 'reszka'];
let count = 0;

const counter = () => {
  count++;
  divCounter.textContent = 'Rzut nr: ' + count;
  if (count === 4) {
    count = 0;
    divCounter.textContent = 'Do trzech razy sztuka :P';
    divResult.textContent = '';
  }
};

const draw = () => {
  const result = Math.floor(Math.random() * choices.length);

  divResult.textContent = choices[result];
  counter();
};

btn.addEventListener('click', draw);
