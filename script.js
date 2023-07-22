let myLibrary = [];

const addNewBook = document.getElementById('add-btn');
const dialog = document.getElementById('dialog-book');

addNewBook.addEventListener('mousedown', function() {
    dialog.showModal();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}