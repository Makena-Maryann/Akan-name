var formula = function (century, year, month, day) {
  return (
    (century / 4 -
      2 * century -
      1 +
      (5 * year) / 4 +
      (26 * (month + 1)) / 10 +
      day) %
    7
  );
};

var century = parseInt(prompt("Enter century:"));

var year = parseInt(prompt("Enter year:"));

var month = parseInt(prompt("Enter month:"));

var day = parseInt(prompt("Enter day:"));

var result = formula(century, year, month, day);

var dayOfTheWeek = ~~result;
var female = false;
var femaleAkanNames = [
  "Ama",
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  " Afua",
];
var maleAkanNames = [
  "Kwame",
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
];
var akanName;

if (female === true) {
  switch (dayOfTheWeek) {
    case 0:
      console.log(femaleAkanNames[0]);
      break;
    case 1:
      console.log(femaleAkanNames[1]);
      break;
    case 2:
      console.log(femaleAkanNames[2]);
      break;
    case 3:
      console.log(femaleAkanNames[3]);
      break;
    case 4:
      console.log(femaleAkanNames[4]);
      break;
    case 5:
      console.log(femaleAkanNames[5]);
      break;
    case 6:
      console.log(femaleAkanNames[6]);
      break;
  }
} else {
  switch (dayOfTheWeek) {
    case 0:
      console.log(maleAkanNames[0]);
      break;
    case 1:
      console.log(maleAkanNames[1]);
      break;
    case 2:
      console.log(maleAkanNames[2]);
      break;
    case 3:
      console.log(maleAkanNames[3]);
      break;
    case 4:
      console.log(maleAkanNames[4]);
      break;
    case 5:
      console.log(maleAkanNames[5]);
      break;
    case 6:
      console.log(maleAkanNames[6]);
      break;
  }
}
