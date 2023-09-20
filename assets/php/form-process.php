<?php
// Replace with your actual MySQL connection details
$host = "localhost";
$username = "root";
$password = "root";
$database = "getsee_design";

// Create a MySQL connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Insert data into MySQL database
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Form data has been successfully submitted.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the MySQL connection
$conn->close();
?>
