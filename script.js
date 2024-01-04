const form = document.querySelector('form');
const titleForm = document.querySelector('#title');
const authorForm = document.querySelector('#author');
const pagesForm = document.querySelector('#pages');
const readForm = document.querySelector('#read');

const pageContainer = document.querySelector('.card-container');

const library = (() => {
    let myLibrary = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addBookToLibrary();
        createPages();
        resetModal();
    });
    
    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    }
    
    const addBookToLibrary = () => {
        myLibrary.push(new Book(titleForm.value, authorForm.value, pagesForm.value, readForm.checked));
    }
    
    const createPages = () => {
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
        }
    }
    
    pageContainer.addEventListener('click', function(e) {
        let targetC = e.target; //Element pressed inside card-container
        if (targetC.nodeName !== 'BUTTON') {
            return
        } else if (targetC.classList.contains('status-btn')) {
            if (targetC.classList.contains('read-btn')) {
                targetC.textContent = 'Not Read';
                targetC.classList.remove('read-btn');
                targetC.classList.add('notread-btn');
                myLibrary[targetC.parentNode.parentNode.dataset.index].read = false;
            } else {
                targetC.textContent = 'Read';
                targetC.classList.remove('notread-btn');
                targetC.classList.add('read-btn');
                myLibrary[targetC.parentNode.parentNode.dataset.index].read = true;
            }
        } else if (targetC.classList.contains('remove-btn')) {
            myLibrary.splice(targetC.parentNode.parentNode.dataset.index, 1);
            createPages();
        }
    });
    
    const resetModal = () => {
        titleForm.value = '';
        authorForm.value = '';
        pagesForm.value = '';
        readForm.checked = false;
    }

    //Adding starting cards
    myLibrary.push(new Book('The Pilgrim\s Progress', 'John Bunyan', 354, true));
    myLibrary.push(new Book('One Piece', 'Eiichiro Oda', '22,000+', false));
    myLibrary.push(new Book('Green Eggs And Ham', 'Dr. Seuss', 72, false));
    createPages();
})();