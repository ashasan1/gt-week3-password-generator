// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
var ranString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);



// var words = document.createElement("p")
// words.textContent = "Hello";
// document.body.appendChild(words);


var questionOne = prompt("What is your password length?")

if (questionOne < 8 || questionOne > 128) {
  alert("Please enter a length between 8 and 128 characters");
} 
 

function generatePassword() {
 
 console.log(ranString);

password.textContent = ranString;


 return document.card-body.appendChild(password);
 
}
 

  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Math.random().toString(36).slice(2);