console.log('Starting notes.js');
const fs = require('fs');

let fetchNotes = () => {
    let notes = [];
    try {
        let fileNotes = fs.readFileSync('notes-data.json');
        notes = JSON.parse(fileNotes);
    }catch (e) {
        console.log(e);
    }
    return notes;
};

let saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let noteObject = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(noteObject);
        saveNote(notes);
        return noteObject;
    }
};

let getAll = () => {
    console.log('get all');
};

let getNote = (title) => {
    console.log('get note');
};

let removeNote = (title) => {
    console.log('remove note');
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

