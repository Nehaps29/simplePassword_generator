// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writing generatePassword() function
function generatePassword() {
  var length = parseInt(prompt("Please enter length between 8-128"));
  if (length == NaN){
    alert("generate again");

  }
  else {
    alert("number is ");
  }
  console.log(typeof length);
  console.log(length);
 
  //promt to get the length which is between 8 128
  // prompt to see if uppercase is required
  //prompt to see if lowercase is required 
  //prompt to see if special characters is required

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");//it is selecting the text box

  passwordText.value = password; //and now displaying the password in the text box

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
