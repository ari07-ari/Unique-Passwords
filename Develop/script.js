// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){

  //creates an array called options for the input options in the prompt
  var options = ["Y", "N"];

  //An alert will appear on the window displaying a message. 
  window.alert("Please answer the following prompts for your password!");

  //FOR THE LENGTH OF THE PASSWORD
    // prompt the user for how long they want their password
    var userChoiceLength = window.prompt("Please select a length for you password (between 8 and 128 characters)");
    // If user pressed Cancel, immediately end function
    if (!userChoiceLength) {
      return;
    }
    //If the user picks a number less than 8 or greater than 128, then the function will repeat again
    if(userChoiceLength < 8 || userChoiceLength > 128){
      window.alert("Incorrect input, try again!!");
      generatePassword();
    };

  // FOR ALL UPPERCASE PROMP
    //prompt if user wants upper case
    var userChoiceUpper = window.prompt("Would you like Uppercase Characters in your password? Yes (Y) or No (N)");
    // If user pressed Cancel, immediately end function
      if (!userChoiceUpper) {
      return;
    }
    // Convert to uppercase to make comparisons easier
    userChoiceUpper = userChoiceUpper.toUpperCase();
    //If the user says "Y" then execute otherwise skip.
    if (userChoiceUpper == "Y"){
      var upper = true;
    } else {
      var upper = false;
    };

  // FOR ALL LOWERCASE PROMP
    // prompt if user wants lower case
    var userChoiceLower = window.prompt("Would you like Lowercase Characters in your password? Yes (Y) or No (N)");
    // If user pressed Cancel, immediately end function
      if (!userChoiceLower) {
      return;
    };
    // Convert to uppercase to make comparisons easier
    userChoiceLower = userChoiceLower.toUpperCase();
    //If the user says "Y" then execute otherwise skip.
    if (userChoiceLower == "Y"){
      var lower = true;
    } else {
      var lower = false;
    };

  //FOR ALL NUMBERS PROMP
    //prompt if user wants numbers in their password
    var userChoiceNumeric = window.prompt("Would you like Numeric Characters in your password? Yes (Y) or No (N)");
    // If user pressed Cancel, immediately end function
    if (!userChoiceNumeric) {
      return;
    };
    // Convert to uppercase to make comparisons easier
    userChoiceNumeric = userChoiceNumeric.toUpperCase();
    //If the user says "Y" then execute otherwise skip.
    if (userChoiceNumeric == "Y"){
      var numeric = true;
    } else {
      var numeric = false;
    };


  //prompt if user wants special characters in their password
     var userChoiceSpecial = window.prompt("Would you like Special Characters in your password? Yes (Y) or No (N)");
    // If user pressed Cancel, immediately end function
    if (!userChoiceSpecial) {
       return;
     };
    // Convert to uppercase to make comparisons easier
     userChoiceSpecial = userChoiceSpecial.toUpperCase();
    //If the user says "Y" then execute otherwise skip.
     if (userChoiceSpecial == "Y"){
       var special = true;
     } else {
       var special = false;
     };

     //If user pressed No (N) to every character type, restart function
     if (lower && upper && special && !numeric){
      window.alert("Please choose at least one character type. Try again!!");
    generatePassword();
     };


  //PASSWORD GENERATOR:

  //variables with the following characters
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var low = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var spec = "~`!@#$%^&*()-_=+[]',./<>?";


  //A set of If statements for each possible outcome
  if ((upper == true) && (lower == false && special == false && numeric == false)) {
    var character = up;
  } else if ((lower == true) && (upper == false && special == false && numeric == false)) {
    var character = low;
  } else if ((numeric == true) && (upper == false && special == false && lower == false)) {
    var character = num;
  } else if ((special == true) && (upper == false && lower == false && numeric == false)) {
    var character = spec;
  } else if ((upper == true && lower == true) && (special == false && numeric == false)) {
    var character = up + low;
  } else if ((upper == true && lower == true && special == true) && (numeric == false)) {
    var character = up + low + spec;
  } else if ((upper == true && special == true) && (lower == false && numeric == false)) {
    var character = up + spec;
  } else if ((upper == true && numeric == true) && (special == false && lower == false)) {
    var character = up + num;
  } else if ((lower == true && special == true) && (upper == false && numeric == false)) {
    var character = low + spec;
  } else if ((special == true && numeric == true) && (lower == false && upper == false)) {
    var character = spec + num;
  } else if ((special == true && numeric == true && lower == true) && (upper == false)) {
    var character = spec + num + low;
  } else if ((lower == true && numeric == true) && (special == false && upper == false)) {
    var character = low + num;
  } else if ((upper == true && special == true && numeric == true) && (lower == false)) {
    var character = up + spec + num;
  } else if ((upper == true && lower == true && numeric == true) && (special == false)) {
    var character = up + low + num;
  } else {
    var character = up + low + spec + num;
  }

  //the variable password has an empty string
    var password = "";

  //creates a random index, and adds the corresponding character to our password. 
  //process repeats until the wanted length is reached
    for (var i = 0; i < userChoiceLength; i++) {
      var pos = Math.floor(Math.random() * character.length);
      password = password + character.charAt(pos);
    }
  
  //it returns the variable password
    return password;

    //
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
