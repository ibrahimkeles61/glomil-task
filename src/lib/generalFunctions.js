export const takeFirstLetters = (fullName) => fullName.split(' ').map(e=>e[0]).join('').toUpperCase()

const makeFirstLetterCapital = (word) =>  word[0].toUpperCase() + word.slice(1)

export const tabNameFormatter = (tabName) => tabName.split('-').map(e=>makeFirstLetterCapital(e)).join(' ')