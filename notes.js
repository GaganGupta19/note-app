console.log('Starting notes.js');

//using module and exports
let addNote = (title, body) => {
    console.log('title: ', title, 'body: ', body);
};

let getAll = () => {
    console.log('get all');
};

let getNote = (title) => {
    console.log('get note');
};

let removeNote = (title) => {
    console.log('remove note');
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

