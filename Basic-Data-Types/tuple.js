/**
 * *** TYPES ***
 * tuples
 * enums
 */
//tuple type [string, number]
//this is type with fixed size special array which has only two elements and their special types
var role = ["author", 4];
//role.push() works its a exception (keep in mind)
var ProgrammingLanguage;
(function (ProgrammingLanguage) {
    ProgrammingLanguage[ProgrammingLanguage["JAVASCRIPT"] = 0] = "JAVASCRIPT";
    ProgrammingLanguage[ProgrammingLanguage["PYTHON"] = 1] = "PYTHON";
    ProgrammingLanguage[ProgrammingLanguage["JAVA"] = 2] = "JAVA";
    ProgrammingLanguage[ProgrammingLanguage["CPP"] = 3] = "CPP";
    ProgrammingLanguage[ProgrammingLanguage["C"] = 4] = "C";
})(ProgrammingLanguage || (ProgrammingLanguage = {}));
var language = ProgrammingLanguage.JAVASCRIPT;
if (language === ProgrammingLanguage.JAVASCRIPT) {
    console.log("Javascript");
}
