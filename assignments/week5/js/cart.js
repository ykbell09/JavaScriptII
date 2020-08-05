// Week 5 Assignment - Shopping Cart

// You can use this data for seeding your cart
// Or you can create your own



let tbody;
let total = 0;
let books = [];

books = [
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

window.onload = () => {
    
    const addBooks = () => {

        // target the table body
        tbody = document.querySelector('tbody');
        
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
            priceInput.value = books[i].price;
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
            const lineTotalText = document.createTextNode('$ ' + qtyInput.value * priceInput.value);
            newRow.appendChild(lineTotal);
            lineTotal.appendChild(lineTotalP);
            lineTotalP.appendChild(lineTotalText);

            // add a remove button
            const remove = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.innerHTML = 'Remove';
            newRow.appendChild(remove);
            remove.appendChild(removeButton);
        }

        // update book count
        const count = document.querySelector('#count');
        count.innerHTML = books.length;
                
        // update grand total
        const total = document.querySelector('#total');
        // loop through books and 

        total.innerHTML = 'test';
    };
    

    addBooks();



};





// when page loads, check to see if there's local storage, if yes load it, if no then load default data

// click save button saves to local storage
// adding new books adds a line with a default, adds to total, update line total
// remove button removes from list and removes from total
// local storage will keep saved cart == state management
// can add and update button, or update live if there's a text change, or lose focus on textbox