console.log('Hello world');

const fs = require('fs');
const os = require('os');

//testing fs library
//fs.appendFileSync('greetings.txt', 'hello world');

//testing os library
var user = os.userInfo();
//console.log(user);

//adding fs and os together
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);