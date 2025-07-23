// This script implements a simple counter functionality
// that allows users to increment and decrement a value displayed on the page.
// It uses JavaScript to manipulate the DOM and add event listeners for button clicks.
// The counter value is displayed in an element with the id "value",
// and the increment and decrement buttons are identified by their respective ids "increment" and "decrement".
// The counter value is updated dynamically when the buttons are clicked,
// and the page is styled for better user experience.

let count = document.querySelector("#value") // Counter value element with id "value"
const incrementButton = document.querySelector("#increment") // Increment button element with id "increment"
const decrementButton = document.querySelector("#decrement") // Decrement button element with id "decrement"

// Increment the counter value by 1 when the increment button is clicked
incrementButton.addEventListener("click", ()=> count.innerText = +count.innerText + 1)
// Decrement the counter value by 1 when the decrement button is clicked
decrementButton.addEventListener("click", () => count.innerText = +count.innerText - 1)

const body = document.body // Body element
body.style.fontFamily = "Times New Roman"; // Set the font family for the body
body.style.textAlign = "center"; // Center align the text in the body
body.style.backgroundColor = "#f0f0f0"; // Set the background color for the body
body.style.marginTop = "50px"; // Add a top margin to the body for spacing
count.style.fontSize = "50px"; // Set the font size for the counter value element