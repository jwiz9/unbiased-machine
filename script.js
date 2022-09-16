// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// 1. Prompts the user 
  var userInput = window.prompt("Choose the length of your password (any number between 8 to 128 characters)")

  var passwordLength = parseInt(userInput)
// 1a. Password Length 8-128 characters
  if (isNaN(passwordLength)) {
    window.alert("Please select a number")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Please select a number between 8 to 128")
    return
  }
// 1b. Lowercase, uppercase, numbers, special characters
  var userWantsNumbers = window.confirm("Would you like numbers as characters?")
  var userWantsSymbols = window.confirm("Would you like symbols as characters?")
  var userWantsLowercase = window.confirm("Would you like lowercase letters as characters?")
  var userWantsUppercase = window.confirm("Would you like uppercase letters as characters?")
  
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbols = ["@", "#", "$", "%"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I,", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart = []

  if (userWantsNumbers === true)  {
    optionsCart.push(numbers)
  }

  if (userWantsSymbols === true)  {
    optionsCart.push(symbols)
  }

  if (userWantsLowercase === true)  {
    optionsCart.push(lowercaseLetters)
  }

  if (userWantsUppercase === true)  {
    optionsCart.push(uppercaseLetters)
  }
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);