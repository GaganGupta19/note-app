console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

//testing fs library
//fs.appendFileSync('greetings.txt', 'hello world');

//testing os library
var user = os.userInfo();
//console.log(user);

//adding fs and os together
fs.appendFileSync('greetings.txt', `Hello ${user.username}! your age is ${notes.age}.`);