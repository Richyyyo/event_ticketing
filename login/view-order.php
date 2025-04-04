<?php
session_start();
require_once 'db_connect.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$user_id = $_SESSION['user_id'];
$sql = "SELECT event_name, event_price, quantity, order_date FROM orders WHERE user_id = $user_id";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Orders - Event Ticketing System</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@200..800&family=Oswald:wght@200..700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4c2f9ad244.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <div class="logo"><h2>ETS</h2></div>
        <div class="nav">
            <ul>
                <li><a href="/login/index.html">Home</a></li>
                <li><a href="/login/events.html">Events</a></li>
                <li><a href="/login/about.html">About</a></li>
                <li><a href="/login/contact.html">Contact</a></li>
                <li><a href="view_orders.php">My Orders</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </div>
    </header>
    <div class="parnt">
        <div class="signup">
            <h2>My Orders</h2>
            <?php
            if ($result->num_rows > 0) {
                echo "<table><tr><th>Event</th><th>Price</th><th>Quantity</th><th>Date</th></tr>";
                while ($row = $result->fetch_assoc()) {
                    echo "<tr><td>{$row['event_name']}</td><td>\${$row['event_price']}</td><td>{$row['quantity']}</td><td>{$row['order_date']}</td></tr>";
                }
                echo "</table>";
            } else {
                echo "<p>No orders found.</p>";
            }
            ?>
        </div>
    </div>
    <footer>
        <p>© Richyy @ 2025</p>
    </footer>
</body>
</html>