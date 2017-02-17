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

function signFinder(monthOption, dayOption) {
	var x = document.getElementById("month");
	var m = x.options[x.selectedIndex].value;
	var y = document.getElementById("day");
	var d = y.options[y.selectedIndex].value;
	var value = parseInt(String(m) + String(d));

	for (i = 0; i < zodiacChart.length; i++) {
		if(value >= zodiacChart[i].signValue) {
			console.log(zodiacChart[i].signName);
			document.getElementById("sign").textContent = "You are a " + zodiacChart[i].signName + "!"
			document.getElementById("img").src = zodiacChart[i].image
			document.getElementById("description").textContent = zodiacChart[i].description
			document.getElementById("compatibility").textContent = zodiacChart[i].compatibleWith
			return;
		}
	}
};
