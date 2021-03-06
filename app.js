console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

//let command = process.argv[2];
const title = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};
const body = {
    describe: 'Body of the node',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'List all nodes')
    .command('read', 'Read a specific note', { title })
    .command('remove', 'Remove a note', { title })
    .help()
    .argv;

let command = argv._[0];

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(_.isEmpty(note)){
        console.log('Already Exists');
    }else{
        console.log('Note Added');
    }
} else if(command === 'list') {
    let allNotes = notes.getAll();
    if(allNotes){
        console.log(allNotes);
    }else{
        console.log('Notes not found');
    }
} else if(command === 'read'){
    let note = notes.getNote(argv.title);
    if(note){
        console.log(note);
    }else{
        console.log('Not found');
    }
} else if(command === 'remove') {
    notes.removeNote(argv.title) ? console.log('Removed Successfully') : console.log('Title not found');
}
else{
    console.log('Default');
}