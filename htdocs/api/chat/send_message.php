<?php
// Purpose: Send a chat message and store it in the database
require_once '../config/database.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['message'])) {
    http_response_code(400);
    echo json_encode(["error" => "Message is required"]);
    exit;
}

$query = $db->prepare("INSERT INTO messages (content, created_at) VALUES (?, NOW())");
$query->bind_param("s", $data['message']);
$query->execute();

echo json_encode(["success" => true]);
?>