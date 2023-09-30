// Function to handle the form submission
document.getElementById("submitBtn").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback").value;

  const errorMessage = document.getElementById("error-message");
  errorMessage.innerHTML = ""; // Clear previous error messages

  // Check if any required fields are empty
  if (!firstName || !lastName || !email || !phone || !feedback) {
      errorMessage.innerHTML = "Please fill out all required fields.";
      return;
  }

  // Check if the email address is valid
  if (!isValidEmail(email)) {
      errorMessage.innerHTML = "Please enter a valid email address.";
      return;
  }

  // Prepare the email subject and body
  const subject = encodeURIComponent("Feedback Submission");
  const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nFeedback: ${feedback}`
  );

  // Create a mailto link and open the user's email client
  const mailtoLink = `mailto:urban.vibez.clothing@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;

  // Display a confirmation message to the user
  alert("Thank you for your feedback! Your submission has been sent.");
});

// Function to handle form reset
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("error-message").innerHTML = ""; // Clear error message
  document.getElementById("firstName").value = ""; // Clear first name
  document.getElementById("lastName").value = ""; // Clear last name
  document.getElementById("email").value = ""; // Clear email
  document.getElementById("phone").value = ""; // Clear phone
  document.getElementById("company").value = ""; // Clear company
  document.getElementById("feedback").value = ""; // Clear feedback
});

// Function to validate email format
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Event listeners for opening and closing case pop-up
const newCase = document.getElementById("newcase");
const casePopup = document.getElementById("casePopup");
const closeCase = document.getElementById("closeCase");

newCase.addEventListener("click", () => {
    casePopup.style.display = "block";
});

closeCase.addEventListener("click", () => {
    casePopup.style.display = "none";
});

// Event listeners for opening and closing refund pop-up
const refund = document.getElementById("refund");
const refundPopup = document.getElementById("refundPopup");
const closeRefund = document.getElementById("closeRefund");

refund.addEventListener("click", () => {
    refundPopup.style.display = "block";
});

closeRefund.addEventListener("click", () => {
    refundPopup.style.display = "none";
});

// Event listeners for opening and closing chat pop-up
const startChatBtn = document.getElementById("startChatBtn");
const chatPopup = document.getElementById("chatPopup");
const closeChatBtn = document.getElementById("closeChatBtn");

startChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "block";
});

closeChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "none";
});

// Smooth scrolling for navigation links
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");
Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

// Preloader to hide the loading image after page load
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

// Event listener for search form submission
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const searchForm = document.querySelector('form.d-flex');

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

// Event listener for scroll to top button
const scrollTop = document.querySelector(".scroll-top");
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// Show or hide scroll to top button based on scroll position
window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

