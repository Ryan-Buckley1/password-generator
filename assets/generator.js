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
    var lowercaseConfirm = window.confirm('Do you require lowercase letters?');
    if (lowercaseConfirm) {
     rawpassword += characters.lowercase;
    };
    var uppercaseConfirm = window.confirm('Do you require Uppercase letters?');
    if (uppercaseConfirm) {
        rawpassword += characters.uppercase;
    }
    var symbolConfirm = window.confirm('Do you require symbols?');
    if (symbolConfirm) {
        rawpassword += characters.symbol;
    }
    var numberConfirm = window.confirm('Do you require numbers?');
    if (numberConfirm) {
        rawpassword += characters.number;
    }
    var password = ""; 
    for (let i = 0; i < passLength; i++) {
        password += rawpassword[Math.floor(Math.random() * rawpassword.length)]
    }
    
    
    
    passwordText.value = password;

}
function generatePassword () {
    debugger;
    writePassword();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
