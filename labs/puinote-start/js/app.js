class Notecard {
    constructor(title, body, imageURL) {
        this.title = title;
        this.body = body;
        this.imageURL = imageURL;
    }

    //new from this lab
    createElement(deleteFunction) {
        console.log('creating');
        let template = document.querySelector('#notecard-template');
        //complete clone of all the content of the id
        let clone = template.content.cloneNode(true);
        this.element = clone;

        let container = document.querySelector('#notecard-list');
        container.prepend(this.element);

        let deleteButton = this.element.querySelector('icon-delete');
        deleteButton.addEventListener('click', )
     }
    
     updateElement() {
        let noteImageElement = this.element.querySelector('.notecard-thumbnail');
        noteImageElement.src = this.imageURL;

        let noteTitleElement = this.element.querySelector('.note-title');
        noteTitleElement.innerText = this.title;

        let noteBodyElement = this.element.querySelector('.note-body');
        noteBodyElement.innerText = this.body;

        this.updateElement();
     }

     removeElement() {
        this.element.remove();
     }

}

//remove element from notecardSet
function deleteNote(notecard) {
    notecard.removeElement();
    notecardSet.delete(notecard);
}

//new stuff from this lab

let notecardSet = new Set()

function addNewNote(title, body, imageURL) {
  let notecard = new Notecard(title, body, imageURL);
  notecardSet.add(notecard);
  return notecard;
}

let notecardOne = addNewNote(
  "My first note",
  "This is note body",
  "assets/warhol-rhino.png"
)

//go through all the elements of notecardSet and assign them 
for (let notecard of notecardSet) {
  item.createElement(() => {
    deleteNote(item);
  });
}
