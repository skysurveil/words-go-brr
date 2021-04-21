<?php
  include_once 'header.php';
?>

  <section class="signup-form">
    <h2>Profile</h2>
      <ul>
        <?php
          echo "<li>Username: " . $_SESSION["userName"] . "</li> ";
          echo "<li>Name: " . $_SESSION["firstName"] . " " . $_SESSION["lastName"] . "</li> ";
          echo "<li>Account Creation data: " . $_SESSION["joinDate"] . "</li> ";
          echo "<li>Score: " . $_SESSION["score"] . "</li> ";
         ?>
      </ul>
  </section>



<?php
  include_once 'footer.php';
?>
