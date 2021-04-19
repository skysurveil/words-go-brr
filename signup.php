<?php
  include_once 'header.php';
?>

  <section class="signup-form">
    <h2>Sign Up</h2>
    <form action="includes/signup.inc.php" method="post">
      <input type="text" name="email" placeholder="Email...">
      <input type="text" name="userName" placeholder="User name...">
      <input type="text" name="fName" placeholder="First name...">
      <input type="text" name="lName" placeholder="Last name...">
      <input type="password" name="pwd" placeholder="Password...">
      <input type="password" name="pwdRepeat" placeholder="Repeat Password...">
      <button type="submit" name="submit">Sign Up</button>
    </form>
    <?php
      if(isset($_GET["error"])) {
        if($_GET["error"] == "emptyinput") {
          echo "<p>Fill in all fields!</p>";
        }
        else if($_GET["error"] == "invaliduid"){
          echo "<p>Choose a proper username!</p>";
        }
        else if($_GET["error"] == "invalidemail"){
          echo "<p>Choose a proper email!</p>";
        }
        else if($_GET["error"] == "passwordsdontmatch"){
          echo "<p>Passwords did not match!</p>";
        }
        // I should really serparate these so they know if its username or email thats already taken.
        else if($_GET["error"] == "usernametaken"){
          echo "<p>Username or email already taken choose another!</p>";
        }
        else if($_GET["error"] == "stmtfailed"){
          echo "<p>Something went wrong, and stop trying to sql inject me!</p>";
        }
        else if($_GET["error"] == "stmtfailedoncreate"){
          echo "<p>Something went wrong, try again or contact support!</p>";
        }
        else if($_GET["error"] == "none"){
          echo "<p>You have signed up!</p>";
        }
      }
     ?>
  </section>

<?php
  include_once 'footer.php';
?>
