let myLibrary = [

];

const addNewBookBtn = document.getElementById('add-btn');
const dialog = document.getElementById('dialog-book');
const form = document.querySelector('form');

const titleForm = document.querySelector('#title');
const authorForm = document.querySelector('#author');
const pagesForm = document.querySelector('#pages');
const readForm = document.querySelector('#read');

addNewBookBtn.addEventListener('click', function() {
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

const pageContainer = document.querySelector('.card-container');

function createPages() {
    pageContainer.innerHTML = ''; //Remove previous cards
    for (let i=0; i<myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = `${i}`;
        let cardTitle = document.createElement('h2');
        let cardAuthor = document.createElement('h3');
        let cardPages = document.createElement('p');
        cardTitle.textContent = myLibrary[i].title;
        cardAuthor.textContent = myLibrary[i].author;
        cardPages.textContent = `${myLibrary[i].pages} pages`;
        let cardButtons = document.createElement('div');
        let cardRead = document.createElement('button');
        cardRead.classList.add('status-btn');
        let cardRemove = document.createElement('button');
        cardRemove.classList.add('remove-btn');
        if (myLibrary[i].read === true) {
            cardRead.textContent = "Read";
            cardRead.classList.add('read-btn');
        } else {
            cardRead.textContent = "Not Read";
            cardRead.classList.add('notread-btn');
        }
        cardRemove.textContent = "Remove";
        pageContainer.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardButtons);
        cardButtons.appendChild(cardRead);
        cardButtons.appendChild(cardRemove);
    }
}

function resetAll() {
    titleForm.value = '';
    authorForm.value = '';
    pagesForm.value = '';
    readForm.checked = false;
}