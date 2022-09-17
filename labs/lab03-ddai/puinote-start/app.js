

function updateElement() {
    console.log("running the updateElement function");
    const noteImageElement = document.querySelector('img.notecard-thumbnail');
    noteImageElement.src = notecard.noteImageURL;
    
    //need to use querySelector to find the HTML element// 
    const noteTitleElement = document.querySelector('div.note-title')


}

const notecard {
    noteTitle: 'This is the title of the note',
    noteBody: 'And here is the body of the note',
    noteImageURL: 'assets/warhol-frog.png'
}