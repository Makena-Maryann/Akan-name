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

alert(dayOfTheWeek);
