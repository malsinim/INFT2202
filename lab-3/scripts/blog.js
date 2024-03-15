// Name: Malsini Masachchige
// ID : 100854161
// FileName: blog.js
// Date: 2024-03-14
// Desc: blog.js is 

// Function to fetch blog posts from JSONPlaceholder API
function fetchBlogPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => posts.slice(0, 20)); // Ensure at least 20 posts
}

// Function to fetch images from Pixabay API
function fetchImagesForPosts() {
    return fetch(`https://pixabay.com/api/?key=42882888-49ba3b7793789196060e06157&q=pink+skies&image_type=photo&width=480`)
        .then(response => response.json())
        .then(data => data.hits);
}

// Function to render blog posts with images
function renderBlogPosts(posts, images) {
    const blogPostsContainer = document.getElementById('blog-posts');
    posts.forEach((post, index) => {
        let card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            
            <div class="card-body">
                <h5 class="card-title">This is a title</h5>
                <img class="card-img-top" src="${images[index % images.length].webformatURL}" alt="Card images">
                <p class="card-text">${post.body}</p>
            </div>
        `;
        card.querySelector('.card-title').style.color = '#F08080';
        card.querySelector('.card-text').style.color = '#555'; 
        card.querySelector('.card-title').style.textAlign = 'center'; 
        card.querySelector('.card-title').style.fontWeight = 'bold'; 
        blogPostsContainer.appendChild(card);
    });
}

// Fetch blog posts and images on page load
window.addEventListener('DOMContentLoaded', async () => {
    try {
        let posts = await fetchBlogPosts();
        let images = await fetchImagesForPosts();
        renderBlogPosts(posts, images);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
