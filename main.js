//JS2 String Reporter

var data = prompt("Enter in any word.");

alert(data + " was entered.\nThere are " + data.length + " characters in " + 
	data + ".\n" + "The third character is '" + data.charAt(2) + "'.\n" + 
	"Lowercase: " + data.toLowerCase() + "\n" + "Uppercase: " + data.toUpperCase() + "\n" +
	data + " is a wonderful word!\n" + "Subword: " + data.substring(1, 4));


