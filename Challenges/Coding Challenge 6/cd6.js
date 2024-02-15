"use strict";

const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
	let str = `${this.question}`;
	for (const option of poll.options) {
		str += `\n - ${option}`;
	}
	str += "\n Write option number";
	const answer = window.prompt(str);
	if (answer >= 0 && answer <= 3) this.answers[answer]++;
	this.displayResults();
	this.displayResults("string");
};

document
	.querySelector("#answer-poll")
	.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = "array") {
	if (type === "array") console.log(this.answers);
	else console.log(`Poll results are ${[...this.answers]}.`);
};

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
