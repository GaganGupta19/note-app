console.log('Starting notes.js');

//using module and exports
module.exports.addNote = () => {
    console.log('add Note');
    return 'New Note';
}

module.exports.addNumbers = (a, b) => {
    console.log('Adding');
    return a + b;
}