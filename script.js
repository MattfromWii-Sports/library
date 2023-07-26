let myLibrary = [];

const addNewBookBtn = document.getElementById('add-btn');
const dialog = document.getElementById('dialog-book');
const form = document.querySelector('form');
let stats = document.querySelectorAll('button.status-btn');

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
    resetModal();
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
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = `${i}`;
        const cardTitle = document.createElement('h2');
        const cardAuthor = document.createElement('h3');
        const cardPages = document.createElement('p');
        cardTitle.textContent = myLibrary[i].title;
        cardAuthor.textContent = myLibrary[i].author;
        cardPages.textContent = `${myLibrary[i].pages} pages`;
        const cardButtons = document.createElement('div');
        const cardRead = document.createElement('button');
        cardRead.classList.add('status-btn');
        const cardRemove = document.createElement('button');
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
        cardButtonStatus();
    }
}

function cardButtonStatus() {
    stats = document.querySelectorAll('button.status-btn');
    stats.forEach(btn => btn.addEventListener('click', i()));    
}
function i() {
    console.log();
    /*if (a.classList.contains('read-btn')) {
        a.textContent = 'Not Read';
        a.classList.remove('read-btn');
        a.classList.add('notread-btn');
    } else {
        a.textContent = 'Read';
        a.classList.remove('notread-btn');
        a.classList.add('read-btn');
    }*/
}

function resetModal() {
    titleForm.value = '';
    authorForm.value = '';
    pagesForm.value = '';
    readForm.checked = false;
}