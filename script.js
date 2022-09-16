// Assignment Code
let generateBtn = document.querySelector("#generate");
// Random Number Generator
function randomInt(min, max)  {
  if (!max) {
    max = min
    min = 0
  }
  let rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
// 1. Prompts the user 
  let userInput = window.prompt("Choose the length of your password (any number between 8 to 128 characters). Then click OK.")

  let passwordLength = parseInt(userInput)
// 1a. Password Length 8-128 characters
  if (isNaN(passwordLength)) {
    window.alert("Please Generate Password again and select a number between 8-128.")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Please Generate Password again and select a number between 8 to 128.")
    return
  }
// 1b. Lowercase, uppercase, numbers, special characters
  let userWantsNumbers = window.confirm("Would you like numbers as characters? Click OK for Yes, Cancel for No.")
  let userWantsSymbols = window.confirm("Would you like symbols as characters? Click OK for Yes, Cancel for No.")
  let userWantsLowercase = window.confirm("Would you like lowercase letters as characters? Click OK for Yes, Cancel for No.")
  let userWantsUppercase = window.confirm("Would you like uppercase letters as characters? Click OK for Yes, Cancel for No.")
  
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let symbols = ["@", "#", "$", "%"];
  let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I,", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  let optionsCart = []

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
 // 2. Validate the input
  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseLetters)
  }

  let generatedPassword = ""

  for (let i = 0; i < passwordLength; i++) {
    let randomList = getRandomItem(optionsCart)
    let randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
// 3. Generate Password 
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);