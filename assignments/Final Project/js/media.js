// create a project object constructor
function PrintProject(title, image, description, tech) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.tech = tech;
}

// instantiate an array to hold the project objects that will be created
const printProjects = new Array;

// create and push objects to the array
const atBrochure = new PrintProject(
    "Company Brochure",
    [
        "images/media/media_brochure1.png",
        "images/media/media_brochure2.png",
        "images/media/media_brochure_grapic.png",
        "images/media/media_brochure_photo.png"
    ],
    "This brochure was created to the meet client's requests to correlate with their website. Graphics were created using Adobe Photoshop, the provided raw headshot was touched up dititally, and the brochure itself was assembled using Microsoft Publisher via remote computer access.",
    [
        "Adobe Photoshop",
        "Adobe Lightroom",
        "Microsoft Publisher"
    ]
);
const atASL = new PrintProject(
    "Medical ASL handout",
    [
        "images/media/media_asl1.png",
        "images/media/media_asl2.png",
        "images/media/media_asl_graphic.png"
    ],
    "While working with this client, they came up with an idea to create a handout featuring basic ASL signs for medical providers. Working remotely, we improvised a photoshoot with the tools I could find around the house, then manipulated the images using Photoshop to achieve the look the client was going for. Once I learned the signs, took the photos and edited them, we were able to create a pintable flyer using Microsoft Publisher. ",
    [
        "Adobe Photoshop",
        "Adobe Lightroom",
        "Microsoft Publisher",
        "Photos shot with Fujifilm X-E2",
        "iconfinder.com"
    ]
);

printProjects.push(atBrochure, atASL);

// add objects in printProjects array to select menu
const createSelectOptions = () => {
    const $selectMenu = $('#select-menu');

    for (let i in printProjects) {
        const title = printProjects[i].title;
        const $newSelection = $('<option></option>');
        $newSelection
            .html(title)
            .attr('value', i)
            .appendTo($selectMenu);
    } 
};

const getSelectedProject = () => {

    $('select option:selected').each(function () {
        const i = $(this).val();
        const $projectContainer = $('#print-media');

        // if i is the default value
        if (i === 'select') {
            $projectContainer.html('<h4>Please choose a project to display</h4>');
            return;
        };
        
        $projectContainer.html(`<h4>${printProjects[i].title}</h4>
            <img src="${printProjects[i].image[0]}" />

        `);
        console.log(printProjects[i].image[0]);

        
    });

};

$(function () {
    
    createSelectOptions();
    $('#select-menu').selectmenu().on('selectmenuselect', function () {
        getSelectedProject();      
    });


});
















