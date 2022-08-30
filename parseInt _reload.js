// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

const parseToNum = (string) => {
	switch (string) {
		case "zero":
			return 0;
		case "one":
			return 1;
		case "two":
			return 2;
		case "three":
			return 3;
		case "four":
			return 4;
		case "five":
			return 5;
		case "six":
			return 6;
		case "seven":
			return 7;
		case "eight":
			return 8;
		case "nine":
			return 9;
		case "ten":
			return 10;
		case "eleven":
			return 11;
		case "twelve":
			return 12;
		case "thirteen":
			return 13;
		case "fourteen":
			return 14;
		case "fifteen":
			return 15;
		case "sixteen":
			return 16;
		case "seventeen":
			return 17;
		case "eighteen":
			return 18;
		case "nineteen":
			return 19;
		case "twenty":
			return 20;
		case "thirty":
			return 30;
		case "forty":
			return 40;
		case "fifty":
			return 50;
		case "sixty":
			return 60;
		case "seventy":
			return 70;
		case "eighty":
			return 80;
		case "ninety":
			return 90;
		default:
			return;
	}
};

function parseInt(string) {
	let arrayOfWords = string.split(" ");
	console.log(arrayOfWords);
	let arrayOfNums = arrayOfWords.map((word) => {
		if (word.includes("-")) {
			let complexWord = word.split("-");
			complexWord = complexWord.map((w) => parseToNum(w));
			return complexWord.reduce((acc, num) => acc + num, 0);
		} else {
			word = parseToNum(word);
			return word;
		}
	});
	return arrayOfNums.join("");
}

console.log(
	parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
);
