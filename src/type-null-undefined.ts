let nullVariable: null;
nullVariable = null;

let otherNullVariable = null; // TypeScript infers that this variable is of type 'null'.
otherNullVariable = 12345;

let undefinedVariable: undefined = undefined;
let otherUndefinedVariable = undefined; // TypeScript infers that this variable is of type 'undefined'.
// undefinedVariable = null;
