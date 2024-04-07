<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../css/style.css" />
  <title>Cards</title>
</head>

<body>
  <?php
  require '../html/navigation.html';
  ?>
  
  <section class="main">
    <div id="search-container">
      <input type="search" id="search-input" placeholder="Search a character's card here." />
      <button id="search">Search</button>
    </div>

    <div class="filter">
      <button class="button-value" onclick="filterSelection('all', this)">
        All
      </button>
      <button class="button-value" onclick="filterSelection('Gryffindor', this)">
        Gryffindor
      </button>
      <button class="button-value" onclick="filterSelection('Slytherin', this)">
        Slytherin
      </button>
      <button class="button-value" onclick="filterSelection('Ravenclaw', this)">
        Ravenclaw
      </button>
      <button class="button-value" onclick="filterSelection('Hufflepuff', this)">
        Hufflepuff
      </button>
    </div>

    <div class="slider">
      <div id="characters-list"></div>

      <button id="next">></button>
      <button id="prev"><</button>
    </div>
  </section>

  <script src="../js/app.js"></script>
  <script src="../js/script-cards.js"></script>
</body>

</html>