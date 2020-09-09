// Set form to invisible on page load

window.onload = function() {
  hideById("getLength")
  hideById("chooseChars")
}


function hideById(id) {
  document.getElementById(id).style.display = "none";
}

function showById(id) {
  document.getElementById(id).style.display = "block";
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthBtn = document.querySelector("#submitLength");
var charBtn = document.querySelector("#submitChars");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  showById("getLength")
}

function logLength() {
  var length = document.getElementById("length").value;
  if ((length > 7) & (length < 129)) {
    console.log(length)
    hideById("getLength")
    showById("chooseChars")
  } else {
    alert("Length must be no less than 8 and no greater than 128");
    length = undefined;
    document.getElementById("length").value = undefined;
}
}

function logChars() {
  var lower = document.getElementById("lower").checked;
  var upper = document.getElementById("upper").checked;
  var num = document.getElementById("num").checked;
  var special = document.getElementById("special").checked;
  if (lower | upper | num | special) {
    hideById("chooseChars")
    // Do the next thing!
  } else {
    alert("You must select at least one character type")
  }
}

// Add event listeners to buttons
generateBtn.addEventListener("click", writePassword);
lengthBtn.addEventListener("click", logLength);
charBtn.addEventListener("click", logChars);
// 
