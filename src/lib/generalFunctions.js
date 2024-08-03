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

// export const currentPathFormatter = (path) => {
//   if(path.length > 4){
//     return [{id:path[0].id,sectionName:nameFormatter(path[0].sectionName)},...path.slice(-3).map(e=>{
//       return {id:e.id, sectionName:nameFormatter(e.sectionName)}
//     })]
//   }
//   return path.map(e=>nameFormatter(e.sectionName))
// }

export const currentPathFormatter = (path) =>
  path.length > 4
    ? [path[0], { id: "3.", sectionName: "..." }, ...path.slice(-3)]
    : path;

// export const currentPathFormatter = (path) =>
//   path.length > 4
//     ? [nameFormatter(path[0].sectionName), ...path.slice(-3)].map((e) =>
//         nameFormatter(e.sectionName)
//       )
//     : path.map((e) => nameFormatter(e.sectionName));

export const nameFormatterJustFirstWord = (name) =>
  name
    .split(" ")
    .map((e, i) => (i == 0 ? makeFirstLetterCapital(e) : e.toLowerCase()))
    .join(" ");
