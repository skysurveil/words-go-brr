/* clearText clears the textArea default text when focused */
function clearText(element) {
  element.value = '';
}
/* getText grabs the user text from textArea, saves to var "textInput",
assigns title text and user input to titleElement and resultElement
paragraph elements to display the user's input.*/
function getText() {
  var textInput = document.getElementById("textArea").value;
  console.log(textInput);

  titleElement = document.getElementById("resultTitle");
  titleElement.innerHTML = "Your input:";

  resultElement = document.getElementById("resultP");
  resultElement.innerHTML = textInput;
}
