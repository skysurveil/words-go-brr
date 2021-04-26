<?php
  include_once 'header.php';
?>

  <h1>WordsGoBrr.com</h1>

  <!-- <p class="res1" id="resultTitle">temp</p> -->
  <p class="res1" id="resultP">Output</p>

  <body>
    <div class="wrapper2">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <form method="GET">
          <input class="readTextButton" onclick="getText(); return false;" id="submitButton" type="button" name="submit" value="Play text!"/>

        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <textarea class="inputBox" id="textArea" onfocus="clearText(this);" name="Input" rows="8" cols="40">Paste words to go brr...</textarea>
          <br/>
        <div>
      </div>
          <!-- <input class="readTextButton" onclick="getText(); return false;" id="submitButton" type="button" name="submit" value="Read text!"/>
          <button class="readTextButton" onclick="getTextTTS()" id="swap">Read the text for me!</button> -->
          </form>
          <button class="readTextButton" onclick="replay()" id="replay">replay</button>
        <!-- <br/> -->
      </div>
    </div>
    <button class="readTextButton" onclick="getTextTTS()">Read the text for me!</button>

        <div class="slidecontainer">
          <p class="sliderName" >Display WPM: <span id="wordspermin"></span></p>
          <input type="range" min="200" max="500" step="10" class="slider" id="myRange" value="350" >
        </div>

        <script src="main.js" type="text/javascript"></script>
        <!-- <p id="resultTitle"></p> -->
        <!-- <p id="resultP"></p> -->
        <p class="ocrToolTip" id="ocrTT">Click below to upload an image of your text</p>
        <p><input type="file"  accept="image/*" name="image" id="file"  onchange="uploadImage(event)" ></p>
        <button class="readTextButton" onclick="readOCR()">Read OCR'd Text!</button>
        <button class="readTextButton" onclick="speakOCR()">Read the OCR'd Text for me!</button>
        <p><img id="output" width="200px" /></p>


        <!-- <p><img id="output" width="100px" /></p> -->
        <!-- <br/>
        <br/> -->

        <form id="ttsSpeeds">
          <legend>Text to Speech reading speed</legend>
          <label><input type="radio" name="ttsOption" value="0.8">Slow</label>
          <label><input type="radio" name="ttsOption" value="1" checked="checked">Normal</label>
          <label><input type="radio" name="ttsOption" value="1.5">Medium</label>
          <label><input type="radio" name="ttsOption" value="2">Fast</label>
        </form>

        <!-- <br/>
        <br/> -->

        <legend>Alternate Themes</legend>
        <select name="bgTheme" id="backgroundTheme">
          <option value="none">none</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="lightmode">Light Mode</option>
        </select>
        <input onclick="changeTheme()" type="submit" value="Apply">
        <!-- <button onclick="swap()" id="swap">Toggle dark mode</button> -->
      </div>
  <?php
        include_once 'footer.php';
  ?>
