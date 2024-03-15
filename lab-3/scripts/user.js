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
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

}