function login() {
  var passHash = "c53e58e0daa8447efb606f24b6c907bb";

  var pass = prompt("Password", "");
  var hash = CryptoJS.MD5(pass);
  if (passHash.equals(hash)) {
    loggedIn = true;
    window.location.replace("../")
  }
}
