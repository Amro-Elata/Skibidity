<?php
// Purpose: Middleware to verify authenticated requests
require_once '../auth/verify_token.php';

function authMiddleware() {
    $headers = getallheaders();
    if (!isset($headers['Authorization'])) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized"]);
        exit;
    }
}
?>