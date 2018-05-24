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
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title)
    return filteredNotes[0];
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let filterNotes = notes.filter((note) => note.title !== title);
    saveNote(filterNotes);
    return filterNotes.length !== notes.length
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

