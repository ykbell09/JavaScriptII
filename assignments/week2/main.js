const addItem = () => {
    const shoppingList = document.querySelector('#shopping-list'); // get ol
    let input = document.querySelector('#input'); // target input field
    const inputItem = input.value; // get input value
    input.value = ''; // clear input field

    const listItem = document.createElement('li'); // create li element
    const newItem = document.createTextNode(inputItem);
    const checkBox = document.createElement('input'); // create checkbox element
    checkBox.type = 'checkbox'; // add type attribute to input element
    checkBox.className = 'checkbox'; // add class attribute to input element

    listItem.appendChild(newItem); // add item to li element
    listItem.appendChild(checkBox); // add checkbox to li element
    shoppingList.appendChild(listItem); // add li to ol (shopping list)
};

const getPurchasedItem = () => {
    const checkBoxes = document.getElementsByClassName('checkbox'); // get a list of inputs
    if (checkBoxes.length > 0) {
        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked === true) { // loop though input for t/f
                const purchasedItem = checkBoxes[i].parentNode; // get li of true inputs
                purchasedItem.className = 'completed'; // add class attribute
                const purchasedList = document.querySelector('#purchased-list'); // get purchased ol
                purchasedList.appendChild(purchasedItem); // add item to purchased list
            }
        };
    }
};

const returnItem = () => {
    const checkBoxes = document.getElementsByClassName('checkbox');
    if (checkBoxes.length > 0) {
        for (let i = 0; i < checkBoxes.length; i++) {
            const returnedItem = checkBoxes[i].parentNode; // variable to store li node
            if (checkBoxes[i].checked === false && returnedItem.className == "completed") {
                // if the box is checked, and the item has completed class
                returnedItem.removeAttribute('class'); // remove completed class 
                const shoppingList = document.querySelector('#shopping-list'); // get shopping list ol
                shoppingList.appendChild(returnedItem); // add returned item back to shopping list
            }
        }
    }

};

document.querySelector('#button').addEventListener("click", () => {
    addItem();
});

document.querySelector('#shopping-list').addEventListener("click", () => {
    getPurchasedItem();
});

document.querySelector('#purchased-list').addEventListener("click", () => {
    returnItem();
});