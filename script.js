document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for demo purposes
  
  // Clear previous errors
  document.getElementById('emailError').style.display = 'none';
  document.getElementById('passwordError').style.display = 'none';
  
  let valid = true;

  // Validate email
  const emailField = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (!emailField.value.includes('@') || !emailField.value.includes('.')) {
    emailError.textContent = "The email address format is invalid. Please include '@' and a domain.";
    emailError.style.display = 'block';
    emailField.classList.add('invalid');
    valid = false;
  } else {
    emailField.classList.remove('invalid');
  }

  // Validate password
  const passwordField = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    passwordError.style.display = 'block';
    passwordField.classList.add('invalid');
    valid = false;
  } else {
    passwordField.classList.remove('invalid');
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});
