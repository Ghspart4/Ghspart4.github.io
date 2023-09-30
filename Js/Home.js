
// Select the header element and all the navigation links except the last one
const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

/* Enable smooth scrolling when a navigation link is clicked */
Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent the default behavior of anchor tags
    e.preventDefault();

    // Get the target section's ID from the href attribute
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    // Scroll to the target section smoothly
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });

    // Hide the mobile navbar 
    navbar.classList.remove("show");
  });
});

/* Preloader to display a loading screen while the website loads */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  // Hide the preloader after a delay (2 seconds in this case)
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

// Search bar functionality
const searchInput = document.getElementById('searchInput'); // Get the search input element
const itemList = document.getElementById('itemList'); // Get the datalist element
const searchForm = document.querySelector('form.d-flex'); // Get the search form

// Add an event listener to the form for the submit event
searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Check if the search input has a valid selected option
    const selectedOption = itemList.querySelector('option[value="' + searchInput.value + '"]');
    if (selectedOption) {
        const link = selectedOption.getAttribute('data-link');
        if (link) {
            // Redirect to the specified link
            window.location.href = link;
        }
    }
});


searchInput.addEventListener('input', function () {
    // This event listener will be triggered as you type in the search input
});

/* Scroll to top button functionality */
const scrollTop = document.querySelector(".scroll-top");

// Add an event listener to the scroll top button for click event
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// Add an event listener to the window for scroll event
window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  // Show the scroll top button when scroll height is greater than 300 pixels
  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    // Hide the scroll top button
    scrollTop.classList.remove("show");
  }
});




