function myValue(button) {
	var num = button.value;
	if (num == "Clear" || num == "AC") {
		document.calculator.numValue.value = " ";
		document.getElementById("ansValue").innerHTML = " ";
	}
	else {
		document.calculator.numValue.value += num;
	}
}

function answer() {
	var ans = eval(calculator.numValue.value);
	var numValue = document.getElementById("numValue").value;

	document.getElementById("ansValue").innerHTML = numValue;
	document.getElementById("numValue").value = ans;
}	
