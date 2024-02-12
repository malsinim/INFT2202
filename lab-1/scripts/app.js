document.addEventListener("DOMContentLoaded", function() {
    let welcomeMsg = "Hi! welcome to my website :D My name is Malsini and this is a website I created as a course requirement for INFT2202 - Web Development CSS! I had tons of fun creating this website and I hope you will like it! Thank you for visiting my site Feel free to check all the pages Ive included in the nav bar :D";
    
    document.getElementById("welcomeMsg").innerHTML = welcomeMsg;
}); 


document.addEventListener("DOMContentLoaded", function() {  
    let tvShowTitle =  "Modern Family"
    document.getElementById("tvShowTitle").innerHTML = tvShowTitle;

    let tvShowDesc = "Modern Family is my all time favourite tv show. I love how it makes me laugh and I consider it my comfort show. Modern Family is a comedy series that views three different families through the lens of a documentary filmmaker and his crew. Its such a funny, heartwarming and at times emotional show.";
    document.getElementById("tvShowDesc").innerHTML = tvShowDesc;

    let movieTitle ="Train to Busan";
    document.getElementById("movieTitle").innerHTML = movieTitle;
    
    let movieDesc="Train to Busan is a korean thriller/zombie movie that tells a story of a man, his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea. This movie also holds a special place in my heart because its uninke any other zombie movie I've seen, one thing that makes this movie stand out is how it makes you care deeply about the characters.";
    document.getElementById("movieDesc").innerHTML = movieDesc;

    let songTitle ="Come inside of my heart";
    document.getElementById("songTitle").innerHTML = songTitle;
    let songDesc ="I have tons of favourite songs but Come inside of my heart is one song that I could never get tired of hearing. Its so catchy and makes your mood a 10000x better trust me :) It comes under rock indie as a genre and I can't get enough of it. It goes ~ come inside of my heart if you're looking for answers, look at the stars come a little bit faster ~";
    document.getElementById("songDesc").innerHTML= songDesc;
    

});

document.addEventListener("DOMContentLoaded", function() {
    // Find the =element with the text "Products"
    let productsLink = document.querySelector('.navbar-nav .nav-item:nth-child(2) .nav-link');

    // Change the text content of the link to "Interests"
    productsLink.textContent = "Interests";
});