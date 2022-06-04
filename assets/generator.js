
// Object containing all the different characters able to be used
var characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};


// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    var rawpassword = "";
    var passwordText = document.querySelector("#password");
    // Ask the user how long they want the password to be.
    var passLength = window.prompt('Submit a number from 8 to 128 for your password length.');
    // If the password is too long or too short they will be returned to writePassword
    if (passLength < 8 || passLength > 128) {
        window.alert("You have to choose at least a length of 8 characters and no longer than 128 characters. ");
        return writePassword();
    };
    // Ask the user if they want lowercase letters or not and notify them of thier choice.
    var lowercaseConfirm = window.confirm('Do you require lowercase letters?');
    if (lowercaseConfirm) {
        window.alert("You added lowercase letters.");
     rawpassword += characters.lowercase;
    };
    if (lowercaseConfirm === false) {
        window.alert("You did not add lowercase letters.");
    };
        // Ask the user if they want uppercase letters or not and notify them of thier choice.
    var uppercaseConfirm = window.confirm('Do you require Uppercase letters?');
    if (uppercaseConfirm) {
        window.alert("You added uppercase letters.");
        rawpassword += characters.uppercase;
    };
    if (uppercaseConfirm === false) {
        window.alert("You did not add uppercase letters.");
    };
        // Ask the user if they want symbols or not and notify them of thier choice.
    var symbolConfirm = window.confirm('Do you require symbols?');
    if (symbolConfirm) {
        window.alert("You added symbols.");
        rawpassword += characters.symbol;
    };
    if (symbolConfirm === false) {
        window.alert("You did not add symbols.");
    };
        // Ask the user if they want numbers or not and notify them of thier choice.
    var numberConfirm = window.confirm('Do you require numbers?');
    if (numberConfirm) {
        window.alert("You added numbers.");
        rawpassword += characters.number;
    };
    if (numberConfirm === false) {
        window.alert("You did not add numbers.")
    };
    // if the user doesnt choose any of the options they are sent back to the beginning
    if (numberConfirm === false && lowercaseConfirm === false && symbolConfirm === false && numberConfirm === false) {
        window.alert("You must choose at least one of the options.");
        return writePassword();
    }
    // generates and assigns password to password 
    var password = ""; 
    for (let i = 0; i < passLength; i++) {
        password += rawpassword[Math.floor(Math.random() * rawpassword.length)];
    }
    
    
    
    passwordText.value = password;

}

function generatePassword () {
    // debugger;
    writePassword();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// DUCK FOR FUN 
// <!--       _
//        .__(.)< (MEOW)
//         \___)   
//  ~~~~~~~~~~~~~~~~~~-->