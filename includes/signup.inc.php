<?php

// Check if user got here in the proper way, if not redirect
if(isset($_POST["submit"])){
  $email = $_POST["email"];
  $userName = $_POST["userName"];
  $firstName = $_POST["fName"];
  $lastName = $_POST["lName"];
  $pwd = $_POST["pwd"];
  $pwdR = $_POST["pwdRepeat"];

  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';

  if(emptyInputSignup($email, $userName, $firstName, $lastName, $pwd, $pwdR) !== false){
    header("location: ../signup.php?error=emptyinput");
    exit();
  }
  if(invalidUid($userName) !== false){
    header("location: ../signup.php?error=invaliduid");
    exit();
  }
  if(invalidEmail($email) !== false){
    header("location: ../signup.php?error=invalidemail");
    exit();
  }
  if(pwdMatch($pwd, $pwdR) !== false){
    header("location: ../signup.php?error=passwordsdontmatch");
    exit();
  }
  if(uidExists($conn, $userName, $email) !== false){
    header("location: ../signup.php?error=usernametaken");
    exit();
  }

  createUser($conn, $email, $userName, $firstName, $lastName, $pwd);

}
else{
  header("location: ../signup.php");
  exit();
}
