// Get output article, save as output
const output = document.querySelector(".output")

// Create fragment
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input components
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
  const inputField = document.createElement("input")
  inputField.setAttribute("type", type)
  inputField.classList = classList
  inputField.placeholder = defaultPlaceholderText
  return inputField
}


// Create button component
const buttonFactory = (classList, textContent) => {
  const theButton = document.createElement("button")
  theButton.classList = classList
  theButton.textContent = textContent
  return theButton
}

// Button to variable
const createCardButton = buttonFactory("button--submit", "Create Card")

// Input to variable
const createInputField = inputFieldFactory("input--text", "Enter card text here", "text")




/*
Attach event listener to button
1. Get value of input field
2. Create card component with text inside
*/



createCardButton.addEventListener("click", function () {
  const userEntry = createInputField.value
})


// Create field, attach to fragment
fragment.appendChild(createInputField)

// Create Button, attach to fragment
fragment.appendChild(createCardButton)

// Create card component



output.appendChild(fragment)