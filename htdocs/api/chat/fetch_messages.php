<?php
// Purpose: Fetch chat messages from the database
require_once '../config/database.php';

$query = "SELECT * FROM messages ORDER BY created_at DESC";
$result = $db->query($query);

$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = $row;
}

echo json_encode($messages);
?>
