<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../css/style.css" />
  <title>Authentification</title>
</head>

<body>

  <?php
  require '../html/navigation.html';
  ?>

  <section class="login-section">

    <div class="box" id="box">

      <div class="form-container sign-up">

        <form id="register-form">

          <h2>Create Account</h2>

          <input type="username" name="username" id="register-username" placeholder="Username" />
          <input type="email" name="email" id="register-email" placeholder="Email" />
          <input type="password" name="password" id="register-password" placeholder="Password" />

          <div id="message"></div>
          
          <button id="submit-register" type="submit">Sign Up</button>

        </form>

      </div>

      <div class="form-container sign-in">

        <form id="login-form">

          <h2>Sign In</h2>

          <input type="email" name="email" id="login-email" placeholder="Email" />
          <input type="password" name="password" id="login-password" placeholder="Password" />

          <button id="submit-login" type="submit">Sign In</button>

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