
// Select DOM elements
const postForm = document.getElementById('post-form');
const postsList = document.getElementById('posts-list');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');

// Array to store posts in memory
let posts = [];

// Function to render posts on the page
function renderPosts() {
  postsList.innerHTML = '';

  if (posts.length === 0) {
    postsList.innerHTML = '<p>No posts yet. Be the first to write!</p>';
    return;
  }

  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const titleEl = document.createElement('h3');
    titleEl.classList.add('post-title');
    titleEl.textContent = post.title;

    const contentEl = document.createElement('p');
    contentEl.classList.add('post-content');
    contentEl.textContent = post.content;

    postDiv.appendChild(titleEl);
    postDiv.appendChild(contentEl);

    postsList.appendChild(postDiv);
  });
}

// Handle new post submission
postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = postTitleInput.value.trim();
  const content = postContentInput.value.trim();

  if (title === '' || content === '') return;

  // Add new post to posts array
  posts.unshift({ title, content });

  // Clear form inputs
  postTitleInput.value = '';
  postContentInput.value = '';

  // Re-render posts
  renderPosts();
});

// Initial render
renderPosts();