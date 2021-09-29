var caps = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+";
var userOptions = [];
var isCaps;
var isLowercase;
var isNumbers;
var isSymbols;
var passwordLength = 0;

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

function generatePassword() {
    userChoice();
    var passwd = '';
    if(isLowercase){
      
      userOptions=userOptions.concat(lowercase.split(""))
      
    }
    if(isCaps){
      userOptions=userOptions.concat(caps.split(""))
    }
    if(isNumbers){
      useroptions=userOptions.concat(numbers.split(""))
    }
    if(isSymbols){
      userOptions=userOptions.concat(symbols.split(""))
    }
    console.log(userOptions);
    for(var i = 0; i < passwordLength; i++) {
      var char = Math.floor(Math.random() * userOptions.length );
      passwd += userOptions[char]
    }
      
    return passwd;
  }
  
  function gfg_Run() {
    el_down.innerHTML = generateP();
  }

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// TODO: write the generatePassword function
// TODO: ask the user how many characters they want in the password -> use a prompt which will be set to var-> make sure info is correct 
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page..