class Book {
    constructor (id, title, author, read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor (){
        this.bookCount = 0;
        this.books = [];
    }

    markRead(checkbox, id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {
                this.books[i].read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
                break;
            }
        }
    }
    addBook(title, author, read) {
        let book = new Book(this.bookCount, title, author, read);
        let newRow = document.createElement('tr');
    
        let cellTitle = document.createElement('td');
        cellTitle.textContent = book.title;

        let cellAuthor = document.createElement('td');
        cellAuthor.textContent = book.author;

        let cellRead = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = book.read;
        checkbox.disabled = book.read;
        cellRead.appendChild(checkbox);

        newRow.appendChild(cellTitle);
        newRow.appendChild(cellAuthor);
        newRow.appendChild(cellRead);

        let tableBody = document.getElementById('tBody');
        tableBody.appendChild(newRow);

        this.books.push(book);
        this.bookCount++;
    }
}

let bookTitle = document.getElementById('titleInput');
let authorInput = document.getElementById('authorInput');
let checkBox = document.getElementById('readCheckbox');

let library = new Library();

let bookButton = document.getElementById('addBookButton')
bookButton.addEventListener('click', function() {
    library.addBook(bookTitle.value, authorInput.value, checkBox.checked); 
    bookTitle.value = '';
    authorInput.value = '';
    checkBox.checked = false;
});
