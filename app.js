console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

//let command = process.argv[2];
const argv = yargs.argv;
let command = argv._[0];
console.log(command);

if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read'){
    notes.getNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else{
    console.log('Default');
}