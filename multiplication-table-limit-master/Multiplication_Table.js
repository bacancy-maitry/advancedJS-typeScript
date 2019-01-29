function multiplication() {
	var input = document.getElementById("number").value;
	var table = "";
	var limit = document.getElementById("limit").value;

	switch (limit) {
		case "":
			for (var i = 1; i <= 10; i++) {
				table += input + "*" + i + "=" + input * i + "<br>";
			}
			document.write("Multiplication Table of" + " " + input + " " + "is: " + "<br><br>");
			document.write(table);
			break;

		default:
			for (var i = 1; i <= limit; i++) {
				table += input + "*" + i + "=" + input * i + "<br>";
			}
			document.write("Multiplication Table of" + " " + input + " " + "is: " + "<br><br>");
			document.write(table);
	}
}
