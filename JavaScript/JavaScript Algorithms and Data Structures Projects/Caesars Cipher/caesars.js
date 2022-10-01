/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
	// Quick way to create an array of letters
	const charsList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	let decodedStr = "";

	for (let c in str) {
		let idx = charsList.indexOf(str[c]);
		// For non-alphabetic chars
		if (idx == -1) {
			decodedStr += str[c];
		} else {
			decodedStr += charsList[(idx + 13) % charsList.length];
		}
	}

	console.log(decodedStr);
	return decodedStr;
}

rot13("SERR PBQR PNZC");
