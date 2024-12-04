
document.getElementById("signin-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(`Email: ${email}, Password: ${password}`);
});

document.getElementById("signup-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
});

document.getElementById("logout-btn")?.addEventListener("click", function() {

  console.log("User logged out");
});
