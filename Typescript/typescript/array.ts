const arr: string[] = ["new"];

const newArr: (string | number)[] = [1, "heelo"];

type arg = {
  val1: number;
  val2: number;
};

const anotherArray: arg[] = [{ val1: 14, val2: 88 }];

const p = anotherArray.map((d: arg): number => {
  return d.val1 + d.val2;
});

//inferes (string | number)[]
let scores = ["Programming", 5, "Software Design", 4];
