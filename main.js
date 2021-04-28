
var slider = document.getElementById("myRange");
var output = document.getElementById("wordspermin");
var wpm = slider.value;//wpm
var ttsSpeed; /* speed cannot be assigned by radio button here because this is loaded before HTML is done*
Instead, it is assigned at the beginning of speakText */
var currentTheme = "";
var OCR_Array;
var PLAYING_SOMETHING = false;


console.log(wpm);
output.innerHTML = slider.value;//for printing on the screen
var recent;


/* clearText clears the textArea default text when focused */
function clearText(element) {
  element.value = '';
}
/* getText grabs the user text from textArea, saves to var "textInput",
assigns title text and user input to titleElement and resultElement
paragraph elements to display the user's input.*/
function getText() {
  if(PLAYING_SOMETHING){

  }
  else{
    var textInput = document.getElementById("textArea").value;
    //console.log(textInput);
    //var textblock = textInput;
    // titleElement = document.getElementById("resultTitle");
    // //titleElement.innerHTML = "Your input:";
    //
    // resultElement = document.getElementById("resultP");
    //resultElement.innerHTML = textInput;

    readText(textInput);
  }
}

/* getTextTTS is the getText function for the text to speech functionality (See above getText()) */
function getTextTTS() {
  if(PLAYING_SOMETHING){
    // do nothing
  }
  else {
    var ttsInput = document.getElementById("textArea").value;
    //titleElement = document.getElementById("resultTitle");
    //resultElement = document.getElementById("resultP");
    // Calls speakText function with the user inputted text.
    speakText(ttsInput);
  }
}

function uploadImage(event){

    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    var holdMsg = document.getElementById("ocrTT");
    holdMsg.innerHTML = "Please wait while OCR works on your image";
    image.onload = function(){

      const {createWorker} = Tesseract;

      // Trying to add a logger.
      const worker = createWorker({
          logger: m => console.log(m), // Add logger here
      });

      (async () => {
        //const worker = createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');

        const{ data: {text} } = await worker.recognize(image);
        console.log(text);
        var wordArray = [];
        temp = "";
        counter = 0;
        for(var i=0; i<text.length; i++){
          if(text[i] === " " || i === text.length-1 || text[i] === '\n'){
            // if its a space we want to push the current word to our array of words. and reset the temp word
              counter++;
              wordArray.push(temp);
              temp = "";
          }
          else{
              temp = temp + text[i];
          }
        }
        await worker.terminate();

        OCR_Array = wordArray;
        holdMsg.innerHTML = "OCR complete, click an option below";
        //readTextFromOCR(wordArray);
      })();
    }
}

function readOCR(){
  //console.log("in read OCR");
  if(PLAYING_SOMETHING){
    //dont replay 10billion times
  }
  else {
    readTextFromOCR(OCR_Array);
  }

}

function speakOCR() {
  //console.log("in TTS OCR");
   speakText(OCR_Array);
}

async function readText(textInput){
  PLAYING_SOMETHING = true;
  var textblock = textInput;
  let words = textblock.split(" ");
  print = document.getElementById("resultP");
  for(var i=0; i<words.length; i++){
    var word = words[i];
    print.innerHTML = word;
    // Speed is time that we want to pause
    var speed = 60000/wpm;// this is the number of milliseconds between each word to give you wpm
    var shortWord = speed * .05; // 10% of speed
    var longWord = speed * .4; // 40% of speed

    if(word.length < 4){
      await sleep(speed - shortWord); // 15
    }else if(word.length < 8){
      await sleep(speed);
    }else{
      await sleep(speed + longWord); // 35
    }
  }
  recent = words;
  PLAYING_SOMETHING = false;
}



async function readTextFromOCR(textInput){
  PLAYING_SOMETHING = true;
  print = document.getElementById("resultP");
  for(var i=0; i<textInput.length; i++){
    console.log(textInput[i]);
    var word = textInput[i];
    print.innerHTML = word;
    var speed = 60000/wpm;// this is the number of milliseconds between each word to give you wpm
    var shortWord = speed * .05; // 10% of speed
    var longWord = speed * .4; // 40% of speed

    if(word.length < 4){
      await sleep(speed - shortWord); // 15
    }else if(word.length < 8){
      await sleep(speed);
    }else{
      await sleep(speed + longWord); // 35
    }
  }
  recent = textInput;
  PLAYING_SOMETHING = false;
}

