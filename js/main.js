var zodiacChart = [
	{
		signValue: 11222,
		signName: "Capricorn",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 11122,
		signName: "Sagittarius",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 11023,
		signName: "Scorpio",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10923,
		signName: "Libra",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10823,
		signName: "Virgo",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10723,
		signName: "Leo",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10621,
		signName: "Cancer",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10521,
		signName: "Gemini",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10420,
		signName: "Taurus",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10321,
		signName: "Aries",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10219,
		signName: "Pisces",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10120,
		signName: "Aquarius",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
	},
	{
		signValue: 10101,
		signName: "Capricorn",
		posTraits: "",
		negTraits: "",
		compatibleWith: ""
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
			return value;
		}
	}
};









