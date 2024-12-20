<?php
// Purpose: Database connection setup
$db = new mysqli("localhost", "root", "", "social_media_app");

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>