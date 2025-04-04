<?php
$host = 'localhost';
$dbname = 'event_ticketing';
$username = 'root'; // Default XAMPP/WAMP username
$password = '';     // Default XAMPP/WAMP password (empty)

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>