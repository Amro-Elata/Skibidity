<?php
// Purpose: Handle creating a new post
require_once '../config/database.php';
require_once '../middleware/auth_middleware.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = authenticate_user();
    $content = $_POST['content'] ?? '';

    if (empty($content)) {
        send_json_response(400, 'Post content cannot be empty');
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO posts (user_id, content) VALUES (?, ?)");
    $stmt->execute([$user_id, $content]);
    send_json_response(201, 'Post created successfully');
}
?>

// To develop further: Add media upload functionality and post visibility options.
