<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Words Go Brr</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css" id="theme">
  </head>
  <script src="main.js" type="text/javascript"></script>
  <script src='https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js'></script>
  <!--This is some stuff for getting into php-->
  <div class="wrapper1">
    <nav>
        <a href="index.php"></a>
        <ul>

          <li><a href= "index.php">Home</a></li>
          <?php
            if(isset($_SESSION["userId"])) {
              echo "<li><a href='profile.php'>Profile</a></li>";
              echo "<li><a href='includes/logout.inc.php'>Log Out</a></li>";
            }
            else{
              echo "<li><a href='signup.php'>Sign Up</a></li>";
              echo "<li><a href='login.php'>Log In</a></li>";
            }
            $_SESSION["currColorTheme"] = "dark";
           ?>
        </ul>
    </nav>
  </div>
