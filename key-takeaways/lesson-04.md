# Playwright automation: lesson 04
## I/ Variable Scope
### 1. Global scope
- Variables declared in the global scope are accessible from anywhere in the program. They are declared outside of any function or block.
```
var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";
function testFunction() {
console.log(globalVar); // Truy cập được
console.log(globalLet); // Truy cập được
}
```

### 2. Function scope
- Variables declared inside a function are local to that function and are not accessible from outside of it.
```
function myFunction() {
var functionScoped = "Chỉ có thể truy cập trong hàm này";
let alsoFunctionScoped = "Tương tự";
console.log(functionScoped); // OK
}
console.log(functionScoped); // Error: functionScoped is not defined
```
### 3. Block scope
- Block scope restricts a variable's accessibility to the specific code block (e.g., if statements, for loops, while loops, or any pair of curly braces {}) in which it is declared.

```
if (true) {
var varVariable = "var does not have block scope";
let letVariable = "let has block scope";
const constVariable = "const also has block scope";
}
console.log(varVariable); // OK - var is not restricted to any block scope.
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined
```

### 4. Hoisting
- Hoisting in JavaScript is a behavior where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. This allows variables and functions to be accessed and used before their actual declaration in the code.

- Variables declared with `var` are hoisted and initialized with `undefined`
- Variables declared with `let` and `const` are also hoisted, but they are not initialized. Attempting to access a `let` or `const` variable before its declaration will result in a `ReferenceError`.

```
console.log(x); // undefined (not an error)
var x = 5;
// Corresponding with:
var x;
console.log(x); // undefined
x = 5;

// Declared with let or const:
console.log(y); // Error: Cannot access 'y' before initialization
let y = 5;
```

## II/ Break and Continue statements
### Break statement in loops
Break statement in a loop is used to "jumps out" (terminate) the execution of the current loop, further iterations are no longer required.
```
// Example: Find the first even number
const numbers = [1, 3, 8, 7, 9, 11];
let firstEven = null;
for (let num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break; // Dừng ngay khi tìm thấy
    }
}
```

### Continue statement
- The continue statement in JavaScript is used within loops to skip the remainder of the current iteration and proceed to the next iteration. It is distinct from the break statement, which terminates the entire loop. 
```
// Ignore even number
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even number
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

## III/ Advanced conditional statements
### 1. If...else
```
let score = 75;

if (score >= 60) {
    console.log("You pass the course");
} else {
    console.log("You must retake the course");
}
```

### 2. If...else...if
```
let score = 85;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 60) {
    console.log("Average");
} else {
    console.log("Weak");
}
```

### 3. Ternary operator
```
let age = 20;
let status = (age >= 18) ? "Adult" : "Child";
console.log(status); // "Adult"

// 
let score = 75;
let grade = score >= 90 ? "A" :
score >= 80 ? "B" :
score >= 70 ? "C" :
score >= 60 ? "D" : "F";
```
## Advanced loop statements
### 1. For...in
For..in with Object
```
const student = {
    name: "Alex",
    grade: 4
};

let info = "";
for (let key in student) {
    info += student[key] + "";
    console.log(key + ":" + student[key]);
}
console.log(info);
```

For...in with Array
```
const colors = ["red", "green", "blue"];
colors.customProperty = "rainbow";
for (let index in colors) {
    console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
// customProperty: rainbow
```
### 2. For each
```
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(value) {
    console.log(value);
});
```

## Utils function
### 1. String Utils
- `trim()`: remove whitespace characters from both ends of a string.

- `trimStart()` (or `trimLeft()`): Removes whitespace only from the beginning (left end) of the string.

- `trimEnd()` (or `trimRight()`): Removes whitespace only from the end (right end) of the string.
- `toLowerCase()`: converts a string to lowercase letters.
- `toUpperCase()`: converts a string to uppercase letters.
- `includes(<substring>)`: returns true if a string contains a specified string (case sensitive). Otherwise it returns false.
- `replace(<searchValue>, <newValue>)`: searches a string for the first instance of a value and replace with a new value. 
- `split(<separator>)`: splits a string into an array of substrings by a separator.
- `substring(<startIndex>, <endIndex>)`: Extracts characters from a string, between two specified indices (positions). If <endIndex> is omitted, it will take the rest of the string.
- `indexOf(<substring>)`: Returns the index (position) of the first occurrence of a value in a string
```
let originalString = "   Hello, World!   ";
console.log(originalString.trim()); //Output: "Hello, World!"

