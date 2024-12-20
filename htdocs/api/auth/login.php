<?php
// Purpose: Handle user login and generate JWT token
require_once '../config/database.php';
require_once '../utils/jwt.php';
require_once '../utils/response.php';

// Example Login Logic
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Fetch user from DB and validate
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $token = generate_jwt($user['id']);
        send_json_response(200, 'Login successful', ['token' => $token]);
    } else {
        send_json_response(401, 'Invalid credentials');
    }
}
?>

// To develop further: Add rate limiting, two-factor authentication, and logging for failed attempts.
