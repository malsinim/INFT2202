// Name: Malsini Masachchige
// FileName: user.js
// Date: 2024-2-24
// Desc: user.js is the JavaScript file that is used to create a User class, along with a display function to display user details onto the console
// This code was referenced from ICE4, in class exersice 
export class User {

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} username
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    /**
     * @property {function} displayUser 
     * @returns {string}
     */
    displayUser() {
         return `Name: ${this.firstName}${this.lastName}
         Username: ${this.username}
         Email: ${this.email}
         Password: ${this.password}`
    }
}