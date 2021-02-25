function clearText(element) {
  element.value = '';
}

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
