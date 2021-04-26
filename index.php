<?php
  include_once 'header.php';
?>

  <h1>WordsGoBrr.com</h1>
  <body>
    <div class="wrapper2">
      <div class="container">
        <form method="GET">
          <textarea class="inputBox" id="textArea" onfocus="clearText(this);" name="Input" rows="8" cols="40">Paste words to go brr...</textarea>
          <br/>
          <input class="readTextButton" onclick="getText(); return false;" id="submitButton" type="button" name="submit" value="Read text!"/>
            <button class="readTextButton" onclick="getTextTTS()" id="swap">Read the text for me!</button>
        </form>

          <button class="readTextButton" onclick="replay()" id="replay">replay</button>
        <br/>

      </div>




      <div class="slidecontainer">
          <p>Display WPM: <span id="wordspermin"></span></p>
          <input type="range" min="200" max="500" step="10" class="slider" id="myRange" value="350" >

        </div>
        <script src="main.js"></script>
        <p id="resultTitle"></p>
        <p id="resultP"></p>
        <p><input type="file"  accept="image/*" name="image" id="file"  onchange="uploadImage(event)" ></p>
        <p><img id="output" width="100px" /></p>
        <br/>
        <br/>

        <form id="ttsSpeeds">
          <legend>Text to Speech reading speed</legend>
          <label><input type="radio" name="ttsOption" value="0.8">Slow</label>
          <label><input type="radio" name="ttsOption" value="1" checked="checked">Normal</label>
          <label><input type="radio" name="ttsOption" value="1.5">Medium</label>
          <label><input type="radio" name="ttsOption" value="2">Fast</label>
        </form>

        <br/>
        <br/>

        <legend>Alternate Themes</legend>
        <select name="bgTheme" id="backgroundTheme">
          <option value="none">none</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="lightgreen">Light Green</option>
          <option value="lightmode">Light Mode</option>
        </select>
        <input onclick="changeTheme()" type="submit" value="Apply">
        <!-- <button onclick="swap()" id="swap">Toggle dark mode</button> -->
      </div>
  <?php
        include_once 'footer.php';
  ?>
