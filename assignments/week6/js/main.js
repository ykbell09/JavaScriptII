$(function () {

    // global variables for cleaner functions
    const $shoppingList = $('ol#shopping-list');
    const $purchasedList = $('ol#purchased-list');

    // functions
    const addItem = () => {
        $shoppingList.append(
            '<li>' + $(input).val() + '<input type="checkbox" class="checkbox" /></li>'
        );
        $(input)
            .val('')
            .focus();
    };

    const purchaseItem = () => {
        $('.checkbox').each(function () {
            if (this.checked === true) {
                $(this)
                    .parent()
                    .addClass('completed')
                    .appendTo($purchasedList);
           }          
        });       
    };

    const returnItem = () => {
        $('.checkbox').each(function () {
            if (this.checked === false) {
                $(this)
                    .parent()
                    .removeClass('completed')
                    .appendTo($shoppingList);
            }
        });
    };

    // event handlers
    $('#button').on('click', function () {
        addItem();
    });

    $shoppingList.on('click', function () {
        purchaseItem();
    });

    $purchasedList.on('click', function () {
        returnItem();
    });

});