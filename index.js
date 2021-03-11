//unique array of objects
const array = [
  { a: 1, b: 2 },
  { a: 2, c: 3 },
  { a: 1, b: 2 },
];
const result = array.reduce(
  (x, y) => (x.findIndex((e) => e.a == y.a) < 0 ? [...x, y] : x),
  []
);
console.log(result);

//iterating through array
const myArr = ["the", "array"];
let i = 0;

function iter() {
  if (i < myArr.length) {
    console.log(myArr[i]);
    i++;
    iter();
  }
}
iter();

//array of similar letters
function similarLetters(word) {
  const same = ["а", "е", "р", "о", "у", "i", "x", "c"];
  let result = [];

  word
    .split("")
    .map((letter) =>
      same.includes(letter) && !result.includes(letter)
        ? result.push(letter)
        : null
    );
  return result;
}

console.log(similarLetters("ДЕрЕво".toLowerCase()));
