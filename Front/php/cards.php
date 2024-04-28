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
      <button class="button-value" onclick="filterSelection('all')">
        All
      </button>
      <button class="button-value" onclick="filterSelection('Gryffindor')">
        Gryffindor
      </button>
      <button class="button-value" onclick="filterSelection('Slytherin')">
        Slytherin
      </button>
      <button class="button-value" onclick="filterSelection('Ravenclaw')">
        Ravenclaw
      </button>
      <button class="button-value" onclick="filterSelection('Hufflepuff')">
        Hufflepuff
      </button>
    </div>

    <div class="slider">
      <div id="characters-list"></div>

      <button id="next">></button>
      <button id="prev"><</button>
    </div>
  </section>

  <div id="card-popup">
    <button class="close-btn">&times;</button>
    <div id="character-info"></div>
  </div>

  <script src="../js/app.js"></script>
  <script src="../js/script-cards.js"></script>
</body>

</html>