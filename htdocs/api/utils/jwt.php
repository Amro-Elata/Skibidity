<?php
use \Firebase\JWT\JWT;

function generateJWT($user) {
    $key = "your_secret_key";
    $issuedAt = time();
    $expirationTime = $issuedAt + 3600;  // JWT valid for 1 hour from the issued time
    $payload = array(
        "iat" => $issuedAt,
        "exp" => $expirationTime,
        "user" => $user
    );

    // Specify the algorithm (e.g., HS256)
    $algorithm = 'HS256';

    // Encode the payload with the key and algorithm
    return JWT::encode($payload, $key, $algorithm);
}
?>
