// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var passLength = window.prompt("Enter any number between 8-128 characters");

  if (passLength<8) {
    return;
} if (passLength>128) {
    return;
}  
  
  var useUpper = window.confirm("Use Uppercase?");
  var useLower = window.confirm("Use Lowercase?");
  var useSpecial = window.confirm("Use special characters?");
  var useNumber = window.confirm("Use Numbers?");
  var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialChars = ["!","@","#","$","%","^","&","*","(",")","_","+","-",":","|",".","<",">","?","+","/"];
  var numChars = ["0","1","2","3","4","5","6","7","8","9"];
  var choices = [];


 if (useUpper === true) {
    choices.concat(useUpper);
    choices=choices.concat(useUpper);

} if (useLower === true) {
    choices.concat(useUpper);
    choices=choices.concat(useUpper);

} if (useSpecial === true) {
    choices.concat(useUpper);
    choices=choices.concat(useUpper);

} if (useNumber === true) {
    choices.concat(useUpper);
    choices=choices.concat(useUpper);
}; 
console.log(choices);

//for (var i=0; 1<passLength, i++) {
//result=result+choices[Math.floor(Math.random()*choices.Length)];

    return password;
};

//for (var i=0; 1<passLength, i++) {
//result=result+choices[Math.floor(Math.random()*choices.Length)];
//}

//var password = Math.floor(Math.random() * options.length);
 








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);