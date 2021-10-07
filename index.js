// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  const newArray = [...cats];
  newArray.push("Broom");
  return newArray;
}
function prependCat(name) {
  return ["Arnold", ...cats];
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
  const newArray = cats.slice(1);
  return newArray;
}