console.log(originalString.trimStart()); //Output: "Hello, World!   "

console.log(originalString.trimEnd()); //Output: "   Hello, World!"

console.log(originalString.toLowerCase()); //Output: "   hello, world!   "

console.log(originalString.toUpperCase()); //Output: "   HELLOW, WORLD!   "

console.log(originalString.includes("World")); //Output: true
console.log(originalString.includes("world")); //Output: false

console.log(originalString.replace(", World", " Playwright")); //Output: "   Hello Playwright!   "

console.log(originalString.split(',')); //Output: ['   Hello', ' World!   ']

originalString = "Hello Beautiful Vietnam!"
console.log(originalString.substring(7,15)); //Output: "Beautiful"

console.log(originalString.indexOf("Beautiful"));  //Output: 7
```
### 2. Array Utils
- `map()`: creates a new array from calling a function for every array element. This method does not change the original array.
```
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2)

//corresponding with:
// const doubled = numbers.map(num => {
//    return num * 2;
//});

console.log(doubled); //[2, 4, 6, 8, 10]
console.log(numbers); //[1, 2, 3, 4, 5]
```

- `filter()`: creates a new array filled with elements that pass a test provided by a function. This method does not change the original array.
```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
```
- `find()`: returns the value of the first element in an array that pass a test. This method does not change the original array.
```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
```
- `reduce()`: executes a callback function against an accumulator and each value of the array, resulting in a single output value. This method does not change the original array.
```
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}, 10);

console.log(sum)
//Output:
//accumulator: 10, current: 1
accumulator: 11, current: 2
accumulator: 13, current: 3
accumulator: 16, current: 4
accumulator: 20, current: 5
```
- `some()`: checks if any array elements pass a test (provided as a callback function) and returns true/false. This method does not change the original array.
```
const numbers = [1, 3, 5, 7, 8, 9]
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven) //Output: true
```
- `every()`: checks if all array elements pass a test (provided as a callback function) and returns true/false. This method does not change the original array.
```
const numbers = [1, 3, 5, 7, 8, 9]
const allOdd = numbers.every(num => num % 2 === 1);
console.log(allOdd) //Output: false
```
- `sort()`: sorts the elements of an array as strings in alphabetical and ascending order. This method overwrites the original array.
Sorting alphabetically works well for strings ("Apple" comes before "Banana"). But, sorting numbers can produce incorrect results. For example, "25" is bigger than "100", because "2" is bigger than "1". We can fix this by providing a "compare function".
```
const numbers = [10, 5, 40, 25, 1000, 1];
numbers.sort((a, b) => (a-b));
console.log(numbers); //[1, 5, 10, 25, 40, 1000]
```
- `push()`: adds new items to the end of an array and returns the new length. This method changes the original array.
```
const fruits = ["Banana", "Apple"];
const newLength = fruits.push("Grape", "Mango");

console.log(newLength); // 4
console.log(fruits); //["Banana", "Apple", "Grape", "Mango"]
```
- `pop()`: removes the last element of an array and returns the removed element. This method changes the original array.
```
const fruits = ["Banana", "Apple", "Grape", "Mango"];
const lastFruit = fruits.pop();

console.log(lastFruit); // 'Mango'
console.log(fruits); //["Banana", "Apple", "Grape"]
```
- `shift()`: removes the first item of an array and returns the removed element. This method changes the original array.
```
const fruits = ["Banana", "Apple", "Grape", "Mango"];
const firstFruit = fruits.shift();

console.log(firstFruit); // 'Banana'
console.log(fruits); // ["Apple", "Grape", "Mango"]
```
- `unshift()`: adds new elements to the beginning of an array and returns the new length of the array. This method overwrites the original array.
```
const fruits = ["Banana", "Apple"];
const newLength = fruits.unshift("Grape", "Mango");

console.log(newLength); // 4
console.log(fruits); //["Grape", "Mango", "Banana", "Apple"]