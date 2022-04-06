/**
 * *** TYPES ***
 * tuples
 * enums
 */

//tuple type [string, number]
//this is type with fixed size special array which has only two elements and their special types
let role: [string, number] = ["author", 4];
//role.push() works its a exception (keep in mind)

//human readable identifiers mapped value
enum ProgrammingLanguage {
  JAVASCRIPT,
  PYTHON,
  JAVA,
  CPP,
  C,
}

const language = ProgrammingLanguage.JAVASCRIPT;

if (language === ProgrammingLanguage.JAVASCRIPT) {
  console.log("Javascript");
}
