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
    var passLength = window.prompt('Submit a number from 8 to 128 for your password length.');
    if (passLength < 8 || passLength > 128) {
        window.alert("You have to choose at least a length of 8 characters and no longer than 128 characters. ");
        return writePassword();
    }
    var lowercaseConfirm = window.confirm('Do you require lowercase letters?');
    if (lowercaseConfirm) {
        window.alert("You added lowercase letters.");
     rawpassword += characters.lowercase;
    };
    var uppercaseConfirm = window.confirm('Do you require Uppercase letters?');
    if (uppercaseConfirm) {
        window.alert("You added uppercase letters.");
        rawpassword += characters.uppercase;
    }
    var symbolConfirm = window.confirm('Do you require symbols?');
    if (symbolConfirm) {
        window.alert("You added symbols.");
        rawpassword += characters.symbol;
    }
    var numberConfirm = window.confirm('Do you require numbers?');
    if (numberConfirm) {
        window.alert("You added numbers.")
        rawpassword += characters.number;
    }
    if (numberConfirm === false && lowercaseConfirm === false && symbolConfirm === false && numberConfirm === false) {
        window.alert("You must choose at least one of the options.");
        return writePassword();
    }
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
