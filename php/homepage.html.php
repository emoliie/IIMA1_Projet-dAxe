<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../css/style.css" />
  <title>Harry Potter</title>
</head>

<body>

  <?php
  require '../html/navigation.html';
  ?>

  <section class="homepage">
    <div class="container">
      <h1>The Universe of Harry Potter</h1>
      <p>
        Embark on a magical journey with Wizarding Wonders, your go-to
        destination for all things Harry Potter card collection and exchange!
        This year, our mission is to bring you a unique platform where
        enthusiasts from around the world can register, delve into the
        wizarding universe, and 'unwrap' virtual booster packs of enchanting
        Harry Potter cards. Join us in building a vibrant community where the
        magic of collecting and trading these spellbinding cards comes to
        life.
      </p>
      <div class="buttons">
        <a href="cards.html"><button>Discover</button></a>
        <a href="login.html"><button>Join</button></a>
      </div>
    </div>
    <img id="homepage-img" src="../images/harry-potter.png" alt="harry potter" />

    <button id="open-popup"><i class="fa-solid fa-hat-wizard" id="button-icon"></i></button>
  </section>

  <div class="popup">
    <button class="close-btn">&times;</button>
    <h3>Popup Title</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>

  <script src="../js/app.js"></script>
  <script src="https://kit.fontawesome.com/5a6fe80c93.js" crossorigin="anonymous"></script>
</body>

</html>