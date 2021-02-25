/* clearText clears the textArea default text when focused */
function clearText(element) {
  element.value = '';
}
/* getText grabs the user text from textArea, saves to var "textInput",
creates two p elements, one for title, one for user input. Assigns title
and user input to the p elements, appends p elements to the HTML body
to display the user's inputted text.*/
function getText() {
  var textInput = document.getElementById("textArea").value;
  console.log(textInput);

  resultTitle = document.createElement('p');
  resultTitle.innerHTML = "Your input:";

  resultP = document.createElement('p');
  resultP.innerHTML = textInput;

  document.body.appendChild(resultTitle);
  document.body.appendChild(resultP);
}
