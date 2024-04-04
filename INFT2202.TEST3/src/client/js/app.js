/* 
 * This line should configure the submit handler for your form.
 * It should use the submitAnimalForm method below.
 */
// put your code here
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form[role="search"]');
    form.addEventListener('submit', submitAnimalForm);
  });


/* 
 * This line should get the list of available animals, then render the table when the page loads.
 * It should use the getAnimals and renderAnimalTable methods below.
 */
// put your code here
document.addEventListener("DOMContentLoaded", function () {
    getAnimals();
    renderAnimalTable();
  });  


/* 
 * renderAnimalTable
 * This method should take an array of animals, and display a table of them.
 * If the array is empty, it should hide the table and instead show a message that there are currently no animals.
 * @param Animal[];
 * @return void
 */
function renderAnimalTable(arrayOfAnimals) {
    const container = document.getElementById('retrieve-container');
    container.innerHTML = '';
  
    if (arrayOfAnimals.length === 0) {
      displayMessage('There are currently no animals in the database.', 'retrieve-container');
      return;
    }
  
    const table = document.createElement('table');
    table.className = 'table';
  
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    const typeHeader = document.createElement('th');
    typeHeader.textContent = 'Type';
  
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(typeHeader);
  
    thead.appendChild(headerRow);
  
    arrayOfAnimals.forEach(animal => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = animal.name;
      const typeCell = document.createElement('td');
      typeCell.textContent = animal.type;
  
      row.appendChild(nameCell);
      row.appendChild(typeCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(thead);
    table.appendChild(tbody);
  
    container.appendChild(table);
  }
  

   





/* 
 * submitAnimalForm
 * This method should be what gets called when your form is submitted.
 * It should utilize the fetch methods below.
 * It should hide or show an error message if there is a problem.
 * If it is successful, it should do something to update the list of animals.
 * @param event;
 * @return void
 */
async function submitAnimalForm (event) {
    // put your code here
    event.preventDefault(); 
    await getAnimals();
}

/* 
 * postAnimal
 * This method should use fetch to post a new animal to the server.
 * It should only return a successful response from the server, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event;
 * @return Animal | Error
 */
async function postAnimal (event) {
    // put your code here
}

/* 
 * getAnimal
 * This method should use fetch to get a list of animals from the server.
 * It should only return an array of animals, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event | null;
 * @return Animal[] | Error
 */
async function getAnimals (event) {
    try {
        const response = await fetch('/api/animal', {
          method: 'GET'
        });
    
        if (!response.ok) {
          throw new Error('Could not fetch animals');
        }
    
        const animals = await response.json();
    
        if (animals.length === 0) {
          displayMessage('There are currently no animals in the database.', 'retrieve-container');
        } else {
          renderAnimalTable(animals);
        }
      } catch (error) {
        displayMessage(`Error: ${error.message}`, 'retrieve-container');
      }
}


