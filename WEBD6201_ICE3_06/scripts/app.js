// change the class of each box, reording the colors 

// get the boxes with jQuery
let boxes = $('.box');
// loop through each box
boxes.each(function(index, box)
{
    // get the class of the current box 
    let currentClass = $(box).attr('class');
    // if the class is red, make it blue
    if (currentClass === 'box red-box'){
        $(box).attr('class', 'box blue-box');
    }
    // if the class is blue, make it green
    else if (currentClass === 'box blue-box'){
        $(box).attr('class', 'box green-box');
    }
    // if the class is  green, make it red
    else if (currentClass === 'box green-box'){
        $(box).attr('class', 'box red-box');
    }
});
// create a button to open the modal
let button =$('<button>Open Modal</button>');
// get the button with JQuery
$('#content').append(button);
// add a click event listner to the button
button.on('click', function(){
    // when the button is clicked,  show the modal 
    $('.lightbox').show();
});


