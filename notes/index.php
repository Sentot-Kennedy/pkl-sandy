<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: auth/login.php");
    exit();
}

include 'db.php';

$stmt = $pdo->prepare("SELECT * FROM notes WHERE user_id = ?");
$stmt->execute([$_SESSION['user_id']]);
$notes = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <section class="home">
        <div class="notes-box">
            <div class="notes-header">
                <h1>List Note</h1>
                <div class="user_info">
                    <p><?php echo $_SESSION['email']; ?></p>
                    <a href=" auth/logout.php" style="color: #1da1f2; text-decoration: none;">Logout</a>
                </div>
                <button onclick="location.href='add.php'">Add Note</button>
            </div>
            <div class="notes-container">
                <?php foreach ($notes as $note): ?>
                <div class="note_list">
                    <div class="head">
                        <h3><?php echo htmlspecialchars($note['title']); ?></h3>
                        <div class="button_group">
                            <button onclick="location.href='edit.php?id=<?php echo $note['id']; ?>'">Edit</button>
                            <button onclick="location.href='delete.php?id=<?php echo $note['id']; ?>'">Delete</button>
                        </div>
                    </div>
                    <p><?php echo htmlspecialchars($note['content']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</body>
</html>
