// Name: Malsini Masachchige
// FileName: app.js
// Date: 2021-02-11
// Desc: app.js is the javaScript file that is used to change/add/remove elements witin the DOM

// Inject text into Home page, add DOMContentLoaded eventLister to ensure that no null values are being used 
document.addEventListener("DOMContentLoaded", function() {
    let welcomeMsg = "Hi! welcome to my website :D My name is Malsini and this is a website I created as a course requirement for INFT2202 - Web Development CSS! I had tons of fun creating this website and I hope you will like it! Thank you for visiting my site Feel free to check all the pages Ive included in the nav bar :D";
    
    document.getElementById("welcomeMsg").innerHTML = welcomeMsg;
}); 

// Inject texts into the Products/Interests page, add DOMContentLoaded eventLister to ensure that no null values are being used 
document.addEventListener("DOMContentLoaded", function() {  
    let tvShowTitle =  "Modern Family"
    document.getElementById("tvShowTitle").innerHTML = tvShowTitle;

    let tvShowDesc = "Modern Family is my all time favourite tv show. I love how it makes me laugh and I consider it my comfort show. Modern Family is a comedy series that views three different families through the lens of a documentary filmmaker and his crew. Its such a funny, heartwarming and at times emotional show.";
    document.getElementById("tvShowDesc").innerHTML = tvShowDesc;

    let movieTitle ="Train to Busan";
    document.getElementById("movieTitle").innerHTML = movieTitle;
    
    let movieDesc="Train to Busan is a korean thriller/zombie movie that tells a story of a man, his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea. This movie also holds a special place in my heart because its unlike any other zombie movie I've seen, one thing that makes this movie stand out is how it makes you care deeply about the characters.";
    document.getElementById("movieDesc").innerHTML = movieDesc;

    let songTitle ="Come inside of my heart";
    document.getElementById("songTitle").innerHTML = songTitle;
    let songDesc ="I have tons of favourite songs but Come inside of my heart is one song that I could never get tired of hearing. Its so catchy and makes your mood a thousand times better trust me :) The genre is rock indie and I can't get enough of it. It goes ~ come inside of my heart if you're looking for answers, look at the stars come a little bit faster ~";
    document.getElementById("songDesc").innerHTML= songDesc;
    

});

// Inject texts into the Services page, add DOMContentLoaded eventLister to ensure that no null values are being used 

document.addEventListener("DOMContentLoaded", function() {

    let customProgrammingTitle = "Custom Programming";
    document.getElementById("customProgrammingTitle").innerHTML = customProgrammingTitle;

    let customProgrammingDesc = "I specialize in creating custom made software solutions to meet your specific business needs. Whether it's building web applications, desktop software, I use C#, Java, Python and many other programming languages to help boost your productivity.";
    document.getElementById("customProgrammingDesc").innerHTML = customProgrammingDesc;
    
    let webDesignTitle = "Web Design";
    document.getElementById("webDesignTitle").innerHTML = webDesignTitle;

    let webDesignDesc="Need a stunning website that not only looks great but also gets results? I'm here to turn your vision into reality with the use of popular web development programming languages such as HTML, PHP, CSS, and JavaScript. By designing effective and user-friendly interfaces, I'll create a website that engages your audience and convert visitors into customers.";
    document.getElementById("webDesignDesc").innerHTML = webDesignDesc;
 
    let testingTitle = "Software Testing";
    document.getElementById("testingTitle").innerHTML = testingTitle;

    let testingDesc = "Quality is key when it comes to software. I specialize in rigorous testing methodologies to ensure that your applications are bug-free and perform flawlessly under various conditions. With the use of Unit Testing (Selenium) and NUnit Testing, I'll help you deliver reliable software solutions to your clients";
    document.getElementById("testingDesc").innerHTML = testingDesc;

});


