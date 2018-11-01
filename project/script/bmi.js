function calculateBMI(height, weight) {
	if(height === 0) {
		return 0;
	}
	return weight / ((height * height) / 100);
}
function checkBMICategory(bmi) {
	if(bmi < 18.5) {
		return "Undervektig";
	}
	else if(bmi >= 18.5 && bmi < 25) {
		return "Normalvekt";
	}
	else if(bmi >= 25 && bmi < 30) {
		return "Overvektig";
	}
	else if(bmi >= 30 && bmi < 35) {
		return "Moderat fedme";
	}
	else if(bmi >= 35 && bmi < 40) {
		return "Alvorlig fedme";
	}
	else {
		return "Svært alvorlig fedme";
	}
}
