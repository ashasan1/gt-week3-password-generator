// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {

  var completeCharacters = [];
  var counter = 1;
  var lengthOfPassword = prompt("Please choose character lenght between 8 and 128.");
  console.log(lengthOfPassword);
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please choose character lenght between 8 and 128.")
  };
  var resultSpecial = confirm("Click okay to confirm special character.");
  var resultNumeric = confirm("Click okay to confirm numbers.");
  var resultUpper = confirm("Click okay to confirm upper characters.");
  var resultLower = confirm("Click okay to confirm lower characters.");
  console.log(resultSpecial);
  for (let index = 1; index <= lengthOfPassword; index = counter) {
  if (resultSpecial === true && counter <= lengthOfPassword) {
    var special = "!@#$%^&*()";
    var specialHold = special[Math.floor(Math.random() * special.length)];
    completeCharacters.push(specialHold);
    console.log(specialHold);
    counter++;
    
  };
  if (resultNumeric === true && counter <= lengthOfPassword) {
    var number = "1234567890";
    var numberHold = number[Math.floor(Math.random() * number.length)];
    completeCharacters.push(numberHold);
    console.log(numberHold);
    counter++;

  };
  
  if (resultUpper === true && counter <= lengthOfPassword) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperHold = upperCase[Math.floor(Math.random() * upperCase.length)];
    completeCharacters.push(upperHold);
    console.log(upperHold);
    counter++;

  };
  if (resultLower === true && counter <= lengthOfPassword) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var lowerHold = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    completeCharacters.push(lowerHold);
    console.log(lowerHold);
    counter++;

  };
  }
 return completeCharacters.join("");


  // function getSpecial() {
  //   var special = "!@#$%^&*()";
  //   var specialHold = special[Math.floor(Math.random() * special.length)];
  //   completeCharacters.push(specialHold);
  //   console.log("inside if");
  // }
}