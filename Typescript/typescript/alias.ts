//Type aliases allow you to create a new name for an existing type.

type myStrType = string;

type userObjects = {
  name: string;
  lat: number;
  long: number;
};

let newUser: userObjects;

type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = "Hi"; // valid
