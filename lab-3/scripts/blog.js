// Name: Malsini Masachchige
// ID : 100854161
// FileName: blog.js
// Date: 2024-03-14
// Desc: blog.js is 

// Function to fetch blog posts from JSONPlaceholder API
function fetchBlogPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        // Get the first 20 posts 
        .then(posts => posts.slice(0, 20)); 
}

// Function to fetch images from Pixabay API
function fetchImagesForPosts() {
    return fetch(`https://pixabay.com/api/?key=42882888-49ba3b7793789196060e06157&q=pink+skies&image_type=photo&width=480`)
        .then(response => response.json())
        .then(data => data.hits);
}


// Function to render blog posts with images 
// Referenced previous ICE's
function renderBlogPosts(posts, images) {
    const blogPostsContainer = document.getElementById('blog-posts');
    posts.forEach((post, index) => {
        let card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            <div class="card-header">
                <h2>Card Title</h2>
                <img src="${images[index % images.length].webformatURL}" alt="Card image">
                <span class="tag tag-teal">Tag</span>
                <p>${post.body}</p>
                
            </div>
        `;
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
