let myLibrary = [];

const addNewBookBtn = document.getElementById('add-btn');
const dialog = document.getElementById('dialog-book');
const form = document.querySelector('form');

const titleForm = document.querySelector('#title');
const authorForm = document.querySelector('#author');
const pagesForm = document.querySelector('#pages');
const readForm = document.querySelector('#read');

addNewBookBtn.addEventListener('mousedown', function() {
    dialog.showModal();
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    createPages();
    resetAll();
    dialog.close();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.push(new Book(titleForm.value, authorForm.value, pagesForm.value, readForm.checked));
}

function createPages() {

}

function resetAll() {
    titleForm.value = '';
    authorForm.value = '';
    pagesForm.value = '';
    readForm.checked = false;
}