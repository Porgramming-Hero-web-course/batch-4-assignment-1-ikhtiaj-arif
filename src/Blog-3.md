Typescript Type Guards: Type guards are functions that return boolean values and are used to narrow down the type of a variable using typescript. Typescript solves the main problem of Javascript, which is type safety. By using type guards, we can further narrow down the type of variables used in typescript code.
Typescript has built-in support for javascript operators like "typeof", "instenceof" and "in" by which we can easily determine the type of value in an object. It prevents the developer from passing irrelevant types in the code.

Instenceof guard is used to check if a perticular value is an instence of the following class/ constructor/ function.
example:
variable instanceof Class
if (Child instanceof Parent) {
console.log(Child.birthDate);
}

typeof guard operator checks the perticular type of the value matches the given type or not.
example:
typeof variable === "string"
const num = 12;
typeof num === "string" // return false
typeof num === "number" // return true

in guard checks if a particular value is present in an object or not
example:
variable in object
"home" in { name: "xxx", age: 23} // return false
"age" in { name: "xxx", age: 23} // return true

All the type guards return boolean values, which help us proceed if the type is a match and break otherwise according to their needs. Typeguards help the developer prevent unintentionally passing the wrong type of value in his particular program, which can break the code.
