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
    {q: 'img/Computer.png', c: ['Computer', 'Geld']},
    {q: 'img/Fußball.png', c: ['Fußball', 'Fahrrad']},
    {q: 'img/Geld.png', c: ['Geld', 'Zug']},
    {q: 'img/Geldbörse.png', c: ['Geldbörse', 'Wohnung']},
    {q: 'img/Handy.png', c: ['Handy', 'Flugzeug']},
    {q: 'img/Auto.png', c: ['Auto', 'Schere']},
    {q: 'img/Bleistift.png', c: ['Bleistift', 'Radiergummi']},
    {q: 'img/Buch.png', c: ['Buch','Schiff']},
    {q: 'img/Wohnung.png', c: ['Wohnung', 'Handy']},
    {q: 'img/Fahrrad.png', c: ['Fahrrad', 'Motorrad']},
    {q: 'img/Flugzeug.png', c: ['Flugzeug', 'Auto']},
    {q: 'img/Motorrad.png', c: ['Motorrad', 'Fußball']},
    {q: 'img/Radiergummi.png', c: ['Radiergummi', 'Bleistift']},
    {q: 'img/Schere.png', c: ['Schere', 'Computer']},
    {q: 'img/Schiff.png', c: ['Schiff', 'Geldbörse']},
    {q: 'img/Zug.png', c: ['Zug', 'Buch']},
  ]);


  const geldbörse = 'Geldbörse';
  const encoded1 = encodeURI(geldbörse);
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
