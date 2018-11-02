function calculateBMI(height, weight) {
	if(height <= 0 || weight <= 0) {
		return "Ugyldige verdier!";
	}
	height /= 100;
	const bmi = Math.round(weight / (height * height) * 10) / 10;
	let categoryText = "";
	if(bmi < 18.5) {
		categoryText = "Undervektig";
	}
	else if(bmi >= 18.5 && bmi < 25) {
		categoryText = "Normalvekt";
	}
	else if(bmi >= 25 && bmi < 30) {
		categoryText = "Overvektig";
	}
	else if(bmi >= 30 && bmi < 35) {
		categoryText = "Moderat fedme";
	}
	else if(bmi >= 35 && bmi < 40) {
		categoryText = "Alvorlig fedme";
	}
	else {
		categoryText = "Svært alvorlig fedme";
	}
	return "BMI: " + bmi + ". " + categoryText;
}
function getBMI() {
	document.getElementById("result").innerHTML = calculateBMI(document.getElementById("height-input").value, document.getElementById("weight-input").value);
}
