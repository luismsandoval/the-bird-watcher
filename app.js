'use strict'

let name = prompt('What is your name?');
let time = prompt('What time is it? 0-24');
let bird = prompt('What is your favorite kind of bird?');
let message;

if(time <= 11){
    message = 'Good morning!';
} else if(time <= 18){
    message = 'Good afternoon!';
} else if(time <= 24){
    message = 'Good evening!';
} else {
    message = 'The limit does not exist!'
}

document.write('Hi, ' + name + '! ' + message + ' ' + bird + ' is my favorite type of bird too!');

var id = null;
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
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