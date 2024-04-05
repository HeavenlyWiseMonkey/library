const bookshelf = document.querySelector('.main');
const newBookButton = document.querySelector('.newBookButton');
const dialog = document.querySelector('dialog');
const exitButton = document.querySelector('.exitButton');

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
    return `{this.title}, {this.author}, {this.pages}, {this.read}`;
  }
}

function addBookToLibrary(bookData) {
  // do stuff here
    myLibrary.push(bookData);
    newBook = bookshelf.appendChild(document.createElement('div'));
    newBook.classList.add('book-container');
    newBook.textContent = bookData.title;
}

function displayBook() {
    for (let i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

exitButton.addEventListener('click', () => {
    dialog.close();
})

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet'));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet'));


displayBook();