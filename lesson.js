let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.getElementById("header");

    if (currentScroll > lastScrollTop) {
        // Scroll down
        header.style.top = "-90px"; // Hide the header when scrolling down
    } else {
        // Scroll up
        header.style.top = "0"; // Show the header when scrolling up
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function toggleFullscreen(img) {
    img.classList.toggle('fullscreen-image');
}


var matchPositions = [];
var currentMatchIndex = -1;

function search() {
    // Clear previous search results
    clearHighlights();

    // Get the search input value
    var searchQuery = document.getElementById('search-bar').value.trim().toLowerCase();
    // Get the lesson content container
    var lessonContent = document.querySelector('.lesson-content');
    // Get all the elements within the lesson content
    var elements = lessonContent.querySelectorAll('*');

    // Iterate over each element to search for the query
    elements.forEach(function(element) {
        // Check if the element contains text content
        if (element.innerText.toLowerCase().includes(searchQuery)) {
            // Add highlight class to the matching element
            element.classList.add('highlight');
            // Store the position of the matching element
            matchPositions.push(element.getBoundingClientRect().top);
        }
    });

    // Reset current match index
    currentMatchIndex = -1;

    // Show/hide navigation buttons based on the number of matches
    var upButton = document.getElementById('upButton');
    var downButton = document.getElementById('downButton');
    if (matchPositions.length > 1) {
        upButton.style.display = 'inline-block';
        downButton.style.display = 'inline-block';
    } else {
        upButton.style.display = 'none';
        downButton.style.display = 'none';
    }

    // Scroll to the first match if available
    navigate('down');
}