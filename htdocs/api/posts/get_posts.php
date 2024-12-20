<?php
// Purpose: Fetch all posts from the database
require_once '../config/database.php';

$query = "SELECT * FROM posts ORDER BY created_at DESC";
$result = $db->query($query);

$posts = [];
while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
}

echo json_encode($posts);
?>
