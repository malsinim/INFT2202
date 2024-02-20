(function() {

    // Question 1
    // Update the page title to say "YOUR NAME - Test 1"
    document.title = "Malsini Masachchige - Test 1";
    // Update the navbar title to say "YOUR NAME"
    document.querySelector(".navbar-brand").innerHTML = "Malsini Masachchige";

    // Question 2
    // get a reference to the test table
    let testTable = document.getElementById("test-table");
    // get a reference to the second row in the table
    let secondRow = testTable.getElementsByTagName("tr")[1];
    // update the student number to be 100100100
    secondRow.getElementsByTagName("td")[2].innerText = "100100100";


    // Question 3
    // create a table row with your own information
    let newRow = document.createElement("tr");
    // create a table delimeter and set your first name
    let firstName = document.createElement("td");
    firstName.innerText = "Malsini";
    // add it to your table row
    newRow.appendChild(firstName);
    // create a table delimeter and set your last name
    let lastName = document.createElement("td");
    lastName.innerText = "Masachchige";
    // add it to your table row
    newRow.appendChild(lastName);
    // create a table delimeter and set your banner id
    let bannerId = document.createElement("td");
    bannerId.innerText = "100854161";
    // add it to your table row
    newRow.appendChild(bannerId);
    // add your row to the test table body
    testTable.getElementsByTagName("tbody")[0].appendChild(newRow);

    // Question 4
    // remove Alice Bobberts from the table
    let alice = testTable.querySelector("tr:nth-child(3)");
    alice.parentNode.removeChild(alice);

    // Question 5
    // add the .table-info class to your personal row
    newRow.classList.add("table-info");

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    secondRow.classList.remove("table-warning");

    // Question 7
    // change .table-dark to .table-success for John Doe's row
    let john = testTable.querySelector("tr:nth-child(2)");
    john.classList.remove("table-dark");
    john.classList.add("table-success");


    // Question 8
    // use the node pacakge manager to install a new package, holderjs (see https://www.npmjs.com/package/holderjs)
    // include the holder script at the bottom of index.html
    // under the container div holding the test-table, create another container div, and create an image place"holder".

    let imagePlaceholderContainer = document.createElement("div");
    imagePlaceholderContainer.className = "container";
    let imagePlaceholder = document.createElement("img");
    imagePlaceholder.setAttribute("data-src", "holder.js/200x200");
    imagePlaceholder.setAttribute("alt", "Image Placeholder");
    imagePlaceholderContainer.appendChild(imagePlaceholder);
    document.body.appendChild(imagePlaceholderContainer);

})();
