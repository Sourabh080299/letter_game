import wordBank from "./wordle-bank.txt";
// intial board
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// for facthing word bank
export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      // todays word using random function
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      // wordbank stored in set because set has low access time complexity
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
