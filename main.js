/* clearText clears the textArea default text when focused */
function clearText(element) {
  element.value = '';
}
/* getText grabs the user text from textArea, saves to var "textInput",
assigns title text and user input to titleElement and resultElement
paragraph elements to display the user's input.*/
function getText() {
  var textInput = document.getElementById("textArea").value;
  //console.log(textInput);
  //var textblock = textInput;
  titleElement = document.getElementById("resultTitle");
  //titleElement.innerHTML = "Your input:";

  resultElement = document.getElementById("resultP");
  //resultElement.innerHTML = textInput;
  readText(textInput);
}


function readText(textInput){
  //console.log(textblock.split(" ").length);
  var textblock = textInput;
  let words = textblock.split(" ");
  print = document.getElementById("resultP");
  for(var i=0; i<words.length; i++){
    //console.log(words[i]);
    //print.innerHTML = words[i];
    var word = words[i];
    setTimeout(displayText(print, word), 1000);
  }

}

function displayText(print, word) {
  console.log(word);
  print.innerHTML = word;
}
