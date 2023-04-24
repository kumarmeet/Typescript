"use strict";
//Type Guards allow you to narrow down the type of a variable within a conditional block.
function addTest(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");
}
//instanceof
class Customer {
    isCreditAllowed() {
        // ...
        return true;
    }
}
class Supplier {
    isInShortList() {
        // ...
        return true;
    }
}
function signContract(partner) {
    let message = "";
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList()
            ? "Sign a new contract the supplier"
            : "Need to evaluate further";
        return message;
    }
    return message;
}
//in
function signContracts(partner) {
    let message;
    if ("isCreditAllowed" in partner) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    else {
        // must be Supplier
        message = partner.isInShortList()
            ? "Sign a new contract the supplier "
            : "Need to evaluate further";
    }
    return message;
}
// User-defined Type Guards
// User-defined type guards allow you to define a type guard or help TypeScript infer a type when you use a function.
// A user-defined type guard function is a function that simply returns arg is aType.
function isCustomer(partner) {
    return partner instanceof Customer;
}
function signContractCheck(partner) {
    let message;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    else {
        message = partner.isInShortList()
            ? "Sign a new contract with the supplier"
            : "Need to evaluate further";
    }
    return message;
}
/**
Type guards narrow down the type of a variable within a conditional block.
Use the typeof and instanceof operators to implement type guards in the conditional blocks
 */
