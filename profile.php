<?php
  include_once 'header.php';
?>

  <section class="profile">
    <h2>Profile</h2>
      <ul>
        <div class="wrapperProfilePage">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <?php
                echo "<li>Username: " . $_SESSION["userName"] . "</li> ";
              ?>
            </div>
          </div>
              <div class="row">
                <div class="col-sm">
                  <?php
                    echo "<li>Name: " . $_SESSION["firstName"] . " " . $_SESSION["lastName"] . "</li> ";
                  ?>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <?php
                echo "<li>Account Creation date: " . $_SESSION["joinDate"] . "</li> ";
                ?>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <?php
                echo "<li>Score: " . $_SESSION["score"] . "</li> ";
               ?>
             </div>
           </div>
        </div>
      </ul>
  </section>



<?php
  include_once 'footer.php';
?>
