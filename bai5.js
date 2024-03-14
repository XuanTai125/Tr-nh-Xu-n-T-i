function togglePassword() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
      if (confirm("Do you want to show password?")) {
        passwordInput.type = "text";
        document.querySelector('.show-password').textContent = 'Hide';
      }
    } else {
      passwordInput.type = "password";
      document.querySelector('.show-password').textContent = 'Show';
    }
  }
