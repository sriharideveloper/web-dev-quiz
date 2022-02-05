points = 0;
const question = document.getElementById('question');
const points_text = document.getElementById('points');
const list = [
    "2.Who created Python(Programming-Language)?",
    "3.Which is a JavaScript library?",
    "4.Which is not a programming language?",
    "5.Which is not a browser"
];

const q = document.getElementsByClassName("q");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const lost = document.getElementById("result2");
const win = document.getElementById("result");
const qnobar = document.getElementById("qnobar");

let chance = 4;
let x = 1;

function result() {
    if (points == 5) {
        window.location.href = 'win.html';
    } else if (points < 5) {
        window.location.href = 'lost.html';
    }
};

function points_update() {
    points_text.innerHTML = points;
};

function question_update() {
    if (chance == 3) {
        question.innerText = list[0];
        qnobar.setAttribute('value', '2');
    } else if (chance == 2) {
        question.innerText = list[1];
        qnobar.setAttribute('value', '3');
    } else if (chance == 1) {
        question.innerText = list[2];
        qnobar.setAttribute('value', '4');
    } else if (chance == 0) {
        question.innerText = list[3];
        qnobar.setAttribute('value', '5');
    };
};

function option_update() {
    if (chance == 3) {
        opt1.innerText = "Larry Page";
        opt1.setAttribute('onclick', 'wrong()');
        opt2.innerText = "Mark Zuckerberg";
        opt3.innerText = "Guido van Rossum";
        opt3.setAttribute('onclick', 'ans()');
        opt4.innerText = "Jack Ma";
    } else if (chance == 2) {
        opt1.innerText = "five JS";
        opt2.innerText = "three JS";
        opt2.setAttribute('onclick', 'ans()');
        opt3.innerText = "two JS";
        opt3.setAttribute('onclick', 'wrong()');
        opt4.innerText = "six JS";
    } else if (chance == 1) {
        opt1.innerText = "C";
        opt2.innerText = "Java";
        opt2.setAttribute('onclick', 'wrong()');
        opt3.innerText = "Jewel";
        opt3.setAttribute('onclick', 'ans()');
        opt4.innerText = "Ruby";
    } else if (chance == 0) {
        opt1.innerText = "Google Chrone";
        opt1.setAttribute('onclick', 'ans(); result();');
        opt2.innerText = "Safari";
        opt2.setAttribute('onclick', 'wrong(); result();');
        opt3.innerText = "Opera";
        opt3.setAttribute('onclick', 'wrong(); result();');
        opt4.innerText = "Brave";
        opt4.setAttribute('onclick', 'wrong(); result();');
    };
};

function wrong() {
    chance -= 1;
    points_update();
    question_update();
    option_update();
};

function ans() {
    chance -= 1;
    points = points + 1;
    points_update();
    question_update();
    option_update();
};