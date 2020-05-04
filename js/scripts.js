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

var century = parseInt(document.getElementById("century").value);

var year = parseInt(document.getElementById("year").value);

var month = parseInt(document.getElementById("month").value);

var day = parseInt(document.getElementById("day").value);

var result = formula(century, year, month, day);

var dayOfTheWeek = ~~result;

var gender = document.getElementById("gender").value;

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

if (gender == "Female") {
  switch (dayOfTheWeek) {
    case 0:
      alert(femaleAkanNames[0]);
      break;
    case 1:
      alert(femaleAkanNames[1]);
      break;
    case 2:
      alert(femaleAkanNames[2]);
      break;
    case 3:
      alert(femaleAkanNames[3]);
      break;
    case 4:
      alert(femaleAkanNames[4]);
      break;
    case 5:
      alert(femaleAkanNames[5]);
      break;
    case 6:
      alert(femaleAkanNames[6]);
      break;
  }
} else {
  switch (dayOfTheWeek) {
    case 0:
      alert(maleAkanNames[0]);
      break;
    case 1:
      alert(maleAkanNames[1]);
      break;
    case 2:
      alert(maleAkanNames[2]);
      break;
    case 3:
      alert(maleAkanNames[3]);
      break;
    case 4:
      alert(maleAkanNames[4]);
      break;
    case 5:
      alert(maleAkanNames[5]);
      break;
    case 6:
      alert(maleAkanNames[6]);
      break;
  }
}
