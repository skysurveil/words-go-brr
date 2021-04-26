<?php

function emptyInputSignup($email, $userName, $firstName, $lastName, $pwd, $pwdR){
  $result;
  if(empty($email) || empty($userName) || empty($firstName) || empty($lastName) || empty($pwd) || empty($pwdR)) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function invalidUid($userName){
  $result;
  if(!preg_match("/^[a-zA-Z0-9]*$/", $userName)) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function invalidEmail($email){
  $result;
  if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function pwdMatch($pwd, $pwdR){
  $result;
  if($pwd !== $pwdR) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function uidExists($conn, $userName, $email){
  $sql = "SELECT * FROM User WHERE userUserName = ? OR userEmail = ?;";
  $stmt = mysqli_stmt_init($conn);
  if(!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../signup.php?error=stmtfailed");
    exit();
  }
  mysqli_stmt_bind_param($stmt, "ss", $userName, $email);
  mysqli_stmt_execute($stmt);
  $resultData = mysqli_stmt_get_result($stmt);

  if($row = mysqli_fetch_assoc($resultData)) {
    return $row;
  }
  else{
    $result = false;
    return $result;
  }
  mysqli_stmt_close($stmt);
}

function createUser($conn, $email, $userName, $firstName, $lastName, $pwd) {
  $sql = "INSERT INTO User (userEmail, userUserName, userPassword, userLastName, userFirstName) VALUES (?, ?, ?, ?, ?);";
  $stmt = mysqli_stmt_init($conn);
  if(!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../signup.php?error=stmtfailedoncreate");
    exit();
  }

  $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

  mysqli_stmt_bind_param($stmt, "sssss", $email, $userName, $hashedPwd, $lastName, $firstName);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_close($stmt);
  header("location: ../signup.php?error=none");
  exit();
}

function emptyInputLogin($userName, $pwd){
  $result;
  if(empty($userName) || empty($pwd)) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function loginUser($conn, $userName, $pwd){
  $uidExists = uidExists($conn, $userName, $userName);
  if($uidExists === false){
    header("location: ../login.php?error=wronglogin");
    exit();
  }

  $pwdHashed = $uidExists["userPassword"];
  $checkPwd = password_verify($pwd, $pwdHashed);

  if($checkPwd === false){
    header("location: ../login.php?error=wronglogin");
    exit();
  }
  else if($checkPwd === true) {
    session_start();
    $_SESSION["userId"] = $uidExists["userId"];
    $_SESSION["userName"] = $uidExists["userUserName"];
    $_SESSION["firstName"] = $uidExists["userFirstName"];
    $_SESSION["lastName"] = $uidExists["userLastName"];
    $_SESSION["joinDate"] = $uidExists["userCreateDate"];
    $_SESSION["score"] = $uidExists["userScore"];

    //Increase score by 1 for logging in
    $sql = "UPDATE User SET userScore  = userScore + 1 WHERE userID = " . $_SESSION["userId"] . ";";
    $stmt = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($stmt, $sql)) {
      header("location: ../login.php?error=stmtfailedonIncScore");
      exit();
    }
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: ../index.php?error=none");
    exit();
  }

}
