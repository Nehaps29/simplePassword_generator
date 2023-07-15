// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writing generatePassword() function
function generatePassword() {
  password = "";
  conditionArray = [];
  var length = parseInt(prompt("Please enter length between 8-128"));
  if // checking the length condition
    (Number.isNaN(length) || length < 8 || length > 128) {
    alert("password length should be between 8 to 128 charactes. Click on Generate button again and select length again");
  }
  else {
    var uppercase = confirm("Do you want upper case to be include");

    var lowercase = confirm("Do you want lower case to be include");

    var numberCase = confirm("Do you want to add numbers");

    var special_character = confirm("Do you want special character to be include");
    // checking the character condition
    if (lowercase === false && uppercase === false && special_character === false && number === false) {
      alert("select atleast one character type and click generate button again");
    }
  }
  //creating string of the values that should be used 
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  lower = 'abcdefghijklmnopqrstuvwxyz';
  
  special = '!@#$%^&*()?<>{}[]|';

  number = '1234567890';
  // adding the string value in condition Array if user selects it
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
