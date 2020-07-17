// global variables for cleaner functions
const shoppingList = document.querySelector('#shopping-list'); // get shopping list ol
const purchasedList = document.querySelector('#purchased-list'); // get purchased list ol
const checkBoxes = document.getElementsByClassName('checkbox'); // get a list of inputs

const addItem = () => {
    const input = document.querySelector('#input'); // get input field
    const inputItem = input.value; // get input value
    input.value = ''; // clear input field
    input.focus(); // place focus on input so I don't have to keep tabbing/clicking to it :)

    const listItem = document.createElement('li'); // create li element
    const newItem = document.createTextNode(inputItem); // create text node with input value
    const checkBox = document.createElement('input'); // create checkbox input element
    checkBox.type = 'checkbox'; // add type attribute to input element
    checkBox.className = 'checkbox'; // add class attribute to input element

    listItem.appendChild(newItem); // add item to li element
    listItem.appendChild(checkBox); // add checkbox to li element
    shoppingList.appendChild(listItem); // add li to ol (shopping list)
};

const purchaseItem = () => {
    if (checkBoxes.length > 0) { // if there are list items
        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked === true) { // loop though li input for t/f
                const purchasedItem = checkBoxes[i].parentNode; // get li of true input
                purchasedItem.className = 'completed'; // add class attribute
                purchasedList.appendChild(purchasedItem); // add item to purchased list
            }
        };
    }
};

const returnItem = () => {
    if (checkBoxes.length > 0) { // if there are list items
        for (let i = 0; i < checkBoxes.length; i++) {
            const returnedItem = checkBoxes[i].parentNode; // create variable to store li node
            if (checkBoxes[i].checked === false && returnedItem.className == "completed") {
                // loop through input for t/f, and the li has completed class
                returnedItem.removeAttribute('class'); // remove completed class from f input item 
                shoppingList.appendChild(returnedItem); // add returned item back to shopping list
            }
        };
    }
};

document.querySelector('#button').addEventListener("click", () => {
    addItem();
});

document.querySelector('#shopping-list').addEventListener("click", () => {
    purchaseItem();
});

document.querySelector('#purchased-list').addEventListener("click", () => {
    returnItem();
});