// Week 5 Assignment - Shopping Cart

let tbody;
let books = [];

const loadBooks = () => {

    const defaultBooks = [
        {
            title: 'Absolute Java',
            qty: 1,
            price: 114.95
        },
        {
            title: 'Pro HTML5',
            qty: 1,
            price: 27.95
        },
        {
            title: 'Head First HTML5',
            qty: 1,
            price: 27.89
        }
    ];

    // check local storage for existing books data
    const cart = localStorage.getItem('books');
    books = JSON.parse(cart);
    if (!books) {
        books = defaultBooks;
    }
};

const displayBooks = () => {

    // target the table body
    tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    // for each record in the books array ... 
    for (let i = 0; i < books.length; i++) {

        // initialize a new row
        const newRow = document.createElement('tr');

        // add the title
        const title = document.createElement('td');
        const titleInput = document.createElement('input');
        titleInput.className = 'title';
        titleInput.id = i;
        titleInput.value = books[i].title;
        tbody.appendChild(newRow);
        newRow.appendChild(title);
        title.appendChild(titleInput);

        // add the qty
        const qty = document.createElement('td');
        const qtyInput = document.createElement('input');
        qtyInput.className = 'qty';
        qtyInput.size = '2';
        qtyInput.value = books[i].qty;
        newRow.appendChild(qty);
        qty.appendChild(qtyInput);

        // add the price
        const price = document.createElement('td');
        const priceInput = document.createElement('input');
        priceInput.className = 'price';
        priceInput.size = '2';
        priceInput.value = books[i].price.toFixed(2);
        newRow.appendChild(price);
        price.appendChild(priceInput);

        // add Unit Price column
        const unitPrice = document.createElement('td');
        const unitPriceP = document.createElement('p');
        const unitPriceText = document.createTextNode('$ ' + priceInput.value);
        newRow.appendChild(unitPrice);
        unitPrice.appendChild(unitPriceP);
        unitPriceP.appendChild(unitPriceText);

        // add line total
        const lineTotal = document.createElement('td');
        const lineTotalP = document.createElement('p');
        const calculatedTotal = qtyInput.value * priceInput.value;
        const lineTotalText = document.createTextNode('$ ' + calculatedTotal.toFixed(2));
        newRow.appendChild(lineTotal);
        lineTotal.appendChild(lineTotalP);
        lineTotalP.appendChild(lineTotalText);

        // add a remove button
        const remove = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';
        removeButton.className = 'remove-button';
        newRow.appendChild(remove);
        remove.appendChild(removeButton);
    }

    countBooks();
    getTotal();

};

// helper function for displayBooks()
const countBooks = () => {
    const count = document.querySelector('#count');
    count.innerHTML = books.length;
};

// helper function for displayBooks()
const getTotal = () => {
    let total = 0;
    const totalText = document.querySelector('#total');
    // loop through books and add together
    for (let i = 0; i < books.length; i++) {
        const lineTotal = books[i].price * books[i].qty;
        total += lineTotal;
    }
    totalText.innerHTML = total.toFixed(2);
};

const addBook = () => {
    const newBook =
    {
        title: 'New Book',
        qty: 1,
        price: 14.95
    };
    books.push(newBook);
    displayBooks();
};

// saves current books[] to localStorage
const saveCart = () => {
    const cart = JSON.stringify(books);
    localStorage.setItem('books', cart);
};

const removeBook = (e) => {
    const removeButton = e.target;
    if (removeButton.className === 'remove-button') {
        const bookId = removeButton.parentNode.parentNode.firstChild.firstChild.id;
        removeButton.parentNode.parentNode.remove();
        books.splice(bookId, 1);

        saveCart();
        displayBooks();
    }
};

const updateBook = (e) => {
    const bookUpdate = e.target;
    
    // update qty
    if (bookUpdate.className === 'qty') {
        bookUpdate.addEventListener('blur', () => {
            const bookId = bookUpdate.parentNode.parentNode.firstChild.firstChild.id;
            books[bookId].qty = parseInt(bookUpdate.value);

            saveCart();
            displayBooks();
        });
    }
    
    // update price
    if (bookUpdate.className === 'price') {
        bookUpdate.addEventListener('blur', () => {
            const bookId = bookUpdate.parentNode.parentNode.firstChild.firstChild.id;
            books[bookId].price = parseInt(bookUpdate.value);

            saveCart();
            displayBooks();
        });
    }

    // update title
    if (bookUpdate.className === 'title') {
        bookUpdate.addEventListener('blur', () => {
            const bookId = bookUpdate.parentNode.parentNode.firstChild.firstChild.id;
            books[bookId].title = bookUpdate.value;

            saveCart();
            displayBooks();
        });
    }
};

window.onload = () => {

    loadBooks();
    displayBooks();


    document.querySelector('#new-button').addEventListener('click', () => {
        addBook();
    });

    document.querySelector('#save-button').addEventListener('click', () => {
        saveCart();
    });

    document.querySelector('tbody').addEventListener('click', (e) => {
        removeBook(e);
    });

    document.querySelector('tbody').addEventListener('input', (e) => {
        updateBook(e);
    });

};