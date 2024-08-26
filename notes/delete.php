<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: auth/login.php");
    exit();
}

include 'db.php';

if (isset($_GET['id'])) {
    $note_id = $_GET['id'];

    $stmt = $pdo->prepare("DELETE FROM notes WHERE id = ? AND user_id = ?");
    if ($stmt->execute([$note_id, $_SESSION['user_id']])) {
        header("Location: index.php");
    } else {
        echo "Error: Could not delete note.";
    }
} else {
    header("Location: index.php");
}
?>
