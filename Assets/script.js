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
  var charArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", "!@#$%^&*?"];
  var charSet = "";
  for (i=0; i<charArray.length; i++) {
    if (chosenArray[i]) {
      charSet += charArray[i];
    }
  }
  function returnChar() {
    // generate random number to choose character from charSet
    var index = Math.floor(Math.random() * charSet.length);
    // select character
    var char = charSet.charAt(index);
    // return character 
    return char;
  }
  function returnPassword(length) {
    var password = ""
    for (i=0; i<length; i++) {
      password += returnChar()
    }
    return password;
  }
return returnPassword(length)
}

function showGetLength() {
  showById("getLength")
}

function logLength() {
  length = document.getElementById("length").value;
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
  chosenArray = [lower, upper, num, special]
  if (lower | upper | num | special) {
    hideById("chooseChars")
    writePassword()
  } else {
    alert("You must select at least one character type")
  }
}

// Add event listeners to buttons
generateBtn.addEventListener("click", showGetLength);
lengthBtn.addEventListener("click", logLength);
charBtn.addEventListener("click", logChars);
// 
