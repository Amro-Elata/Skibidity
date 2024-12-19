<?php
use PHPUnit\Framework\TestCase;

class AuthTest extends TestCase {
    public function testLoginSuccess() {
        $data = json_decode('{"email":"test@example.com", "password":"password123"}');
        $response = login($data);  // Replace with the actual function or mock as needed
        $this->assertStringContainsString("Login successful", $response);
    }
}
function login($data) {
    // Example logic for login
    if ($data->email == 'test@example.com' && $data->password == 'password123') {
        return json_encode(["message" => "Login successful"]);
    }
    return json_encode(["message" => "Invalid credentials"]);
}
?>