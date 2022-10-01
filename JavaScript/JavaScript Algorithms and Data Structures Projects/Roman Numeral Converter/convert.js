/* Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
	// Values in descending order
	const valuesList = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	const conversionTable = {
		1000: "M",
		900: "CM",
		500: "D",
		400: "CD",
		100: "C",
		90: "XC",
		50: "L",
		40: "XL",
		10: "X",
		9: "IX",
		5: "V",
		4: "IV",
		1: "I"
	};
	let str = "";

	for (let i in valuesList) {
		// Break when the remaining value is smaller than the tested one
		while (num / valuesList[i] >= 1) {
			// Append the corresponding letter
			str += conversionTable[valuesList[i]];
			num -= valuesList[i];
		}
	}

	return str;
}

convertToRoman(36);
