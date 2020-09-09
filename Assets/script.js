// Set forms to invisible on page load
window.onload = function () {
  hideById("getLength")
  hideById("chooseChars")
}

// Function to hide forms by id
function hideById(id) {
  document.getElementById(id).style.display = "none";
}

// Function to show forms by id
function showById(id) {
  document.getElementById(id).style.display = "block";
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthBtn = document.querySelector("#submitLength");
var charBtn = document.querySelector("#submitChars");

// Show getLength form. Fires on click of generateBtn
function showGetLength() {
  showById("getLength");
  // clear values when rerunning the page without refreshing
  if (document.getElementById("password").value !== "") {
    document.getElementById("password").value = ""
    document.getElementById("password").placeholder = "Your Secure Password"
  }
  if (document.getElementById("length").value !== "") {
    document.getElementById("length").value = "";
  }
  if (document.getElementById("lower").checked ||
      document.getElementById("upper").checked ||
      document.getElementById("num").checked ||
      document.getElementById("special").checked) {
      document.getElementById("lower").checked = false;
      document.getElementById("upper").checked = false;
      document.getElementById("num").checked = false;
      document.getElementById("special").checked = false;
  }
}

// Saves user input of length. Fires on click of lengthBtn
function logLength() {
  length = document.getElementById("length").value;
  // validate user input
  if ((length > 7) & (length < 129)) {
    // hide form 
    hideById("getLength")
    // show next form
    showById("chooseChars")
  } else {
    alert("Length must be between 8 and 128");
    // clear the incorrect
    length = undefined;
    document.getElementById("length").value = "";
  }
}

// Save user selection of character sets. Fires on click of charBtn
function logChars() {
  var lower = document.getElementById("lower").checked;
  var upper = document.getElementById("upper").checked;
  var num = document.getElementById("num").checked;
  var special = document.getElementById("special").checked;
  // assemble an array of the boolean values gathered above
  chosenArray = [lower, upper, num, special]
  // verify the user has clicked at least one checkbox
  if (lower | upper | num | special) {
    hideById("chooseChars")
    writePassword()
  } else {
    alert("You must select at least one character type")
  }
}

// Write password to the #password input
function writePassword() {
  // Call generatePassword to return the password based on user-defined parameters
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  // fill in the password in the password box
  passwordText.value = password;

}

// Generate password with paraments gathered from getLength and getChars
function generatePassword() {
  var charArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", "!@#$%^&*?"];
  charSet = "";
  for (i = 0; i < charArray.length; i++) {
    // Generate character set by filtering with "chosenArray"
    if (chosenArray[i]) {
      charSet += charArray[i];
    }
  }

  // Use returnChar to generate each character
  var password = ""
  // Loop "length" times
  for (i = 0; i < length; i++) {
    // Get character from returnChar
    password += returnChar()
  }
  return password;

}

// Return a single character from charSet
function returnChar() {
  // generate random number to choose character from charSet
  var index = Math.floor(Math.random() * charSet.length);
  // select character
  var char = charSet.charAt(index);
  // return character 
  return char;
}


// Add event listeners to buttons
generateBtn.addEventListener("click", showGetLength);
lengthBtn.addEventListener("click", logLength);
charBtn.addEventListener("click", logChars);

