//The string literal type is useful to limit a possible string value in a variable.

let emojis: "S" | "P" | "R" | "Y" | "U" | 4;

// const checkEmojis = (emo: emojis): void => {};

emojis = "U";

if (emojis === "U") {
  console.log("Print data");
}

type Symbols = "!" | "#" | "%" | "$";

const symCheck = (s: Symbols): void => {
  if (s === "$") {
    console.log("$");
  }

  if (s === "%") {
    console.log("%");
  }
};

symCheck("%");
