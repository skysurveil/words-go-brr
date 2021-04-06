
var slider = document.getElementById("myRange");
var output = document.getElementById("wordspermin");
var wpm = slider.value;//wpm
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
  var textInput = document.getElementById("textArea").value;
  //console.log(textInput);
  //var textblock = textInput;
  titleElement = document.getElementById("resultTitle");
  //titleElement.innerHTML = "Your input:";

  resultElement = document.getElementById("resultP");
  //resultElement.innerHTML = textInput;

  readText(textInput);
}

function uploadImage(event){

    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function(){
      const {createWorker} = Tesseract;
      (async () => {
        const worker = createWorker();
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
        readTextFromOCR(wordArray);
      })();

    }

}

async function readText(textInput){
  var textblock = textInput;
  let words = textblock.split(" ");
  print = document.getElementById("resultP");
  for(var i=0; i<words.length; i++){
    var word = words[i];
    console.log(word);
    print.innerHTML = word;
    var speed = 60000/wpm;// this is the number of milliseconds between each word to give you wpm
    if(word.length < 4){
      await sleep(speed - 15);
    }else if(word.length < 8){
      await sleep(speed);
    }else{
      await sleep(speed + 35);
    }

  }
  recent = words;

}



async function readTextFromOCR(textInput){
   print = document.getElementById("resultP");
  for(var i=0; i<textInput.length; i++){
    console.log(textInput[i]);
    var word = textInput[i];
    print.innerHTML = word;
    var speed = 60000/wpm;// this is the number of milliseconds between each word to give you wpm
    if(word.length < 4){//possible variable speed based on word length
      await sleep(speed - 15);
    }else if(word.length < 8){
      await sleep(speed);
    }else{
      await sleep(speed + 35);
    }
  }
  recent = textInput;

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
    if(word.length < 4){
      await sleep(speed - 15);
    }else if(word.length < 8){
      await sleep(speed);
    }else{
      await sleep(speed + 35);
    }

  }
}

//toggle light and dark theme
function swap(){
  var element = document.body;
  element.classList.toggle("light-mode");
}
