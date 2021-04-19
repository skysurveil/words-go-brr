<?php

$serverName = "aws-wordsgobrr.cyr2voe364yh.us-east-2.rds.amazonaws.com";
$dBUserName = "admin";
$dBPassWord = "HangryMonkey45";
$dBName = "wordsGoBrr";
$port = 3306;

$conn = mysqli_connect($serverName, $dBUserName, $dBPassWord, $dBName, $port);

if (!$conn){
  die("Connection failed: " . mysqli_connect_error());
}
