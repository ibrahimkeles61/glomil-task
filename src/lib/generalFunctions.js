export const takeFirstLetters = (fullName) =>
  fullName
    .split(" ")
    .map((e) => e[0])
    .join("")
    .toUpperCase();

export const makeFirstLetterCapital = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();

export const nameFormatter = (name) =>
  name
    .split(`${name.includes("-") ? "-" : " "}`)
    .map((e) => makeFirstLetterCapital(e))
    .join(" ");

export const currentPathFormatter = () => "";
