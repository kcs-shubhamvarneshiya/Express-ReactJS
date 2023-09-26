var spanText = document.getElementById("typed")
var wordSet = ["Features","Security"]

var wordsIndex = 0;
var charIndex = 0;

function typeText() {
	if (charIndex < wordSet[wordsIndex].length) {
		spanText.textContent += wordSet[wordsIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, 200);
	}
	else {
		setTimeout(eraseText, 3000);
	}
}

function eraseText() {
	if (charIndex > 0) {
		spanText.textContent = wordSet[wordsIndex].substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, 150);
	}
	else {
		wordsIndex++;

		if (wordsIndex >= wordSet.length)
			wordsIndex = 0;
			setTimeout(typeText, 3000);
	}
}

window.onload = function() {
	if (wordSet[wordsIndex].length) setTimeout(typeText, 3000);
}