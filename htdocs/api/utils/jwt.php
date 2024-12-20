<?php
// Purpose: JSON Web Token (JWT) functions
require_once '../config/env.php';

function createJWT($payload) {
    $header = json_encode(["alg" => "HS256", "typ" => "JWT"]);
    $base64Header = base64_encode($header);
    $base64Payload = base64_encode(json_encode($payload));
    $signature = hash_hmac("sha256", "$base64Header.$base64Payload", JWT_SECRET, true);
    $base64Signature = base64_encode($signature);
    return "$base64Header.$base64Payload.$base64Signature";
}

function verifyJWT($token) {
    list($header, $payload, $signature) = explode('.', $token);
    $expectedSignature = base64_encode(hash_hmac("sha256", "$header.$payload", JWT_SECRET, true));
    if ($signature !== $expectedSignature) {
        throw new Exception("Invalid token");
    }
    return json_decode(base64_decode($payload), true);
}
?>