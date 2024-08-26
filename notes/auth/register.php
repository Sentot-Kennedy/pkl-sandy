<?php
include '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];

    if ($password === $cpassword) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare("INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)");
        if ($stmt->execute([$firstname, $lastname, $email, $hashed_password])) {
            header("Location: login.php");
        } else {
            echo "Error: Could not register.";
        }
    } else {
        echo "Passwords do not match.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="../styles.css">
</head> 
<body>
    <section class="register form-container">
        <form action="/auth/register.php" method="POST">
            <h1>Register</h1>
            <input type="text" name="firstname" placeholder="First Name" required>
            <input type="text" name="lastname" placeholder="Last Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="password" name="cpassword" placeholder="Confirm Password" required>
            <div class="button_group">
                <button type="submit">Register</button>
            </div>
            <p class="switch_link"><a href="/auth/login.php">Already have an account? Login here.</a></p>
        </form>
    </section>
</body>
</html>
