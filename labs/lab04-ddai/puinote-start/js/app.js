// const = constant variable, does not change
class Notecard {
    //good habit to put these properties on top
    noteImageURL;
    noteTitle;
    noteBody;

    constructor(imageURL, title, body, elementID) {
        //name the parameters ^ different from the properties below: 
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;

        this.element = document.querySelector(elementID);

        this.updateElement();

        //grabbing the trash icon
        const btnDelete = this.element.querySelector('.icon-delete');

        //ythen tie function to the 'onclick' property
        btnDelete.onclick = this.deleteNote;
    }

    updateElement() {    
      const noteImageElement = this.element.querySelector('.notecard-thumbnail');
      const noteTitleElement = this.element.querySelector('.note-title');
      const noteBodyElement = this.element.querySelector('.note-body');
  
      noteImageElement.src = this.noteImageURL;
      noteTitleElement.innerText = this.noteTitle;
      noteBodyElement.innerText = this.noteBody;
    }

    deleteNote() {
      const notecardElement = this.closest('.notecard');
      notecardElement.remove();
      
    }

}

//this keyword refers to the notecard object that the constructor 
//function creates.

const notecardOne = new Notecard(
  //parameters don't need to be in the same line
  'assets/warhol-frog.png',
  'This is the First Note',
  'Here is some body text for the first note.',
  '#notecard-one'
)

const notecardTwo = new Notecard(
  'assets/warhol-orangutan.png',
  'This is the Second Note',
  'And here is some body text for the second note! What could be next?',
  '#notecard-two'
)

const notecardThree = new Notecard(
  'assets/warhol-eagle.png',
  'This is the Third Note',
  'Yep, you guessed it, here is some body text for the third note.',
  '#notecard-three'
)