function displayText(print, word) {
  console.log(word);
  print.innerHTML = word;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

function hasWhiteSpace(s) {
  return s.indexOf('\n') >= 0;
  readText();
}


//getting the up todate wpm
slider.oninput = function(){
  output.innerHTML = this.value;
  wpm = this.value;
}

async function replay(){
  for(var i=0; i<recent.length; i++){
    var word = recent[i];
    console.log(word);
    print.innerHTML = word;
    var speed = 60000/wpm;// this is the number of milliseconds between each word to give you wpm
    var shortWord = speed * .05; // 10% of speed
    var longWord = speed * .4; // 40% of speed

    if(word.length < 4){
      await sleep(speed - shortWord); // 15
    }else if(word.length < 8){
      await sleep(speed);
    }else{
      await sleep(speed + longWord); // 35
    }
  }
}

//toggle light and dark theme
// function swap(){
//   var element = document.body;
//   element.classList.toggle("light-mode");
// }

function changeTheme(){
  var colorTheme = document.getElementById("backgroundTheme").value;
  if (colorTheme == 'blue'){
    currTheme = "blue";
    changeToBlue();
  }
  else if(colorTheme == 'lightmode'){
    changeToLight();
  }
  else if (colorTheme == 'red'){
    currTheme = "red";
    changeToRed();
  }
  else if (colorTheme == 'green'){
    currTheme = "green";
    changeToGreen();
  }
  else if (colorTheme == 'purple'){
    currTheme = "purple";
    changeToPurple();
  }
  else {
    var element = document.body;
    element.classList.remove("blue-mode", "red-mode", "green-mode", "purple-mode");
    currTheme = "";
    changeToDark();
  }
}

function currentTheme(){
  //var currTheme = ' <?php echo $currColorTheme; ?> ' ;
  console.log(currTheme);
  if(currTheme == "blue"){
    changeToBlue();
  }
  else if(currTheme == "red"){
    changeToRed();
  }
  else if(currTheme == "green"){
    changeToGreen();
  }
  else if(currTheme == "purple"){
    changeToPurple();
  }
  else{
    changeToDark();
  }
}

function changeToLight(){
  var element = document.body;
  element.classList.remove("red-mode", "green-mode", "dark-mode", "purple-mode", "blue-mode");
  element.classList.toggle("light-mode");
}

function changeToBlue(){
  var element = document.body;
  element.classList.remove("red-mode", "green-mode", "dark-mode", "purple-mode", "light-mode");
  element.classList.toggle("blue-mode");
}

function changeToRed() {
  var element = document.body;
  element.classList.remove("blue-mode", "green-mode", "dark-mode", "purple-mode", "light-mode");
  element.classList.toggle("red-mode");
}

function changeToGreen() {
  var element = document.body;
  element.classList.remove("blue-mode", "red-mode", "dark-mode", "purple-mode", "light-mode");
  element.classList.toggle("green-mode");
}

function changeToPurple() {
  var element = document.body;
  element.classList.remove("blue-mode", "red-mode", "dark-mode", "green-mode", "light-mode");
  element.classList.toggle("purple-mode");
}

function changeToDark() {
  var element = document.body;
  element.classList.remove("blue-mode", "red-mode", "green-mode", "purple-mode", "light-mode");
  element.classList.toggle("dark-mode");
}

// test function to utilize potential TTS solution
// function speak(){
//   var msg = new SpeechSynthesisUtterance();
//   msg.text = "Testing the text to speech";
//   window.speechSynthesis.speak(msg);
// }

// speakText is the text to speech function that takes user input from getTextTTS
// as a parameter and handles TTS functionality.
async function speakText(ttsInput){
  PLAYING_SOMETHING = true;
  ttsSpeed = document.querySelector('input[name="ttsOption"]:checked').value; // assigns speed from selected radio button.
  ttsString = ttsInput.toString();
  var msg = new SpeechSynthesisUtterance();
  msg.rate = ttsSpeed;
  msg.text = ttsString;
  window.speechSynthesis.speak(msg);
  PLAYING_SOMETHING = false;
}
