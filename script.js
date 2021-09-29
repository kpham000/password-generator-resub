// Assignment Code (given)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (given)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (given)
generateBtn.addEventListener("click", writePassword);