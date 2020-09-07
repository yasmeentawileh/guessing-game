'use strict';
var userName = prompt('What is your name?');
alert(userName + ' ,hello to About Me Guessing Game! please answer the questions with yes/no or y/n');
var nameAnswer = prompt('Is my name Reem? (yes/no or y/n)').toLowerCase();
if (nameAnswer === 'yes' || nameAnswer === 'y') {
    console.log('You are correct!');
    alert('You are correct!');
} 

var ageAnswer = prompt('Am I 22 years old? (yes/no or y/n)').toLowerCase();
if (ageAnswer === 'yes' || ageAnswer === 'y') {
    console.log('You are correct!');
    alert('You are correct!');
} 

var educationAnswer = prompt('Did I graduate from university? (yes/no or y/n)').toLowerCase();
if (educationAnswer === 'yes' || educationAnswer === 'y') {
    console.log('You are correct!');
    alert('You are correct!');
} 

var workAnswer = prompt('Am I working in a company? (yes/no or y/n)').toLowerCase();
if (workAnswer === 'no' || workAnswer === 'n') {
    console.log('You are correct!');
    alert('You are correct!');
} 

var hopeAnswer = prompt('Am I aspiring to become a full-stack developer? (yes/no or y/n)').toLowerCase();
if (hopeAnswer === 'yes' || hopeAnswer === 'y') {
    console.log('You are correct!');
    alert('You are correct!');
} 

alert('Thank you ' + userName +  ', hope you enjoy it! You will see a short biography about me, hope this information will be enough for you.');









