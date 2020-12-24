var username = document.getElementById("username");
var password = document.getElementById("password");
function login() {
  var usernameSaved = localStorage.getItem("gt-username");
  var passwordSaved = localStorage.getItem("gt-password");

  if (usernameSaved === null || passwordSaved === null) {
    window.location.replace("../pages/404-register.html");
  } else if (
    document.getElementById("username").value !== usernameSaved ||
    document.getElementById("password").value !== passwordSaved
  ) {
    document.getElementById("login").style.fontSize = "50px";
    document.getElementById("login").innerHTML =
      "Sorry, but your username or password is incorrect";
  } else {
    window.location.replace("./pages/home.html");
  }
}
