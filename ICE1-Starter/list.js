// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let list = document.getElementsByTagName("ul")[0];

// ADD NEW ITEM TO END OF LIST
// Create element
let element = document.createElement("li");
// Create text node
let text = document.createTextNode("soy sauce");
// Add text node to element
element.appendChild(text);
// Add element end of list
list.appendChild(element);

// ADD NEW ITEM START OF LIST
// Create element
element = document.createElement("li");
// Create text node
text = document.createTextNode("red pepper");
// Add text node to element
element.appendChild(text);
// Add element to list
list.insertBefore(element, list.firstChild);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
// All <li> elements
let allLiElements = document.getElementsByTagName("li");
// Counter variable
let counter; 
// Loop through elements
for (counter =0; counter < allLiElements.length; counter ++)
{
    // Change class to cool
    allLiElements[counter].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
let h2Element = document.querySelector("h2");
// No. of <li> elements
let numberOfItems = document.getElementsByTagName("li").length;
// Content
h2Element.innerHTML += " - Need to buy: " + numberOfItems + " items";
// Update h2 using innerHTML (not textContent) because it contains markup