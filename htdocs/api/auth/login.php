<?php
include_once '../config/database.php';
include_once '../utils/jwt.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

if (empty($data->email) || empty($data->password)) {
    echo json_encode(["message" => "Email and password are required"]);
    exit;
}

// Validate credentials and generate JWT
// Simulating a successful login
$user = ['id' => 1, 'email' => $data->email];
$jwt = generateJWT($user);

echo json_encode(["message" => "Login successful", "token" => $jwt]);
?>
