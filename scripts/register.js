var username = document.getElementById("username");
var password = document.getElementById("password");
function register() {
  var usernameSaved = localStorage.getItem("gt-username");
  var passwordSaved = localStorage.getItem("gt-password");

  if (usernameSaved !== null || passwordSaved !== null) {
    window.location.replace("../pages/404-login.html");
  } else {
    localStorage.setItem(
      "gt-username",
      document.getElementById("username").value
    );
    localStorage.setItem(
      "gt-password",
      document.getElementById("password").value
    );
  }
}
