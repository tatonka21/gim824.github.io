window.addEventListener('load', init);

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const levels = {
    easy: 5, medium: 3, hard: 1
}

const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

const words = [
    'tenuous', 'frantic', 'cross', 'time', 'identify', 'start', 'plastic', 'beam', 'known', 'basin', 'remove', 'weak', 'observant', 'upset', 'magnificent', 'diligent', 'territory', 'different', 'vegetable', 'long', 'reflect', 'spicy', 'materialistic', 'mess', 'magenta', 'elastic', 'lick', 'stain', 'creature', 'victorious'
];

function init () {

    seconds.innerHTML = currentLevel;

    showWord(words);

    wordInput.addEventListener('input', startMatch);

    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);

}

function startMatch () {

    if (matchWords()) {

        isPlaying = true;
        time = currentLevel + 1;

        showWord(words);
        wordInput.value = '';

        score++;

    }

    if (score === -1) {

        scoreDisplay.innerHTML = 0;

    } else {

        scoreDisplay.innerHTML = score;

    }

}

function matchWords () {

    if (wordInput.value === currentWord.innerHTML) {

        message.innerHTML = 'Correct';
        return true;

    } else {

        message.innerHTML = '';
        return false;

    }

}

function showWord (words) {

    const randomIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randomIndex];

}

function countdown () {

    if (time > 0) {

        time--;

    } else if (time === 0) {

        isPlaying = false;

    }

    timeDisplay.innerHTML = time;

}

function checkStatus () {

    if (!isPlaying && time === 0) {

        message.innerHTML = 'Game Over';

        score = -1;

    }

}