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
  const tableMessage = document.getElementById('table-message');
  const tableBody = document.getElementById('animal-table-body');

  // Clear previous content
  tableBody.innerHTML = '';

  if (arrayOfAnimals.length === 0) {
      tableMessage.innerHTML = 'There are currently no animals in the database.';
      return;
  }

  tableMessage.innerHTML = ''; 

  arrayOfAnimals.forEach(animal => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${animal.name}</td>
          <td>${animal.heads}</td>
          <td>${animal.legs}</td>
          <td>${animal.sound}</td>
      `;
      tableBody.appendChild(row);
  });
};

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
    // retrieve form data
    const form = event.target;
    const formData = new FormData(form);
    const animalData = {
        name: formData.get('name'),
        heads: parseInt(formData.get('heads')),
        legs: parseInt(formData.get('legs')),
        sound: formData.get('sound')
    };

    try {
        // validate input data
        if (!animalData.name || !animalData.heads || !animalData.legs || !animalData.sound) {
            throw new Error('All fields are required');
        }

        // Make a fetch call to add the animal
        const response = await postAnimal(animalData);

        // If successful, refresh the table
        getAnimals();
    } catch (error) {
        // Display error message
        displayMessage(`Error: ${error.message}`, 'create-container');
    }
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
async function postAnimal (animalData) {
    // put your code here
    try {
      const response = await fetch('/api/animal', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(animalData)
      });

      if (!response.ok) {
          throw new Error('Failed to add the animal');
      }

      return response.json();
  } catch (error) {
      throw new Error(`Error: ${error.message}`);
  }
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
async function getAnimals() {
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



