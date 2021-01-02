'use strict';

{
  const question = document.getElementById('js-image');
  const answer = document.getElementById('js-answer');
  const showAnswer = document.getElementById('js-show-answer');
  const target = document.getElementById('js-target');
  const correctSound = document.getElementById('js-correct');
  const tipeSound = document.getElementById('js-tiping');
  const gameSetSound = document.getElementById('js-gameSet');
  const start = document.getElementById('js-start');
  const replay = document.getElementById('js-replay');
  const showDisplay1 = document.getElementById('js-display1');
  const showDisplay2 = document.getElementById('js-display2');

  const words = [
    'Hund','Katze','Vogel','Pinguin','Frosch',
    'Schwein','Elefant','Löwe','Hase','Kuh',
    'Schaf','Schlange','Nilpferd','Schildkröte','Wal',
  ];

  const schildkröte = 'Schildkröte';
  const encoded1 = encodeURI(schildkröte);
  const löwe = 'Löwe';
  const encoded2 = encodeURI(löwe);
  let length = words.length;
  let word;
  let solvedWords = [];
  let startTime;
  let isPlaying = false;

  function setQuiz(){
      speechSynthesis.cancel();
      word = words.splice(Math.floor(Math.random()* words.length),1)[0];
      answer.textContent = word;
      answer.style.display = 'none';
      const uttr = new SpeechSynthesisUtterance (word);
      uttr.lang = 'de-DE';
      uttr.rate = 0.75;
      speechSynthesis.speak(uttr);
      target.value = '';
      const images = [
        'img/Hund.png','img/Katze.png','img/Vogel.png','img/Pinguin.png','img/Frosch.png',
        'img/Schwein.png','img/Hase.png','img/Kuh.png','img/Nilpferd.png','img/Elefant.png',
        'img/encoded1.png','img/Wal.png','img/encoded2.png','img/Schaf.png','img/Schlange.png',
      ];
      let img;
      img = `img/${word}.png`;
      question.src = img;
      question.classList.add('c-img__pc-size','u-game-content_margin');
    }

    function matchWords() {
        correctSound.currentTime = 0;
        correctSound.play();
        solvedWords.push(word);
  }

    function finishGame() {
        gameSetSound.play();
  }

  function gameReplay() {
    question.style.display = 'none';
    replay.href = 'section1_pc.html';
    replay.textContent = 'Replay?';
    replay.classList.add('c-btn','c-btn-replay','u-game-content_margin');
  }

  answer.addEventListener('click', ()=> {
    if (isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    showDisplay1.classList.remove('u-display_hidden');
    showDisplay2.classList.remove('u-display_hidden');
    answer.classList.remove('c-btn','c-btn-start','p-start-btn__text');
    start.classList.add('c-start-btn_active','c-start-btn_active2');
    answer.classList.add('p-game__text-pc');
    setQuiz();

  });

  target.addEventListener('input', () => {

    if (target.value === word) {
      matchWords();
      setTimeout(setQuiz,800);
    }

    if (length === solvedWords.length) {
         const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
         const result = document.getElementById('js-result');
         result.textContent = `Fertig! ${elapsedTime} Sekunden!`;
         speechSynthesis.pause();
         setTimeout(finishGame,500);
         setTimeout(gameReplay,1000);
         return;
      }
  });

  showAnswer.addEventListener('click', () => {
    answer.style.display = 'block';
    answer.classList.add('p-show-answer__text');
    return;
  });

  //popup
    function popupGuide() {
      const popup = document.getElementById('js-popup');
      if(!popup)return;

      const closeBtn = document.getElementById('js-close-btn');
      const showBtn = document.getElementById('js-show-popup');

      closePopup(closeBtn);
      closePopup(showBtn);
      function closePopup(elem) {
        if(!elem)return;
        elem.addEventListener('click', function(){
          popup.classList.toggle('is-show');
        });
      }
    }
    popupGuide();

 }
