/* eslint-disable no-redeclare */
/* eslint-disable indent */
'use strict';

    var userName = prompt('What is your name?');
    function yasmeen() {
    alert(userName + ', hello to About Me Guessing Game! please answer the questions with yes/no or y/n');
    var nameAnswer = prompt('Is my name Reem? (yes/no or y/n)').toLowerCase();
    if (nameAnswer === 'yes' || nameAnswer === 'y') {
        console.log('You are correct!');
        alert('You are correct!');
    }
}
yasmeen();
function ageAnswQ() {
    var ageAnswer = prompt('Am I 22 years old? (yes/no or y/n)').toLowerCase();
    if (ageAnswer === 'yes' || ageAnswer === 'y') {
        console.log('You are correct!');
        alert('You are correct!');
    }
}
ageAnswQ();
function eduQ() {
    var educationAnswer = prompt('Did I graduate from university? (yes/no or y/n)').toLowerCase();
    if (educationAnswer === 'yes' || educationAnswer === 'y') {
        console.log('You are correct!');
        alert('You are correct!');
    }
}
eduQ();
function workQ() {
    var workAnswer = prompt('Am I working in a company? (yes/no or y/n)').toLowerCase();
    if (workAnswer === 'no' || workAnswer === 'n') {
        console.log('You are correct!');
        alert('You are correct!');
    }
}
workQ();
function hopeQ() {
    var hopeAnswer = prompt('Am I aspiring to become a full-stack developer? (yes/no or y/n)').toLowerCase();
    if (hopeAnswer === 'yes' || hopeAnswer === 'y') {
        console.log('You are correct!');
        alert('You are correct!');
    }
}
hopeQ();

alert('Thank you ' + userName + ', hope you enjoy it! You will see a short biography about me, hope this information will be enough for you.');
function guessNum() {
    alert('Try to guess a number between 0 to 10, are you ready? please answer the questions with numeric input.');
    alert('You have exactly four opportunities to get the correct answer.');
    var numAttempts = 4;
    var answer = Math.floor(Math.random() * 10) + 1;
    console.log(answer);
    while (numAttempts > 0) {
        var input = prompt('Try to guess!');
        input = Number(input);
        console.log(input);

        numAttempts--;

        if (input < answer) {
            alert('Your guess is too low');
        } else if (input > answer) {
            alert('Your guess is too high.');
        } else if (input === answer) {
            alert('Great job, You guessed my number!');
            break;
        }

        // eslint-disable-next-line eqeqeq
        if (numAttempts == 0) {
            alert('You didn\'t guess it, the number is ' + answer);
        }
    }
}
guessNum();
alert('Are you ready for the multiple answers questions? you have 6 attempts for each question.');
var count = 0;
function attemptsQ() {
    var attempts = 6;
    var drinks = ['coffee', 'nescafé', 'tea'];
    for (var i = 0; i < attempts; i++) {
        var input = prompt('What is my favorite drink?');
        var userInput = input.toLowerCase();
        console.log(userInput);

        for (var j = 0; j < drinks.length; j++) {
            if (input === drinks[j]) {
                alert('Great job, you got it!');
                count++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Wrong, try to guess again!');
        }
    }
    alert('My favorite drinks are: coffee, nescafé and tea');

    var movies = ['romance', 'comedy', 'drama'];
    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < attempts; i++) {
        var input = prompt('What is my favorite genres(types) of movies?');
        var userInput = input.toLowerCase();
        console.log(userInput);

        for (var j = 0; j < movies.length; j++) {
            if (input === movies[j]) {
                alert('Great job, you got it!');
                count++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Wrong, try to guess again!');
        }
    }
    alert('My favorite genres(types) of movies are: romance, comedy and drama');

    var foods = ['pizza', 'burger', 'fried chicken'];
    for (var i = 0; i < attempts; i++) {
        var input = prompt('What is my favorite junk food?');
        var userInput = input.toLowerCase();
        console.log(userInput);

        for (var j = 0; j < foods.length; j++) {
            if (input === foods[j]) {
                alert('Great job, you got it!');
                count++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Wrong, try to guess again!');
        }
    }
    alert('My favorite junk foods are: pizza, burger and fried chicken');
var colors = ['red', 'pink', 'black'];
for (var i = 0; i < attempts; i++) {
    var input = prompt('What is my favorite color?');
    var userInput = input.toLowerCase();
    console.log(userInput);

    for (var j = 0; j < colors.length; j++) {
        if (input === colors[j]) {
            alert('Great job, you got it!');
            count++;
            i = 6;
            break;
        }
    }
    if (i !== 6) {
        alert('Wrong, try to guess again!');
    }
}
alert('My favorite colors are: red, pink and black');

var countries = ['turkey', 'france', 'italy'];
for (var i = 0; i < attempts; i++) {
    var input = prompt('What country would I like to visit?');
    var userInput = input.toLowerCase();
    console.log(userInput);

    for (var j = 0; j < countries.length; j++) {
        if (input === countries[j]) {
            alert('Great job, you got it!');
            count++;
            i = 6;
            break;
        }
    }
    if (i !== 6) {
        alert('Wrong, try to guess again!');
    }
}
alert('The countries are: turkey, france and italy');

var actors = ['lee min ho', 'hyun bin', 'park seo joon'];
for (var i = 0; i < attempts; i++) {
    var input = prompt('Who is my favorite Korean actor?');
    var userInput = input.toLowerCase();
    console.log(userInput);

    for (var j = 0; j < actors.length; j++) {
        if (input === actors[j]) {
            alert('Great job, you got it!');
            count++;
            i = 6;
            break;
        }
    }
    if (i !== 6) {
        alert('Wrong, try to guess again!');
    }
}
alert('The favorite Korean actors are: lee min ho, hyun bin and park seo joon');

var flowers = ['jasmine', 'lavender', 'violet'];
for (var i = 0; i < attempts; i++) {
    var input = prompt('What is my favorite flower?');
    var userInput = input.toLowerCase();
    console.log(userInput);

    for (var j = 0; j < flowers.length; j++) {
        if (input === flowers[j]) {
            alert('Great job, you got it!');
            count++;
            i = 6;
            break;
        }
    }
    if (i !== 6) {
        alert('Wrong, try to guess again!');
    }
}
alert('My favorite flowers are: jasmine, lavender and violet');
}
attemptsQ();
alert('Your final score: ' + count + '/7');












