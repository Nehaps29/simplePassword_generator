// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writing generatePassword() function
function generatePassword() {
  password = "";
  conditionArray = [];
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  lower = 'abcdefghijklmnopqrstuvwxyz';
  special = '!@#$%^&*()?<>{}[]|';
  number = '1234567890';
  var length = parseInt(prompt("Please enter length between 8-128"));
  if // checking the length and character conditions
    (Number.isNaN(length) || length < 8 || length > 128) {
    alert("password length should be between 8 to 128 charactes. Click on Generate button again and select length again");
  }
  else {
    var uppercase = confirm("Do you want upper case to be include");
    console.log(uppercase);
    var lowercase = confirm("Do you want lower case to be include");
    console.log(lowercase);
    var numberCase = confirm("Do you want to add numbers");
    console.log(numberCase);
    var special_character = confirm("Do you want special character to be include");
    console.log(special_character);
  }
  if (uppercase === false && lowercase === false && special_character === false && numberCase === false) {
      alert("select atleast one character type and click generate button again");
  }
 else { //if conditions are met, adding true conditions to the condition Array
  if (uppercase === true){
    conditionArray.push(upper);
  }
  if (lowercase === true){
    conditionArray.push(lower);
  }
  if (numberCase === true){
    conditionArray.push(number);
  }
  if (special_character === true){
    conditionArray.push(special);
  }
 }
 // inner loop to go through all true values in conditionArray and create random value from it
 // outer loop to create the random values of length more than specified 
  for (var i =0; i<(length); i=i+1){
    for (var j=0; j<(conditionArray.length); j=j+1){
      password = password + (conditionArray[j][Math.floor(Math.random()* conditionArray[j].length)]);
    }
  }
  // using substr to cut down the length of created password to specified length
  password = password.substr(0,length);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");//it is selecting the text box

  passwordText.value = password; //and now displaying the password in the text box

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
