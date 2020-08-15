// simulation of data being received as JSON from a database
const webProjects = [
    {
        "image": "images/thumb_ahills.png",
        "title": "The A-Hills",
        "details": "A home gym with a database for problem setting."
    },
    {
        "image": "images/thumb_abilityTogetherLogo.png",
        "title": "Ability Together",
        "details": "A custom Wordpress site for a public speaker and advocate."
    }
];

const mediaProjects = [
    {
        "image": "images/photo_peger.jpg",
        "title": "Company Portrait",
        "details": "Retro yearbook themed photo editing."
    },
    {
        "image": "images/thumb_asl1.png",
        "title": "Medical ASL Brochure",
        "details": "A print media project for Ability Together."
    },
    {
        "image": "images/thumb_brochure.png",
        "title": "Company Brochure",
        "details": "A print media company brochure for Ability Together."
    },
    {
        "image": "images/thumb_kobra.png",
        "title": "Kobra Flash Modifier",
        "details": "Video scripting and recorded product demonstration."
    }
]

const displayProjectPreview = (section, data, i) => {
    return $(section).find('.preview-card').attr('id', `${i}`).html(`
        <img src="${data[i].image}" />
        <div>
            <h4>${data[i].title}</h4>
            <p>${data[i].details}</p>
        </div>
    `)
};

const rightScroll = (section, data) => {
    const index = $(section).find('.preview-card').attr('id');
    let i = parseInt(index) + 1;
    if (i === data.length) i = 0;
    displayProjectPreview(section, data, i);
};

const leftScroll = (section, data) => {
    const index = $(section).find('.preview-card').attr('id');
    let i = parseInt(index) - 1;
    if (i < 0) i = data.length - 1;
    displayProjectPreview(section, data, i);
};

$(function () {
    displayProjectPreview('#section-web', webProjects, 0);
    displayProjectPreview('#section-media', mediaProjects, 0);

    // arrow scroll event listeners
    $('#section-web').find('.right-arrow').on('click', function () {
        rightScroll('#section-web', webProjects);
    });  

    $('#section-web').find('.left-arrow').on('click', function () {
        leftScroll('#section-web', webProjects);
    });

    $('#section-media').find('.right-arrow').on('click', function () {
        rightScroll('#section-media', mediaProjects);
    });
    
    $('#section-media').find('.left-arrow').on('click', function () {
        leftScroll('#section-media', mediaProjects);
    });

    $('.headshot').on('mouseover', function () {
        $(this).animate({
            width: 405,
            padding: 15,
        }, 100, function () {
                $(this).animate({
                    width: 395,
                    padding: 25
                }, 300, function () {
                    $(this).animate({
                        width: 400,
                        padding: 20
                    }, 200);
                });
        });
    });

});