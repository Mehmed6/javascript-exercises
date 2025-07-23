// This code styles a button, label, input, and output elements using JavaScript
// and adds event listeners for interactivity.
// It changes the button's appearance on hover and click, validates input,
// and displays a greeting message or an error message based on the input.

let script = document.getElementById("buttonDom"); //Button element with id "buttonDom"
script.style.background = "#FF0000"; //Button background color
script.style.color = "#FFFFFF"; //Button text color
script.style.padding = "2px"; //Button padding
script.style.border = "2px solid #000000"; //Button border
script.style.borderRadius = "10px"; //Button border radius
script.style.transition = "all 0.5s ease-in-out"; //Button transition effect
script.addEventListener("mouseenter", () => script.style.background ="#2980b9") //Button hover effect
script.addEventListener("mouseleave", () => script.style.background = "#FF0000"); //Button hover effect
script.addEventListener("click", () => { //Button click event
    let name = document.getElementById("inputDom").value
    let output = document.getElementById("outputDom") //Output element with id "outputDom"

    if (name.trim() === "") {
        output.innerHTML = "Please enter your name!!"; //Display message if input is empty
        output.style.color = "red" // Change text color to red
    }
    else {
        output.innerHTML = `Hello ${name}` //Display greeting message
        output.style.color = "green"; // Change text color to green
    }
})

let domLabel = document.getElementById("labelDom"); //Label element with id "labelDom"
domLabel.style.color = "red"; //Label text color
domLabel.style.fontSize = "20px"; //Label font size
domLabel.style.fontWeight = "bold"; //Label font weight
domLabel.style.textAlign = "center"; //Label text alignment
domLabel.style.textDecoration = "underline"; //Label text decoration
domLabel.addEventListener("mouseenter", () => domLabel.style.color = "#2980b9"); //Label hover effect
domLabel.addEventListener("mouseleave", () => domLabel.style.color = "red"); //Label hover effect

let domInput = document.getElementById("inputDom"); //Input element with id "inputDom"
domInput.style.width = "200px"; //Input width
domInput.style.height = "30px"; //Input height
domInput.style.border = "2px solid #000000"; //Input border
domInput.style.borderRadius = "10px"; //Input border radius

let output = document.getElementById("outputDom") //Output element with id "outputDom"
output.style.marginTop = "10px"; //Margin top for output
output.style.color = "green"; //Output text color

let body =document.body // Body element
body.style.fontFamily = "sans-serif"; // Body font family
body.style.backgroundColor = "#f0f0f0"; // Body background color
body.style.textAlign = "center"; // Body text alignment
