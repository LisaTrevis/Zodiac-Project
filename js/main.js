function signFinder(monthOptions, dayOptions) {
	if(monthOptions == "January" && dayOptions >= 20) {
		var signName = "Aquarius";
	} else if (monthOptions == "February" && dayOptions <= 18) {
		var signName = "Aquarius";
	} else if (monthOptions == "February" && 18 < dayOptions <=28)	{
		var signName = "Pisces";
	} else if (monthOptions == "March" && dayOptions <= 20) {
		var signName = "Pisces";
	} else if (monthOptions == "March" && dayOptions >= 21) {
		var	signName = "Aries";
	} else if (monthOptions == "April" && dayOptions <= 19) {
		var signName = "Aries";
	} else if (monthOptions == "April" && 19 < dayOptions <= 30) {
		var signName = "Taurus";
	} else if (monthOptions == "May" && dayOptions <= 20) {
		var signName = "Taurus";
	} else if (monthOptions == "May" && dayOptions >= 21) {
		var signName = "Gemini";
	} else if (monthOptions == "June" && dayOptions <= 20) {
		var signName = "Gemini";
	} else if (monthOptions = "June" && 20 < dayOptions <= 30) {
		var signName = "Cancer";
	} else if (monthOptions = "July" && dayOptions <= 22) {
		var signName = "Cancer";
	} else if (monthOptions = "July" && dayOptions >= 23) {
		var signName = "Leo";
	} else if (monthOptions = "August" && dayOptions <= 22) {
		var signName = "Leo";
	} else if (monthOptions = "August" && dayOptions >= 23) {
		var signName = "Virgo";
	} else if (monthOptions = "September" && dayOptions <= 22) {
		var signName = "Virgo";
	} else if (monthOptions = "September" && 22 < dayOptions <= 30) {
		var signName = "Libra";
	} else if (monthOptions = "October" && dayOptions <= 22) {
		var signName = "Libra";
	} else if (monthOptions = "October" && dayOptions >= 23) {
		var signName = "Scorpio";
	} else if (monthOptions = "November" && dayOptions <= 21) {
		var signName = "Scorpio";
	} else if (monthOptions = "November" && 21 < dayOptions <= 30) {
		var signName = "Sagittarius";
	} else if (monthOptions = "December" && dayOptions <= 21) {
		var signName = "Sagittarius";
	} else if (monthOptions = "December" && dayOptions >= 22) {
		var signName = "Capricorn";
	} else if (monthOptions = "January" && dayOptions <= 19) {
		var signName = "Capricorn";
	} console.log(signName);
}









