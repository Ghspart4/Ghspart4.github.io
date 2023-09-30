/*  js code for Scroll Position  */

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

/* enables the Smooth Scroll when using the scroll feature  */
Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    navbar.classList.remove("show");
  });
});

/* Preloader which tells the user the website is loading rather than showing a blank page  */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

// search bar
// Get references to elements
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const searchForm = document.querySelector('form.d-flex');

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

/*  Scroll Top  */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});