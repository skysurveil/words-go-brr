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


async function readText(textInput){
  //console.log(textblock.split(" ").length);
  var textblock = textInput;
  let words = textblock.split(" ");
  print = document.getElementById("resultP");
  for(var i=0; i<words.length; i++){
    //console.log(words[i]);
    //print.innerHTML = words[i];
    var word = words[i];
    print.innerHTML = word;
    var delay = 250; // default delay length
    wordLength = word.length;
    delayCalculated = wordLength * 50;
    await sleep(delayCalculated);
    //setTimeout(displayText(print, word), 1000);
    //setTimeout(displayText, 1000, print, word);
    //setTimeout(function() { displayText(print, word);}, 500);
    //setTimeout(function() { print.innerHTML = word;}, 1000);
  }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function displayText(print, word) {
  console.log(word);
  print.innerHTML = word;
}

function toggleLightMode() {
  var bodyElement = document.body;
  bodyElement.classList.toggle("light-mode-body");
}
