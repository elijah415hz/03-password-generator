// Set form to invisible on page load
window.onload = function() {

  document.getElementById("getLength").style.display = "none";

};

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthBtn = document.querySelector("#submitLength")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  document.getElementById("getLength").style.display = "block";
}

function logLength() {
  var length = document.getElementById("length").value;
  if ((length < 8) | (length > 128)) {
    alert("Length must be no less than 8 and no greater than 128");
    length = undefined;
    generatePassword()
  } else {
    console.log(length)
}
}
// Add event listeners to buttons
generateBtn.addEventListener("click", writePassword);
lengthBtn.addEventListener("click", logLength);
// 
