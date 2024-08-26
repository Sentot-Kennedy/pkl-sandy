<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

$user_id = $_SESSION['user_id'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Handle Add Note
    if (isset($_POST['add'])) {
        $title = $_POST['title'];
        $content = $_POST['content'];

        $stmt = $pdo->prepare('INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)');
        $stmt->execute([$user_id, $title, $content]);
    }

    // Handle Edit Note
    if (isset($_POST['edit'])) {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $content = $_POST['content'];

        $stmt = $pdo->prepare('UPDATE notes SET title = ?, content = ? WHERE id = ? AND user_id = ?');
        $stmt->execute([$title, $content, $id, $user_id]);
    }

    // Handle Delete Note
    if (isset($_POST['delete'])) {
        $id = $_POST['id'];

        $stmt = $pdo->prepare('DELETE FROM notes WHERE id = ? AND user_id = ?');
        $stmt->execute([$id, $user_id]);
    }
}

// Fetch all notes for the user
$stmt = $pdo->prepare('SELECT * FROM notes WHERE user_id = ? ORDER BY created_at DESC');
$stmt->execute([$user_id]);
$notes = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes</title>
    <link rel="stylesheet" href="styles.css"> <!-- Add your CSS file here -->
</head>
<body>
    <h1>Notes</h1>
    <p>Welcome, <?php echo $_SESSION['email']; ?>! <a href="auth/logout.php">Logout</a></p>

    <h2>Add Note</h2>
    <form method="POST">
        <input type="text" name="title" placeholder="Title" required>
        <textarea name="content" placeholder="Content" required></textarea>
        <button type="submit" name="add">Add Note</button>
    </form>

    <h2>Your Notes</h2>
    <?php foreach ($notes as $note): ?>
        <div class="note">
            <h3><?php echo htmlspecialchars($note['title']); ?></h3>
            <p><?php echo nl2br(htmlspecialchars($note['content'])); ?></p>
            <form method="POST" style="display:inline;">
                <input type="hidden" name="id" value="<?php echo $note['id']; ?>">
                <button type="submit" name="edit">Edit</button>
                <button type="submit" name="delete">Delete</button>
            </form>
        </div>
    <?php endforeach; ?>
</body>
</html>
