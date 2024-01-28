document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");
button.textContent = "Click";

const camelCase = (content) => {
	const rows = content.split("\n");

	for (const [i, row] of rows.entries()) {
		const [first, second] = row.toLowerCase().trim().split("_");
		const strFormatted =
			(first + second[0].toUpperCase() + second.slice(1)).padEnd(20) +
			"✅".repeat(i + 1);
		console.log(strFormatted);
	}
};

button.addEventListener("click", function () {
	camelCase(document.querySelector("textarea").value);
});
