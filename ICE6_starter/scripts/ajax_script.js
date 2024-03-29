// Author: Malsini Masachchige
// File name: ajax_script.js
// Date Created: 2024-02-24
// Desc: Ajax Script which demos the use of jquery get function

console.log('ajax_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the function that uses jquery get
function getAndDisplay(url) {
    $.get(url, function(data) {
        console.log(data);
    });
}
// for each url variable above, call the function in a console.log

console.log(getAndDisplay(url_posts));
console.log(getAndDisplay(url_comments));
console.log(getAndDisplay(url_albums));
console.log(getAndDisplay(url_photos));
console.log(getAndDisplay(url_todos));
console.log(getAndDisplay(url_users));

// from the photos url, put 2 random photos into the img elements in the html
$(function populateRandomPhotos(){
    $.get(url_photos, function(data) {
        let randomPhotos = data.sort(() => Math.random() -0.5).slice(0,2);
        console.log(randomPhotos);
        $('#photo1').attr('src',randomPhotos[0].url);
        $('#photo2').attr('src',randomPhotos[1].url);
       
    });
});
// to see the results, right click on the page and click inspect, and click the console tab

// display the two random photos
