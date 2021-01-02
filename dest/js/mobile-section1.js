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
    {q: 'img/Hund.png', c: ['Hund', 'Katze']},
    {q: 'img/Katze.png', c: ['Katze', 'Hund']},
    {q: 'img/Vogel.png', c: ['Vogel', 'Wal']},
    {q: 'img/Pinguin.png', c: ['Pinguin', 'Schildkröte']},
    {q: 'img/Frosch.png', c: ['Frosch', 'Schlange']},
    {q: 'img/Schwein.png', c: ['Schwein', 'Kuh']},
    {q: 'img/Hase.png', c: ['Hase', 'Schaf']},
    {q: 'img/Kuh.png', c: ['Kuh','Nilpferd']},
    {q: 'img/Nilpferd.png', c: ['Nilpferd', 'Löwe']},
    {q: 'img/Elefant.png', c: ['Elefant', 'Schwein']},
    {q: 'img/Schildkröte.png', c: ['Schildkröte', 'Vogel']},
    {q: 'img/Wal.png', c: ['Wal', 'Kuh']},
    {q: 'img/Löwe.png', c: ['Löwe', 'Hase']},
    {q: 'img/Schaf.png', c: ['Schaf', 'Frosch']},
    {q: 'img/Schlange.png', c: ['Schlange', 'Pinguin']},
  ]);


  const schildkröte = 'Schildkröte';
  const encoded1 = encodeURI(schildkröte);
  const löwe = 'Löwe';
  const encoded2 = encodeURI(löwe);
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
