const btn = document.querySelector('button');
const divResult = document.querySelector('.result');
const divCounter = document.querySelector('.counter');
const divFinalResults = document.querySelector('.final-results');

const choices = ['orzeł', 'reszka'];
const resultsArr = [];
let count = 0;

const results = () => {
  resultsArr.length = 3;
  console.log(resultsArr);
  const newArr = resultsArr.filter((e) => e > 0);
  console.log(newArr);
  if (newArr.length > 1) {
    divFinalResults.textContent = 'Wygrała reszka';
  } else {
    divFinalResults.textContent = 'Zwycięski orzeł';
  }
};

const counter = () => {
  divFinalResults.textContent = '';
  count++;
  divCounter.textContent = 'Rzut nr: ' + count;
  if (count === 4) {
    count = 0;
    divCounter.textContent = 'Do trzech razy sztuka :P';
    divResult.textContent = '';
    results();
    resultsArr.length = 0;
  }
};

const draw = () => {
  const result = Math.floor(Math.random() * choices.length);
  resultsArr.push(result);
  divResult.textContent = choices[result];
  counter();
};

btn.addEventListener('click', draw);
