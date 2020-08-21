window.onload = () => {
    document.querySelector('#fetch').addEventListener('click', fetchData, false);   
};

// global variables
let $petList;
let pets;
let $loadingImage;
let $quoteArea;

// function called on button press -- prepares for new data by clearing old data restoring the 'hide' class; shows a loading gif
const fetchData = () => {
    $petList = $('#pet-list');
    $quoteArea = $('#quote');

    $petList.html('').addClass('hide');
    $quoteArea.addClass('hide');
    
    let $mainContainer = $('#main-container');
    $loadingImage = $('<img>');
    $loadingImage
        .attr('src', 'images/ajax-loader.gif')
        .css({
            'padding': '50'
        })
        .appendTo($mainContainer);

    $.getScript('https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=displayData&tags=doggos&format=json');
}

const displayData = (data) => {

    setTimeout(() => {

        $loadingImage.remove();

        pets = data.items;
        for (let i in pets) {
            const petImage = pets[i].media.m;
            const $newImg = $('<img>');
            $newImg
                .attr('src', petImage)
                .attr('id', i)
                .addClass('pet')
                .appendTo($petList)
                .on('click', function () {
                    getQuotes();
                    moveImage(i);
                });
        }

        $petList.removeClass('hide');

    }, 1800);
};

const getQuotes = () => {

    $quoteArea = $('#quote');
    let quotes;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

            quotes = JSON.parse(xhr.responseText);
            let i = Math.floor(Math.random(quotes.length) * quotes.length);

            $quoteArea.removeClass('hide').html(`
                <blockquote>"${quotes[i].text}"</blockquote>
                <footer id="author">by: ${quotes[i].author}</footer>
                `);

        }
    };

    let url = './quotes.json';
    xhr.open("get", url, true);
    xhr.send();

};

const moveImage = (i) => {
    const $movedImage = $(`#${i}`);
    const $direction = $(':checked').attr('id')

    if ($direction == 'front') {
        $movedImage.prependTo($petList);
    }
    if ($direction == 'back') {
        $movedImage.appendTo($petList);
    }
};