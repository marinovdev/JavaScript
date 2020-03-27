//returnst a promise
function getAllBooks() {
    return fetch('https://softuni008.firebaseio.com/.json')
        .then(x => x.json())
        .then(x => {

            return x.books;

        }).catch(err => {
            throw new Error(`${err} : ${err.message}`);

        });

}

//list all books from the DB and add its corresponding buttons
function loadBooks() {
    tableBodyClear();

    getAllBooks()
        .then(books => {

            let table = document.querySelector('body table tbody');
            for (const element of Object.entries(books)) {
                let book = element[1];

                let tr = document.createElement('tr');
                for (const index in book) {
                    let td = document.createElement('td');
                    td.innerText = book[index];
                    tr.appendChild(td);

                }

                //adds the buttons Edit, Delete and Tags for each row
                let td = document.createElement('td');
                let buttonEdit = document.createElement('button');
                buttonEdit.addEventListener('click', () => buttonEdit);
                buttonEdit.innerText = 'Edit';
                let buttonDelete = document.createElement('button');
                buttonDelete.addEventListener('click', () => buttonDelete);
                buttonDelete.innerText = 'Delete';
                let buttonTags = document.createElement('button');
                buttonTags.addEventListener('click', () => buttonTags);
                buttonTags.innerText = 'Tags';

                //append the buttons to the column
                td.appendChild(buttonEdit);
                td.appendChild(buttonDelete);
                td.appendChild(buttonTags);
                //append the columnt to the row
                tr.appendChild(td);
                table.appendChild(tr);

            };

        });
}

// empty all the elements from the table body
function tableBodyClear() {
    let table = document.querySelector('body table tbody');
    table.innerHTML = '';
}

function submitBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    let bookObject = { title, author, isbn };
    console.log(bookObject);
    console.log(title);
    console.log(author);
    console.log(isbn);
    (async () => {
        let response = await fetch('https://softuni008.firebaseio.com/books.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookObject)
        });

        const content = await response.json();

        console.log(content);

    })();
}
//buttons functionality
function buttonEdit() {

}

function buttonDelete() {

}

function buttonTags() {

}
let loadBooksButton = document.getElementById('loadBooks');

let submitButton = document.querySelector('body form button');

loadBooksButton.addEventListener('click', loadBooks);
submitButton.addEventListener('click', submitBook);

let testButton = document.getElementById('test-button');
submitButton.addEventListener('click', makeRequest);
function makeRequest() {
    let title = 'from test';
    let author = 'author is test';
    let isbn = '9999999';

    fetch('https://softuni008.firebaseio.com/books.json', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, isbn, title })
    }).then(response => {
        console.log(response);

    });
}