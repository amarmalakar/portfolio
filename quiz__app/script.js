"use strict"

const main = document.querySelector('main');
const currQues = document.querySelector('#currQues');
const totQues = document.querySelector('#totQues');
const question = document.querySelector('#question');
const optionList = document.querySelector('#optionList');
const next = document.querySelector('#next');
var radio = document.getElementsByTagName('input');
let score = 0;

totQues.innerText = db.length;

let currQuestion = 0;

const displayQues = () => {
    currQues.innerText = currQuestion + 1;
    question.innerHTML = db[currQuestion].questions;

    optionList.innerHTML = '';
    for (let i = 0; i < db[currQuestion].options.length; i++) {
        optionList.innerHTML += `
        <li>
            <input type="radio" name="option" value="${db[currQuestion].options[i]}"> ${db[currQuestion].options[i]}
        </li>
        `;
    }
}
displayQues();

const checkQues = () => {
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            if (db[currQuestion].answer == i + 1) {
                score += 1;
            } else {
                score += 0;
            }
        }
    }
}

next.addEventListener('click', () => {
    if (currQuestion < db.length - 1) {
        checkQues();
        currQuestion++;
        displayQues();
    } else {
        checkQues();
        main.innerHTML = `
            <h1>Your Score is: ${score}</h1>
            <button id="reload" onclick="window.location.reload()">Reload</button>
        `;
    }
})

// document.getElementById('reload').addEventListener(
//     'click', () => {
//         window.location.reload();
//     }
// )