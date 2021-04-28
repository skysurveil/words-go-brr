<?php
  include_once 'header.php';
?>

  <section class="signup-form">
    <h2>Login</h2>
    <form action="includes/login.inc.php" method="post">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <input class="signAndLogin" type="text" name="username_email" placeholder="Username/Email...">
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <input class="signAndLogin" type="password" name="pwd" placeholder="Password...">
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <button class="signAndLogin" type="submit" name="submit">Login</button>
          </div>
        </div>
    </form>
    <?php
      if(isset($_GET["error"])) {
        if($_GET["error"] == "emptyinput") {
          echo "<p>Fill in all fields!</p>";
        }
        else if($_GET["error"] == "wronglogin"){
          echo "<p>Incorrect login information!</p>";
        }
      }
     ?>
  </section>



<?php
  include_once 'footer.php';
?>
