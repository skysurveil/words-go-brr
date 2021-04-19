<?php
  include_once 'header.php';
?>

  <section class="signup-form">
    <h2>Profile</h2>
    <form action="includes/login.inc.php" method="post">
      <input type="text" name="username_email" placeholder="Username/Email...">
      <input type="password" name="pwd" placeholder="Password...">
      <button type="submit" name="submit">Profile</button>
    </form>
  </section>



<?php
  include_once 'footer.php';
?>
