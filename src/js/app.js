// Malsini Masachchige 
// Test 2


(function() {
    
    // Question 0
    // Use npm to install jquery and holder.js
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot
    
    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // Question 1
    // Update the page title to say "YOUR NAME - Test 2"
    $('title').text('Malsini Masachchige - Test 2');
    // Update the navbar title to say "YOUR NAME"
    $('.navbar-brand').text('Malsini Masachchige');
    // Replace the footer text with a copyright symbol and the year, using the Date object.
    let currentYear = new Date().getFullYear();
    $('.footer .container').html('&copy; ' + currentYear);

    // Question 2
    // get a reference to the test table
    let testTable = $('#test-table');
    // get a reference to the second row in the table
    let secondRow = testTable.find('tbody tr:eq(1)');
    // update the student number to be 100100100
    secondRow.find('td:eq(2)').text('100100100');

    // Question 3
    // create a table row with your own information
    let newRow = $('<tr></tr>');
    // create a table delimeter and set your first name
    let firstName = $('<td>Malsini</td>');
    // add it to your table row
    newRow.append(firstName);
    // create a table delimeter and set your last name
    let lastName = $('<td>Masachchige</td>');
    // add it to your table row
    newRow.append(lastName);
    // create a table delimeter and set your banner id
    let studentNumber = $('<td>100854161</td>');
    // add it to your table row
    newRow.append(studentNumber);
    // add your row to the test table body
    testTable.find('tbody').append(newRow);

    // Question 4
    // remove Alice Bobberts from the table
    $('#test-table tbody tr:nth-child(3)').remove();

    // Question 5
    // add the .table-info class to your personal row
    newRow.addClass('table-info');
    
    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    testTable.find('tbody tr:eq(0)').removeClass('table-warning');
    
    // Question 7
    // change .table-dark to .table-success for John Doe's row
    testTable.find('tbody tr:eq(1)').removeClass('table-dark').addClass('table-success');
    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    let newContainer = $('<div class="container"></div>').appendTo('main');
    // In that container, add a new bootstrap card. This should take several steps.
    let newCard = $('<div class="card"></div>').appendTo(newContainer);
    // // make a card, make an image, append the image to the card
    let cardImage = $('<img>').addClass('card-img-top').appendTo(newCard);
    // // make a card body, append it to the card
    let cardBody = $('<div class="card-body"></div>').appendTo(newCard);
    // // make a heading, a paragraph, a link, append them to the card-body
    $('<h5 class="card-title">Malsini Masachchige</h5>').appendTo(cardBody);
    $("<p class='card-text'>Hi my name is Malsini and Im 21 years old, I'm in the 3 year Computer Programming course.</p>").appendTo(cardBody);
    $('<a href="#" class="btn btn-primary">Heres a link</a>').appendTo(cardBody);
    // // append the card to the new container
    // use holder.js to render the image in the card
    cardImage.attr('src', 'holder.js/200x150');
    // add a heading with your name in the card body, and a sentence or two about yourself.

})();
