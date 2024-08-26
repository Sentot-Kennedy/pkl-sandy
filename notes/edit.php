<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: auth/login.php");
    exit();
}

include 'db.php';

if (isset($_GET['id'])) {
    $note_id = $_GET['id'];

    $stmt = $pdo->prepare("SELECT * FROM notes WHERE id = ? AND user_id = ?");
    $stmt->execute([$note_id, $_SESSION['user_id']]);
    $note = $stmt->fetch();

    if (!$note) {
        echo "Note not found.";
        exit();
    }
} else {
    header("Location: index.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];

    $stmt = $pdo->prepare("UPDATE notes SET title = ?, content = ? WHERE id = ? AND user_id = ?");
    if ($stmt->execute([$title, $content, $note_id, $_SESSION['user_id']])) {
        header("Location: index.php");
    } else {
        echo "Error: Could not update note.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Note</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <section class="edit form-container">
        <form action="edit.php?id=<?php echo $note_id; ?>" method="POST">
            <h1>Edit Note</h1>
            <input type="text" name="title" value="<?php echo htmlspecialchars($note['title']); ?>" required>
            <textarea name="content" required><?php echo htmlspecialchars($note['content']); ?></textarea>
            <div class="button_group">
                <button type="button" onclick="location.href='index.php'">Cancel</button>
                <button type="submit">Update</button>
            </div>
        </form>
    </section>
</body>
</html>
