<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>My Profile</title>
</head>

<body>
    <?php
    require '../html/navigation.html';
    ?>

    <section class="user">
        <div class="user-profile">
            <div class="left">
                <img src="../images/user-pfp.jpeg" alt="user">
                <div id="user-info">
                    <h2>Username</h2>
                    <p>Email</p>
                </div>
                <button id="sign-out">Sign Out</button>
            </div>
            <div class="right">
                <div class="owned-cards">
                    <h2>Owned Cards</h2>
                    <div class="cards-list">
                    </div>
                </div>
            </div>
        </div>
    </section>



    <script src="../js/app.js"></script>
    <script src="../js/user.js"></script>
</body>

</html>