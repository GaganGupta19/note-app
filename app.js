console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

//console.log(_.isString(true));
//console.log(_.isString('Gagan'));
var filteredArray = _.uniq(['Gagan', 'Gagan', 1, 3, 5, 5]);
console.log(filteredArray);

console.log(_.isString('Gagan'));
//console.log(notes.addNote());
//console.log(notes.addNumbers(9, -2));
//testing fs library
//fs.appendFileSync('greetings.txt', 'hello world');

//testing os library
//var user = os.userInfo();
//console.log(user);

//adding fs and os together
//fs.appendFileSync('greetings.txt', `Hello ${user.username}! your age is ${notes.age}.`);