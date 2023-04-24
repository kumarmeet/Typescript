//Type Guards allow you to narrow down the type of a variable within a conditional block.

//typeof
type alphanumerics = string | number;

function addTest(a: alphanumerics, b: alphanumerics) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "Invalid arguments. Both arguments must be either numbers or strings."
  );
}

//instanceof

class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string = "";

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

function signContracts(partner: BusinessPartner): string {
  let message: string;

  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
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

function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signContractCheck(partner: BusinessPartner): string {
  let message: string;

  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
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
