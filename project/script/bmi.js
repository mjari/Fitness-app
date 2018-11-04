function calculateBMI(height, weight) {
	//Makes sure we're not dividing by zero
	if(height <= 0 || weight <= 0) {
		return "Ugyldige verdier!";
	}
	//Converts height from M to CM
	height /= 100;
	//Calculates BMI and rounds it down to only having one decimal place
	const bmi = Math.round(weight / (height * height) * 10) / 10;
	//Decides the weight category
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
	//returns BMI and category
	return "BMI: " + bmi + ". " + categoryText;
}
//Function called by button in HTML
function getBMI() {
	document.getElementById("result").innerHTML = calculateBMI(document.getElementById("height-input").value, document.getElementById("weight-input").value);
}
