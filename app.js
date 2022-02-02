'use strict'

function yourName() {
    let name = prompt('What is your name?');
    return name;
}

function yourTime() {
    let time = prompt('What time is it? 0-24');
    let message;

    if (time <= 11) {
        message = 'Good morning!';
    } else if (time <= 18) {
        message = 'Good afternoon!';
    } else if (time <= 24) {
        message = 'Good evening!';
    } else {
        message = 'The limit does not exist!'
    } return message;
}

function favoriteBird() {
    let bird = prompt('What is your favorite kind of bird? ');
    return bird;
}

function myMove() {
    let id = null;
    let elem = document.getElementById("myAnimation");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 910) {
            clearInterval(id);
        } else {
            pos++;
            /* elem.style.top = pos + 'px'; */
            elem.style.left = pos + 'px';
        }
    }
}

function guessANumber() {
    let answer;

    do {
        answer = prompt('Guess my favorite bird!');
        if (answer != 'owl') {
            alert('try again! Hint: owl');
        } else {
            alert('you are correct!');
        }
    } while (answer != 'owl')
}

function displayPicture() {

    let output = '';
    let rating = prompt('How many flocks would you like to see? 1-3');
    for (let i = 0; i < rating; i++) {
        output = output + "<img class='bird' src='bird.png'/>"
    }
    return document.write(output);
}

guessANumber();