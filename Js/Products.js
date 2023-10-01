// Set the target date and time for the countdown
const targetDate = new Date("2023-10-09T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
   const now = new Date().getTime();
   const timeRemaining = targetDate - now;

   // Calculate days, hours, minutes, and seconds
   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   // Display the countdown timer
   document.getElementById("timer").innerHTML = `
      ${days}D : ${hours}H : ${minutes}M : ${seconds}S
   `;

   // If the countdown is over, display a message and clear the interval
   if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerHTML = "Countdown expired!";
   }
}, 1000); // Update every second

const cartCount = document.querySelector(".cart-count");
let itemCount = 0;

function updateCartCount(count) {
  cartCount.innerText = count;
}

function addToCart() {
  itemCount++;
  updateCartCount(itemCount);

  cartCount.classList.add("cart-count-animation");

  cartCount.addEventListener("transitionend", () => {
    cartCount.classList.remove("cart-count-animation");
  });
}

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

// Search bar functionality
document.addEventListener('DOMContentLoaded', function () {
   // Get references to elements
   const searchForm = document.getElementById('search');
   const searchInput = document.getElementById('search-input');
   const productCards = document.querySelectorAll('.product-card');

   // Add a 'submit' event listener to the search form
   searchForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      const searchTerm = searchInput.value.toLowerCase();

      // Loop through product cards and hide/show based on search term
      productCards.forEach(function (card) {
         const productTitle = card.querySelector('.card-title').textContent.toLowerCase();
         if (productTitle.includes(searchTerm)) {
            card.style.display = 'block';
         } else {
            card.style.display = 'none';
         }
      });
   });
});

/* Scroll Position */

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

// Enables Smooth Scroll when using the scroll feature
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

/* Preloader to indicate that the website is loading */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

// Search bar functionality
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

// Add an event listener to the search input for input event (optional)
searchInput.addEventListener('input', function () {
   
});

/* Scroll to Top Button */
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
