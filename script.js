const bookshelf = document.querySelector('.libraryBoxes');
const newBookButton = document.querySelector('.newBookButton');
const dialog = document.querySelector('dialog');

const submitButton = document.querySelector('.submitButton');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readStatusInput = document.querySelector('#readStatus');

let bookNumber = 0;

const myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function addBookToLibrary(bookData) {
    myLibrary.push(bookData);
    newBook = bookshelf.appendChild(document.createElement('div'));
    newBook.classList.add('bookContainer');
    titleText = newBook.appendChild(document.createElement('h'));
    titleText.textContent = bookData.title;
    authorText = newBook.appendChild(document.createElement('p'));
    authorText.textContent = bookData.author;
    pagesText = newBook.appendChild(document.createElement('p'));
    pagesText.textContent = bookData.pages;
    readStatusButton = newBook.appendChild(document.createElement('button'));
    readStatusButton.textContent = bookData.read ? "read" : "not read yet";
    readStatusButton.className = bookData.read ? "green" : "red";
    readStatusButton.addEventListener('click', () => {
        changeRead(bookData.index);
    });
    removeButton = newBook.appendChild(document.createElement('button'));
    removeButton.textContent = 'Remove book';
    removeButton.addEventListener('click', () => {
        removeBook(bookData.index);
    });
    bookNumber++;
}

function removeBook(bookIndex) {
    bookshelf.removeChild(bookshelf.childNodes[bookIndex]);
    myLibrary.splice(bookIndex,1);
    bookNumber--;
    for (let i=bookIndex; i<myLibrary.length; i++) {
        myLibrary[i].index--;
    }
}

function changeRead(bookIndex) {
    let status = myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
    readStatusButton = bookshelf.childNodes[bookIndex].childNodes[3];
    readStatusButton.textContent = status ? "read" : "not read yet";
    readStatusButton.className = status ? "green" : "red";
}

newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

dialog.addEventListener('click', function(event) {
    let rect = dialog.getBoundingClientRect();
    let isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      dialog.close();
    }
  });

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
    addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, readStatusInput.checked, bookNumber));
    titleInput.value = null;
    authorInput.value = null;
    pagesInput.value = null;
    readStatusInput.checked = false;
});
