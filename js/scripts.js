var formula = CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD;

var dayOfTheWeek = ~~formula;

var finalResult = dayOfTheWeek % 7;
console.log(finalResult);
