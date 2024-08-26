<?php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$content = $data['content'];
$email = $data['email']; // Use email from localStorage to find user

$query = $conn->prepare("SELECT id FROM users WHERE email = ?");
$query->bind_param("s", $email);
$query->execute();
$result = $query->get_result();
$user = $result->fetch_assoc();

if ($user) {
    $query = $conn->prepare("INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)");
    $query->bind_param("iss", $user['id'], $title, $content);
    if ($query->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to add note']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'User not found']);
}
?>
