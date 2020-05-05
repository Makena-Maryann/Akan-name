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
  if (
    dd <= 0 ||
    dd > 30 ||
    mm <= 0 ||
    mm > 12 ||
    yy < 0 ||
    yy > 99 ||
    cc <= 0 ||
    cc > 99
  ) {
    alert("Wrong format of birthday entered. Please enter the correct format.");
  }
  var result =
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;

  var dayOfTheWeek = ~~result;

  if (gender == "female") {
    switch (dayOfTheWeek) {
      case 0:
        alert("Your Akan name is " + femaleAkanNames[0]);
        break;
      case 1:
        alert("Your Akan name is " + femaleAkanNames[1]);
        break;
      case 2:
        alert("Your Akan name is " + femaleAkanNames[2]);
        break;
      case 3:
        alert("Your Akan name is " + femaleAkanNames[3]);
        break;
      case 4:
        alert("Your Akan name is " + femaleAkanNames[4]);
        break;
      case 5:
        alert("Your Akan name is " + femaleAkanNames[5]);
        break;
      case 6:
        alert("Your Akan name is " + femaleAkanNames[6]);
        break;
    }
  } else {
    switch (dayOfTheWeek) {
      case 0:
        alert("Your Akan name is " + maleAkanNames[0]);
        break;
      case 1:
        alert("Your Akan name is " + maleAkanNames[1]);
        break;
      case 2:
        alert("Your Akan name is " + maleAkanNames[2]);
        break;
      case 3:
        alert("Your Akan name is " + maleAkanNames[3]);
        break;
      case 4:
        alert("Your Akan name is " + maleAkanNames[4]);
        break;
      case 5:
        alert("Your Akan name is " + maleAkanNames[5]);
        break;
      case 6:
        alert("Your Akan name is " + maleAkanNames[6]);
        break;
    }
  }
  return;
}
