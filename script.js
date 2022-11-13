'use strict';

const bookList = [
    {
        id: 1,
        author: 'Charlse Dickens',
        title: 'Oliver Twist'
    },
    {
        id:2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];
const searchInput = null;

function handleKeyPress(input) {
    /* Ta emot/läsa av värdet i inputfältet.
    Skicka värdet till searchBooks 
    searchBooks retunerar en filtrerad lista
    Filtrerade listan skickas till renderBookList*/
    searchBooks(input);
}

function searchBooks(searchTerm) {
    /*Loopa igenom bookList
    För varje varv i loopen, ta den aktuella elementet (boken) 
    Jämför titel med söktermen
    Om söktermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList)
    Retunerar filteredList eller anropar renderBookList*/
    const filteredList = [];
    for (let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
            filteredList.push(bookList[0]);
        }
    }
    renderBookList(filteredList);
    /*Element i HTML-listan visas/döljs beroende på listans innehåll */

}


function renderBookList(list) {
    console.log(list)
}

handleKeyPress('e');

