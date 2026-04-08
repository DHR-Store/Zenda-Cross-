function toggleSearchBar() {
    let searchContainer = document.getElementById('searchContainer');
    // Toggle the visibility of the search bar
    if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
        searchContainer.style.display = 'block';
    } else {
        searchContainer.style.display = 'none';
    }
}

// Function to filter apps based on search input
function searchApps() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let appCards = document.getElementsByClassName('app-card');

    for (let i = 0; i < appCards.length; i++) {
        let appName = appCards[i].getElementsByTagName('h3')[0].textContent.toLowerCase();

        if (appName.indexOf(input) > -1) {
            appCards[i].style.display = ''; // Show the app card
        } else {
            appCards[i].style.display = 'none'; // Hide the app card
        }
    }
}

 // Get the modal
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("modalClose");

    // Add click event to screenshots
    document.querySelectorAll(".screenshot").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImage.src = this.src;
        });
    });

    // Close the modal when clicking the "x"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the image
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });





function toggleDropdown(menuId) {
            // Hide all dropdowns first
            document.querySelectorAll('.dropdown').forEach(menu => menu.style.display = 'none');

            // Toggle the clicked dropdown menu
            const menu = document.getElementById(menuId);
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        }

        // Close dropdown if clicked outside
        document.addEventListener('click', function (event) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(menu => {
                if (!menu.contains(event.target) && !menu.previousElementSibling.contains(event.target)) {
                    menu.style.display = 'none';
                }
            });
        });
        
        
        
        


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");
    const submitButton = document.getElementById("submit-rating");

    let selectedRating = 0;

    // Function to highlight stars based on rating
    function highlightStars(rating) {
        stars.forEach((star) => {
            if (parseInt(star.dataset.value) <= rating) {
                star.classList.add("active"); // Highlight star as active (golden)
            } else {
                star.classList.remove("active"); // Remove active class (gray)
            }
        });
    }

    // Load saved rating from localStorage and display it
    const savedRating = localStorage.getItem("savedRating");
    if (savedRating) {
        selectedRating = parseInt(savedRating);
        ratingValue.value = selectedRating;
        highlightStars(selectedRating); // Highlight saved rating stars
    }

    // Add click event to each star
    stars.forEach((star) => {
        star.addEventListener("click", function () {
            selectedRating = parseInt(this.dataset.value);
            ratingValue.value = selectedRating;
            highlightStars(selectedRating); // Update golden stars based on selection
        });
    });

    // Add click event to submit button
    submitButton.addEventListener("click", function () {
        if (selectedRating > 0) {
            alert(`Thank you for rating ${selectedRating} stars!`);
            // Save the selected rating in localStorage
            localStorage.setItem("savedRating", selectedRating);
            highlightStars(selectedRating); // Ensure golden stars after submission
        } else {
            alert("Please select a star rating before submitting.");
        }
    });
});


async function searchData() {
            const query = document.getElementById('searchQuery').value.toLowerCase();
            const resultsDiv = document.getElementById('results');

            // Fetch the source HTML
            const response = await fetch('app2.html');
            const text = await response.text();

            // Parse the HTML using DOMParser
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const data = doc.querySelector('#data').innerText;

            // Filter and display results
            if (data.toLowerCase().includes(query)) {
                resultsDiv.innerText = data;
            } else {
                resultsDiv.innerText = 'No results found!';
            }
        }
