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


  <section class="login-section">
    <div class="box" id="box">
      <div class="form-container sign-up">
        <form>
          <h2>Create Account</h2>
          <input type="username" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div class="form-container sign-in">
        <form>
          <h2>Sign In</h2>
          <input type="username" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>

      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h2>Welcome Back wizard!</h2>
            <p>Enter your personal details to enter this wizarding world.</p>
            <button class="hidden" id="login">Sign In</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h2>Hello, wizard!</h2>
            <p>Register with your personal details to enter this wizarding world.</p>
            <button class="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>

  <script src="../js/app.js"></script>
  <script src="../js/login.js"></script>

</body>

</html>