// Inject texts into About Us page
document.addEventListener("DOMContentLoaded", function() {
    let aboutMe = "About Me";
    document.getElementById("aboutMe").innerHTML = aboutMe;

    let aboutMeDesc = "Hi, My name is Malsini Masachchige and I'm an international student. My home country is SriLanka and I'm 21 years old!. I'm a 2nd year student in the Computer Programming and Analysis program and so far its been quite an experience. I will say though, its been great, I've met so many wonderful people and learned a lot of new things. Fun fact about me is that I'm scared of fire :D I've never lit a match by myself haha (a bit embarassing at my grown age).";
    document.getElementById("aboutMeDesc").innerHTML = aboutMeDesc;

    let halloween = "My love for Halloween";
    document.getElementById("halloween").innerHTML = halloween;

    let halloweenDesc ="I absolutely love halloween, its so much fun. I love dressing up and decorating the house, staying up late and watching horror movies with snacks is one thing me and my cousins always do. Oh and giving out candy to kids who show up trick or treating makes me feel like I'm a really nice person.";
    document.getElementById("halloweenDesc").innerHTML = halloweenDesc;

    let cats = "My love for Cats";
    document.getElementById("cats").innerHTML = cats;

    let catsDesc ="Cats are gods gift to mankind. They are so adorable and majestic, I miss my cat back home (her name is kitty and she's the best). They are independent, Can lower your stress levels, give you cute attacks 99% of the time and also they are great companions. Cats are so underrated I don't know why.";
    document.getElementById("catsDesc").innerHTML = catsDesc;

});

// Change the Product link text to Interests, add DOMContentLoaded eventLister to ensure that no null values are being used 
document.addEventListener("DOMContentLoaded", function() {
    // Find the element with the text "Products"
    let productsLink = document.querySelector('.navbar-nav .nav-item:nth-child(2) .nav-link');

    // Change the text content of the link to "Interests"
    productsLink.textContent = "Interests";
});


// Human Resources Link, add DOMContentLoaded eventLister to ensure that no null values are being used 
document.addEventListener("DOMContentLoaded", function() {
    // Create a new list item 
    let newNavItem = document.createElement("li");
    newNavItem.classList.add("nav-item");

    // Create a new link element 
    let newLink = document.createElement("a");
    newLink.classList.add("nav-link");
    newLink.href = "human-resources.html"; // Set the href attribute
    newLink.innerHTML = '<i class="fa solid fa-user"></i> Human Resources'; 

    // Append the new link to the new list item
    newNavItem.appendChild(newLink);

    // Find the position to insert the new link (after "About Us" link)
    let aboutUsLink = document.querySelector('.navbar-nav .nav-item:nth-child(4)');
    if (aboutUsLink) {
        // Insert the new list item before the "Contact Us" link
        aboutUsLink.parentNode.insertBefore(newNavItem, aboutUsLink.nextSibling);
    }
});

// Add a navbar to the bottom of the page, which has the copy right text
document.addEventListener("DOMContentLoaded", function() {
    // Create the bottom navbar
    let navbarBottom = document.createElement("nav");
    navbarBottom.classList.add("navbar", "fixed-bottom", "bg-light", "navbar-expand-sm");

    // Create a container
    let container = document.createElement("div");
    container.classList.add("container");

    // Create a flex container to center the text horizontally
    // Referenced https://getbootstrap.com/docs/4.2/utilities/flex/
    let flexContainer = document.createElement("div");
    flexContainer.classList.add("d-flex", "justify-content-center", "w-100");


    // Create the copyright statement
    let copyrightText = document.createElement("span");
    copyrightText.classList.add("navbar-text", "text-darkgrey");
    let currentYear = new Date().getFullYear();
    copyrightText.textContent ="Copyright " + currentYear + ", Malsini Masachchige";
    copyrightText.style.fontSize = "16px";

    // Append elements
    flexContainer.appendChild(copyrightText);
    container.appendChild(flexContainer);
    navbarBottom.appendChild(container);
    

    // Append the navbar to the body
    document.body.appendChild(navbarBottom);
   
});


// Contact form DOM 
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    // Event listener for form submission
    contactForm.addEventListener("submit", function(event) {
        // Prevent form submission 
        // Referenced https://bito.ai/resources/javascript-prevent-form-submit-javascript-explained/
        event.preventDefault(); 

        // Referenced https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
        // Retrieve form data
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const contactNumber = formData.get("contactNumber");
        const email = formData.get("email");
        const message = formData.get("message");

        // Referenced https://www.shecodes.io/athena/16067-how-to-use-console-log-in-javascript#:~:text=You%20can%20use%20console.,of%20variables%20in%20your%20code.
        // Output user information to the console
        console.log("Name:", name);
        console.log("Contact Number:", contactNumber);
        console.log("Email Address:", email);
        console.log("Short Message:", message);

        // Start a timer to redirect the user after 3 seconds
        // Referenced https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
        setTimeout(function() {
            window.location.href = "index.html"; 
        }, 3000);
    });
});