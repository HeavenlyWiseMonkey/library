const bookshelf = document.querySelector('.libraryBoxes');
const newBookButton = document.querySelector('.newBookButton');
const dialog = document.querySelector('dialog');

const exitButton = document.querySelector('.exitButton');
const submitButton = document.querySelector('.submitButton');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readStatusInput = document.querySelector('#readStatus');

let bookNumber = 0;

const myLibrary = [];

function Book(title, author, pages, read, index) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
    this.info = () => {
    return `{this.title}, {this.author}, {this.pages}, {this.read}`;
  }
}

function addBookToLibrary(bookData) {
  // do stuff here
    myLibrary.push(bookData);
    newBook = bookshelf.appendChild(document.createElement('div'));
    newBook.classList.add('bookContainer');
    titleText = newBook.appendChild(document.createElement('h'));
    titleText.textContent = bookData.title;
    authorText = newBook.appendChild(document.createElement('p'));
    authorText.textContent = bookData.author;
    pagesText = newBook.appendChild(document.createElement('p'));
    pagesText.textContent = bookData.pages;
    readStatusText = newBook.appendChild(document.createElement('p'));
    readStatusText.textContent = bookData.read;
    removeButton = newBook.appendChild(document.createElement('button'));
    removeButton.textContent = 'Remove book';
    removeButton.addEventListener('click', () => {
        removeBook(bookData.index);
    });
    bookNumber++;
}

function displayBook() {
    for (let i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

function removeBook(bookIndex) {
    bookshelf.removeChild(bookshelf.childNodes[bookIndex]);
    myLibrary.splice(bookIndex,1);
    bookNumber--;
    for (let i=bookIndex; i<myLibrary.length; i++) {
        myLibrary[i].index--;
    }
}

newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

exitButton.addEventListener('click', () => {
    dialog.close();
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let readStatus;
    if (readStatusInput.checked) {
        readStatus = 'read';
    }
    else {
        readStatus = 'not read yet';
    }
    dialog.close();
    addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus, bookNumber));
    titleInput.value = null;
    authorInput.value = null;
    pagesInput.value = null;
    readStatusInput.checked = false;
});

// addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet'));
// addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet'));


// displayBook();