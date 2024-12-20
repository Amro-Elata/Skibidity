<?php
// Purpose: Delete a post from the database
require_once '../config/database.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['post_id'])) {
    http_response_code(400);
    echo json_encode(["error" => "Post ID is required"]);
    exit;
}

$query = $db->prepare("DELETE FROM posts WHERE id = ?");
$query->bind_param("i", $data['post_id']);
$query->execute();

echo json_encode(["success" => true]);
?>