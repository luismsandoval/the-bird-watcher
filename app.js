'use strict'

let name = prompt('What is your name?')
let time = prompt('What time is it?');
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

document.write('Hi, ' + name + '! ' + message);