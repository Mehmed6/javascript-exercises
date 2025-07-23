// This code creates a simple counter that uses localStorage to persist the count across page reloads.
// It initializes the counter value from localStorage or sets it to 0 if not present.
// It provides buttons to increment and decrement the counter value,
// and updates the localStorage with the new value whenever the buttons are clicked.

let countWL = document.querySelector("#valueWL") // Counter value element with id "valueWL"
const incrementButtonWL = document.querySelector("#incrementWL") // Increment button element with id "incrementWL"
const decrementButtonWL = document.querySelector("#decrementWL") // Decrement button element with id "decrementWL"

// Initialize the counter value from localStorage or set it to 0 if not present
if (!sessionStorage.getItem("session-active")) {
    localStorage.setItem("counter", "0")
    sessionStorage.setItem("session-active", "true")
}

countWL.innerText = localStorage.getItem("counter"); // Set the initial counter value from localStorage

// Function to increment the counter value by 1 and update localStorage
const incrementWL = () => {
    countWL.innerText = +countWL.innerText + 1;
    localStorage.setItem("counter", countWL.innerText);
}
// Function to decrement the counter value by 1 and update localStorage
const decrementWL = () => {
    countWL.innerText = +countWL.innerText - 1;
    localStorage.setItem("counter", countWL.innerText)
}
incrementButtonWL.addEventListener("click", incrementWL) // Add event listener for increment button
decrementButtonWL.addEventListener("click", decrementWL) // Add event listener for decrement button


const body = document.body // Body element
body.style.fontFamily = "Times New Roman"; // Set the font family for the body
body.style.textAlign = "center"; // Center align the text in the body
body.style.backgroundColor = "#f0f0f0"; // Set the background color for the body
body.style.marginTop = "50px"; // Add a top margin to the body for spacing
countWL.style.fontSize = "50px"; // Set the font size for the counter value element