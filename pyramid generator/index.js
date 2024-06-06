const character = "!";
const count = 10;
const rows = [];
// replace false with true to invert the pyramid
let inverted = false;

// function to create the rows and the row count of the pyramid
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
// loop to create the rows of the pyramid
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
// to get the result
let result = ""
// for loop to handle the rows and "\n" to separate the rows
for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);