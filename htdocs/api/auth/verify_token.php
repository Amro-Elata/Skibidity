<?php
// Purpose: Verify the JWT token for authenticated requests
require_once '../config/env.php';
require_once '../utils/jwt.php';

$headers = getallheaders();
if (!isset($headers['Authorization'])) {
    http_response_code(401);
    echo json_encode(["error" => "Authorization header missing"]);
    exit;
}

token = str_replace('Bearer ', '', $headers['Authorization']);
try {
    $payload = verifyJWT($token);
    echo json_encode(["valid" => true, "data" => $payload]);
} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(["error" => $e->getMessage()]);
}
?>