
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
        console.log(wordArray[10]);
        console.log("------------------------------");
        var temp = wordArray[10];
        for(var i = 0; i < temp.length; i++){
          console.log(temp[i]);
        }
        console.log(hasWhiteSpace(wordArray[10]));
        console.log("-----------------------------");
        // for(var i=0; i<counter; i++){
        //   console.log(wordArray[i]);
        // }

        readTextFromOCR(wordArray);
      })();

    }

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
    //setTimeout(displayText(print, word), 10000);
    console.log(word);
    print.innerHTML = word;
    await sleep(500);
  }

}

async function readTextFromOCR(textInput){
  //console.log(textblock.split(" ").length);
  // var textblock = textInput;
  // let words = textblock.split(" ");
   print = document.getElementById("resultP");
  for(var i=0; i<textInput.length; i++){
    console.log(textInput[i]);
    var word = textInput[i];
    print.innerHTML = word;
    await sleep(500);
  }

}

function displayText(print, word) {
  console.log(word);
  print.innerHTML = word;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

function isChar(a){
  t = a.toLowerCase();
  if(t === 'a' ||
     t === 'b' ||
     t === 'c' ||
     t === 'd' ||
     t === 'e' ||
     t === 'f' ||
     t === 'g' ||
     t === 'h' ||
     t === 'i' ||
     t === 'j' ||
     t === 'k' ||
     t === 'l' ||
     t === 'm' ||
     t === 'n' ||
     t === 'o' ||
     t === 'p' ||
     t === 'q' ||
     t === 'r' ||
     t === 's' ||
     t === 't' ||
     t === 'u' ||
     t === 'v' ||
     t === 'w' ||
     t === 'x' ||
     t === 'y' ||
     t === 'z' )
     {
       return true;
     }
     else{
       return false;
     }
}

function isDigit(a){
  if(a === '0' ||
     a === '1' ||
     a === '2' ||
     a === '3' ||
     a === '4' ||
     a === '5' ||
     a === '6' ||
     a === '7' ||
     a === '8' ||
     a === '9'
  ){
    return true;
  }
  else{
    return false;
  }
}

function hasWhiteSpace(s) {
  return s.indexOf('\n') >= 0;
}
