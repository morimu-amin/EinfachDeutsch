'use strict';

{
  const question = document.getElementById('js-image');
  const choices = document.getElementById('js-choices');
  const btn = document.getElementById('js-btn');
  const gameArea = document.getElementById('js-game');
  const correctSound = document.getElementById('js-correct');
  const errorSound = document.getElementById('js-error');
  const gameSetSound = document.getElementById('js-gameSet');
  const perfect = document.getElementById('js-perfect');
  const start = document.getElementById('js-start');
  const result = document.getElementById('js-result');
  const showScore = document.getElementById('js-score');

  const quizSet = shuffle([
    {q: 'img/Bett.png', c: ['Bett', 'Teller']},
    {q: 'img/Glas.png', c: ['Glas', 'Spiegel']},
    {q: 'img/Lampe.png', c: ['Lampe', 'Sofa']},
    {q: 'img/Regal.png', c: ['Regal', 'Tisch']},
    {q: 'img/Sofa.png', c: ['Sofa', 'Tasse']},
    {q: 'img/Spiegel.png', c: ['Spiegel', 'Bett']},
    {q: 'img/Stuhl.png', c: ['Stuhl', 'Uhr']},
    {q: 'img/Tasche.png', c: ['Tasche','Tasse']},
    {q: 'img/Tasse.png', c: ['Tasse', 'Tasche']},
    {q: 'img/Teller.png', c: ['Teller', 'Lampe']},
    {q: 'img/Tisch.png', c: ['Tisch', 'Glas']},
    {q: 'img/Uhr.png', c: ['Uhr', 'Regal']},
  ]);

  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if(li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      correctSound.currentTime = 0;
      correctSound.play();
      score++;
    } else {
      li.classList.add('wrong');
      errorSound.currentTime = 0;
      errorSound.play();
    }
    btn.classList.remove('u-next-btn-diabled');
  }

  function setQuiz(){
    isAnswered = false;

    let img;
    img = quizSet[currentNum].q;
    question.src = img;
    question.classList.add('c-img__size');

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });


    if(currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  function gameSet() {
    gameSetSound.play();
  }

  function perfectSound() {
    perfect.play();
  }

  start.addEventListener('click', () => {
    start.classList.add('u-btn-start_hidden');
    gameArea.classList.remove('u-game__display-hidden');
    setQuiz();
  });

  btn.addEventListener('click', () => {
    if (btn.classList.contains('u-next-btn-diabled')) {
      return;
    }
    btn.classList.add('u-next-btn-diabled');

    if (currentNum === quizSet.length - 1) {
       if (score === quizSet.length) {
         showScore.textContent = `Perfekt! ${score} / ${quizSet.length}`;
         setTimeout(perfectSound,500);
       } else {
         showScore.textContent = `Fertig! ${score} / ${quizSet.length}`;
         setTimeout(gameSet,500);
       }
       result.classList.remove('u-result-hidden');
     } else {
      currentNum++;
      setQuiz();
    }
  });
 }
