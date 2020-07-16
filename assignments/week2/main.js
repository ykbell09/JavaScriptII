document.querySelector('#button').addEventListener("click", () => {
    addItem();
});

const addItem = () => {
    const shoppingList = document.querySelector('#shopping-list'); // get ol
    let input = document.querySelector('#input'); // target input field
    const inputItem = input.value; // get input value
    input.value = ''; // clear input field

    const listItem = document.createElement('li'); // create li element
    const newItem = document.createTextNode(inputItem);
    const checkBox = document.createElement('input'); // create checkbox element
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';

    listItem.appendChild(newItem); // add item to li element
    listItem.appendChild(checkBox); // add checkbox to li element
    shoppingList.appendChild(listItem); // add li to ol (shopping list)
};

const purchaseItem = () => {

};