<?php
include_once '../config/database.php';
include_once '../utils/response.php';

header("Content-Type: application/json");

// Check if the user is authenticated using JWT (auth_middleware.php can be used here)
$data = json_decode(file_get_contents("php://input"));

if (empty($data->content)) {
    echo json_encode(["message" => "Content is required"]);
    exit;
}

// Insert post into the database
// Simulating a successful insert
$post_id = 123;

echo json_encode(["message" => "Post created", "post_id" => $post_id]);
?>
