// Set form to invisible on page load
// window.onload = function() {

//   document.getElementById("getLength").style.display = "none";

// };

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  document.getElementsById("getLength").style.display = "block";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
