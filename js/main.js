// Create ARRAY of objects with zodiac sign info
var zodiacChart = [
	{
		signValue: 11222,
		signName: "Capricorn",
		image: "img/capricorn.png",
		description: "Capricorns are responsible, disciplined, good managers and have self-control, but can be know-it-alls, unforgiving, condescending, and pessimistic.",
		compatibleWith: "Most compatible with Taurus, Virgo, Scorpio and Pisces."
	},
	{
		signValue: 11122,
		signName: "Sagittarius",
		image: "img/sagittarius.png",
		description: "Sagittarians are generous, idealistic, and have a great sense of humor, but can also promise more than they can deliver, be very impatient, and will say anything, no matter how undiplomatic.",
		compatibleWith: "Most compatible with Aries, Leo, Libra and Aquarius."
	},
	{
		signValue: 11023,
		signName: "Scorpio",
		image: "img/scorpio.png",
		description: "Scorpios are resourceful, brave, passionate, stubborn, and a true friend, but can be distrusting, jealous, secretive, violent.",
		compatibleWith: "Most compatible with Cancer, Virgo, Capricorn and Pisces."
	},
	{
		signValue: 10923,
		signName: "Libra",
		image: "img/libra.png",
		description: "Libras are cooperative, diplomatic, gracious, fair-minded, and social, but can  be indecisive, confrontation adverse, self-pitying, and will carry a grudge.",
		compatibleWith: "Most compatible with Gemini, Leo, Sagittarius and Aquarius."
	},
	{
		signValue: 10823,
		signName: "Virgo",
		image: "img/virgo.png",
		description: "Virgos are loyal, analytical, kind, hardworking, and practical, but can be shy, overly critical of self and others, and are all work and no play.",
		compatibleWith: "Most compatible with Taurus, Cancer, Scorpio and Capricorn."
	},
	{
		signValue: 10723,
		signName: "Leo",
		image: "img/leo.png",
		description: "Leos are creative, passionate, generous, warm-hearted, cheerful, and humorous, but can be arrogant, stubborn, self-centered, lazy, and inflexible.",
		compatibleWith: "Most compatible with Aries, Gemini, Libra and Sagittarius."
	},
	{
		signValue: 10621,
		signName: "Cancer",
		image: "img/cancer.png",
		description: "Cancers are tenacious, highly imaginative, loyal, emotional, sympathetic, and persuasive, but can be moody, pessimistic, suspicious, manipulative, and insecure.",
		compatibleWith: "Most compatible with Taurus, Virgo, Scorpio and Pisces."
	},
	{
		signValue: 10521,
		signName: "Gemini",
		image: "img/gemini.png",
		description: "Geminis are gentle, affectionate, curious, adaptable, have ability to learn quickly and love to exchange ideas, but can be nervous, inconsistent, and indecisive.",
		compatibleWith: "Most compatible with Aries, Leo, Libra and Aquarius."
	},
	{
		signValue: 10420,
		signName: "Taurus",
		image: "img/taurus.png",
		description: "Taurians are reliable, patient, practical, devoted, responsible, and stable, but can be stubborn, possessive, and uncompromising.",
		compatibleWith: "Most compatible with Cancer, Virgo, Capricorn and Pisces."
	},
	{
		signValue: 10321,
		signName: "Aries",
		image: "img/aries.png",
		description: "Arians are courageous, determined, confident, enthusiastic, optimistic, honest, and passionate, but can be impatient, moody, short-tempered, impulsive, and aggressive.",
		compatibleWith: "Most compatible with Gemini, Leo, Sagittarius and Aquarius."
	},
	{
		signValue: 10219,
		signName: "Pisces",
		image: "img/pisces.png",
		description: "Pisces are compassionate, artistic, intuitive, gentle, wise, and musical, but can be fearful, overly trusting, sad, desire to escape reality, and can be a victim or a martyr.",
		compatibleWith: "Taurus, Cancer, Scorpio and Capricorn."
	},
	{
		signValue: 10120,
		signName: "Aquarius",
		image: "img/aquarius.png",
		description: "Aquarians are progressive, original, independent, humanitarian, but they also run from emotional expression and can be temperamental, uncompromising, and aloof.",
		compatibleWith: "Most compatible with Aries, Gemini, Libra and Sagittarius."
	},
	{
		signValue: 10101,
		signName: "Capricorn",
		image: "img/capricorn.png",
		description: "Capricorns are responsible, disciplined, good managers and have self-control, but can be know-it-alls, unforgiving, condescending, and pessimistic.",
		compatibleWith: "Most compatible with Taurus, Virgo, Scorpio and Pisces."
	}
];

// Create function that grabs user day and month selection data, concatentates the strings and turns the result "var value" into an interger, then compares that to the zodiacChart signValue. It then creates a div and returns the sign name, a corresponding image, and corresponding description and compatibility.
function signFinder(monthOption, dayOption) {
	// Saves the select element with id="month" as a variable x.
	var x = document.getElementById("month");
	// console.log(x)
	// Saves the value of the options element under the select element with id="month".
	var m = x.options[x.selectedIndex].value;
	// console.log(m)
	// Saves the select element with id="day" as a variable y. 
	var y = document.getElementById("day");
	// console.log(y)
	// Saves the value of the options element under the select element with id="day".
	var d = y.options[y.selectedIndex].value;
	// console.log(d)
	// Turns string values of month and day into intergers and adds them together.
	var value = parseInt(String(m) + String(d));
	// console.log(value)

	//Loops through zodiacChart array and compares value variable to signValue variable, and grabs first one that has a signValue greater than the value.
	for (i = 0; i < zodiacChart.length; i++) {
		if(value >= zodiacChart[i].signValue) {
			// Logs the signName to the console.
			console.log(zodiacChart[i].signName);
			//Adds corresponding signName plus text to the h1 element.
			document.getElementById("sign").textContent = "Your sign is: " + zodiacChart[i].signName + "!"
			// Adds the corresponding image for the chosen signName to the img element.
			document.getElementById("img").src = zodiacChart[i].image
			// Adds the corresponding description data for the chosen signName to the first p element.
			document.getElementById("description").textContent = zodiacChart[i].description
			// Adds the corresponding compatibiity data for the chosen signName to the second p element.
			document.getElementById("compatibility").textContent = zodiacChart[i].compatibleWith
			return;
		}
	}
};

//Loops through and adds option elements with values 101 through 112 to the parent select element with id="month".
for (let i = 101; i <= 112; i++) {
	// Create option element
	monthOption = document.createElement("option");
	monthOption.value = i;
	var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	monthOption.textContent = monthArray[i - 101];
	month.appendChild(monthOption);
};

//Loops through and adds option elements with values 1 through 31 to the parent select element with id="day". 
for (let i = 1; i <= 31; i++) {
	dayOption = document.createElement("option");
	dayOption.textContent = i;
	if(dayOption.textContent < 10) {
		dayOption.textContent = "0" + i;
	}
	day.appendChild(dayOption);
};