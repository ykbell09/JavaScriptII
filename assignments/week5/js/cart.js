// Week 5 Assignment - Shopping Cart

// global vars -- table body for display and array to store books data
let tbody;
let books = [];

// checks localStorage for books; sets value of books[] with localStorage or default values
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

// displays all items in books[], displays total and count
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
        titleInput.value = books[i].title;
        tbody.appendChild(newRow);
        newRow.appendChild(title);
        title.appendChild(titleInput);
        titleInput.addEventListener('blur', () => {
            books[i].title = titleInput.value;
            saveCart();
            displayBooks();
        });

        // add the qty
        const qty = document.createElement('td');
        const qtyInput = document.createElement('input');
        qtyInput.className = 'qty';
        qtyInput.size = '2';
        qtyInput.value = books[i].qty;
        newRow.appendChild(qty);
        qty.appendChild(qtyInput);
        qtyInput.addEventListener('blur', () => {
            books[i].qty = qtyInput.value;
            saveCart();
            displayBooks();
        });

        // add the price - WIP
        const price = document.createElement('td');
        const priceInput = document.createElement('input');
        priceInput.className = 'price';
        priceInput.size = '2';
        priceInput.value = books[i].price;
        newRow.appendChild(price);
        price.appendChild(priceInput);
        priceInput.addEventListener('blur', () => {
            books[i].price = priceInput.value;
            saveCart();
            displayBooks();
        });

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
        removeButton.addEventListener('click', () => {
            books.splice(i, 1);
            saveCart();
            displayBooks();
        });
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
    // loop through books and add line prices together
    for (let i = 0; i < books.length; i++) {
        const lineTotal = books[i].price * books[i].qty;
        total += lineTotal;
    }
    totalText.innerHTML = total.toFixed(2);
};

// adds new book to books[], localStorage and updates display
const addBook = () => {
    const newBook =
    {
        title: 'New Book',
        qty: 1,
        price: 14.95
    };
    books.push(newBook);
    saveCart();
    displayBooks();
};

// saves current books[] to localStorage; also used as helper function when manipulating books[]
const saveCart = () => {
    const cart = JSON.stringify(books);
    localStorage.setItem('books', cart);
};

// load and display saved or new cart on page load, add 'new' and 'save' event listeners
window.onload = () => {

    loadBooks();
    displayBooks();


    document.querySelector('#new-button').addEventListener('click', () => {
        addBook();
    });

    document.querySelector('#save-button').addEventListener('click', () => {
        saveCart();
    });

};