// click button and presented a series of prompts for password criteria. select which criteria to include in the password. prompt for length of password, you can choose 8-128 characters. I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters. the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// prompt has different stages for each part of the password
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	const numbers = '012345678901234567890123456789'
	return numbers[Math.floor(Math.random() * numbers.length)];
	//return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.!@#$%^&*(){}[]=<>/,.!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {

	const potentialCharacters = [];

	if (prompt("Password includes a random lowercase letter? If no, then leave blank.")) {
		potentialCharacters.push(getRandomLower);
	}	
	if (prompt("Password includes a random uppercase letter? If no, then leave blank.")) {
		potentialCharacters.push(getRandomUpper);
	}	
	if (prompt("Password includes a random number? If no, then leave blank.")) {
		potentialCharacters.push(getRandomNumber);
	} 	
	if (prompt("Password includes a random symbol? If no, then leave blank.")) {
		potentialCharacters.push(getRandomSymbol);
	}
console.log(potentialCharacters);

	let passwordLength = +prompt("How long do you want your password (between 8-128)?");
	if(typeof passwordLength !== "number" || passwordLength < 8 || passwordLength > 128) {
		alert("need # dog")
		return
	}
	let password = "";

	for(var i = 0; i < passwordLength; i++){

		const retrieve = potentialCharacters.at(Math.floor(Math.random() * potentialCharacters.length))

		password += retrieve()
	}
	return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
