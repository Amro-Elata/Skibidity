<?php
// Purpose: Handle user registration
require_once '../config/database.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Hash password and insert into DB
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");

    try {
        $stmt->execute([$email, $hashed_password]);
        send_json_response(201, 'User registered successfully');
    } catch (PDOException $e) {
        send_json_response(400, 'Email already in use');
    }
}
?>

// To develop further: Add email verification and input sanitization.
