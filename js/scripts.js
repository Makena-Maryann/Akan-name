let femaleAkanNames = [
  "Ama",
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  " Afua",
];

let maleAkanNames = [
  "Kwame",
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
];

function identity() {
  const cc = document.getElementById("century").value;
  const yy = document.getElementById("year").value;
  const mm = document.getElementById("month").value;
  const dd = document.getElementById("day").value;
  const gender = document.getElementById("sex").value;
  var result =
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;

  var dayOfTheWeek = ~~result;

  if (gender == "female") {
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
  return;
}
/*var calculate = function () {
  var cc = document.getElementById("century").value;
  var yy = document.getElementById("year").value;
  var mm = document.getElementById("month").value;
  var dd = document.getElementById("day").value;

  return (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
};

var result = ~~calculate;

alert(result);*/
//start with the function calculate which sets some conditions if met it calls the function formula
//Have several if statements in a function.
//At the end of one function, call the next.
//Create a FUNCTION GENDER.

/*function calculate() {
  var cc = document.getElementById("century").value;
  var yy = document.getElementById("year").value;
  var mm = document.getElementById("month").value;
  var dd = document.getElementById("day").value;

  var result =
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
  var dayOfTheWeek = ~~result;*/
/*function calculate() {
  if (
    dd <= 0 ||dd > 30 || mm <= 0 || mm > 12 || yy < 0 || yy > 99 || cc <= 0 || cc > 99
  ) {
    alert(
      "Wrong format of birthday entered. Please enter the format mentioned in the home section."
    );
  } else {
    identity();
    return;
  }
}*/
