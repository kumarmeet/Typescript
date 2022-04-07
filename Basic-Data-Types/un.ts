/**
 * unknown
 * never
 */

let find: unknown; //if don't know about what about user enter it, it could be anything
find = 10;
find = "hello";
find = [10, 20, 30];
//we could not assing find into any other typed variable coz unknown type it could be anyting
//or entered anything by the user
//unknown it can be a good choice over any type

let userName: string;

// userName = find;  error

/***********************************never type****************** */

//if any function executes when script is crash then never type is best choice to return function
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
